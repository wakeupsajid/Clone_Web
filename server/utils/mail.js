const nodemailer = require("nodemailer");

// Initialize transporter once outside to reuse the TCP/TLS connection
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendWelcomeEmail = async (email, fullname) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to WACP Academy",
            html: `
                <h2>Hello ${fullname}</h2>
                <p>Thank you for registering with WACP Academy.</p>
                <p>Your account has been created successfully.</p>
                <br>
                <p>Regards,<br>WACP Academy</p>
            `
        };

        // Execution happens much faster now
        await transporter.sendMail(mailOptions);
        console.log("✅ Welcome email sent");

    } catch (error) {
        console.error("Email Error:", error);
    }
};

module.exports = sendWelcomeEmail;
