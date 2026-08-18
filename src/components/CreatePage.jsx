import logo from "../assets/logo.png";
import { IoIosPersonAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Create = () => {

  const navigate = useNavigate();

  const [programme, setProgramme] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!programme || !fullname || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {

      const response = await axios.post(
        "https://sage-parking-weekly-reason.trycloudflare.com/api/auth/register",
        {
          fullname,
          email,
          password,
        }
      );

      alert(response.data.message);

      // Clear form
      setProgramme("");
      setFullname("");
      setEmail("");
      setPassword("");

      // Redirect to Login Page
      navigate("/");

    } catch (error) {

      alert(error.response?.data?.message || "Registration Failed");

    }
  };

  return (
 
    <div className="bg-[var(--bg-main)] font-sans min-h-screen flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-[var(--bg-hover)] rounded-2xl px-6 py-8">

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-20 sm:h-24" />
        </div>

        {/* Heading */}
        <div className="font-sans-serif flex flex-col items-center justify-center mt-3">
          <h1 className="text-2xl sm:text-3xl font-bold ">
            Create Account
          </h1>

          <p className="text-sm sm:text-base mt-2 text-center">
            Register for your programme. Approval from the programme admin is
            required before you can sign in.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="mt-6 font-sans-serif space-y-4">

          {/* Programme */}
          <div>
            <label className="text-[14px]">
              Select Programme
            </label>
            <select
              className="w-full rounded-2xl h-12 text-[var(--text-muted)] bg-[var(--bg-main)] border border-slate-200 mt-1 px-3"
              value={programme}
              onChange={(e) => setProgramme(e.target.value)}
            >
              <option value="">Select Programme</option>
              <option value="Primary">Primary</option>
              <option value="Learner">Learner</option>
              <option value="Admin">Admin</option>
              <option value="Sub-specialty HPM">Sub-specialty HPM</option>
              <option value="Sub-specialty RHF">Sub-specialty RHF</option>
              <option value="Sub-specialty OEH">Sub-specialty OEH</option>
              <option value="Sub-specialty EPID-BIO">
                Sub-specialty EPID-BIO
              </option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="text-[14px]">
              Full Name
            </label>
            <input
              type="text"
              className="w-full rounded-2xl h-12 border border-slate-200 mt-1 px-3"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-[14px]">
              Email Address
            </label>
            <input
              type="email"
              className="w-full rounded-2xl h-12 border border-slate-200 mt-1 px-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-[14px]">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-2xl h-12 border border-slate-200 mt-1 px-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-2xl h-12 bg-blue-600 flex items-center justify-center gap-2 text-white font-bold hover:bg-blue-700 transition cursor-pointer"
          >
            <IoIosPersonAdd className="text-xl" />
            Submit for Approval
          </button>

        </form>

        {/* Divider */}
        <div className="mt-6">
          <hr className="text-slate-200" />
        </div>

        {/* Login Link */}
        <p className="flex items-center justify-center text-[14px] mt-4">
          <Link to="/LoginPage">Already have an account?</Link>
        </p>

        <Link to="/LoginPage">
          <div className="w-full rounded-2xl h-12 bg-white border-2 border-blue-300 flex items-center justify-center mt-4 hover:bg-blue-50 transition cursor-pointer">
            <span className="text-blue-600 font-bold">
              Sign In
            </span>
          </div>
        </Link>

      </div>

    </div>
  );
};

export default Create;