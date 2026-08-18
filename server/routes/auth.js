const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendWelcomeEmail = require("../utils/mail");

const router = express.Router();


const { sql } = require("../db");

// Test Route

router.get("/", (req, res) => {
    res.json({ message: "Authentication API Working" });
});


// Register User

router.post("/register", async (req, res) => {

    try {

        const { fullname, email, password } = req.body || {};

        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if email already exists
        const checkUser = await sql.query`
            SELECT * FROM Users WHERE Email = ${email}
        `;

        if (checkUser.recordset.length > 0) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert User
        await sql.query`
            INSERT INTO Users (FullName, Email, PasswordHash)
            VALUES (${fullname}, ${email}, ${hashedPassword})
        `;
        await sendWelcomeEmail(email, fullname);

        res.status(201).json({
            message: "Account created successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});


// Login User

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body || {};

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Find User
        const result = await sql.query`
            SELECT * FROM Users WHERE Email = ${email}
        `;

        if (result.recordset.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const user = result.recordset[0];

        // Compare Password
        const isMatch = await bcrypt.compare(password, user.PasswordHash);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        // Generate JWT Token
        const token = jwt.sign(
            {
                id: user.Id,
                email: user.Email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.Id,
                fullname: user.FullName,
                email: user.Email
            }
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});

module.exports = router;