import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://sage-parking-weekly-reason.trycloudflare.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login Successful!");
      console.log("User creditial match")

      navigate("/MembershipProgram");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
      console.log("User creditial not match")
    }
  };

  return (
  
    <div className="bg-[var(--bg-main)] font-sans min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[var(--bg-hover)] rounded-2xl px-6 py-8">

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="h-20 sm:h-24" />
        </div>

        {/* Heading */}
        <div className="font-sans-serif flex flex-col items-center justify-center mt-3">
          <h1 className="text-2xl sm:text-3xl font-medium ">
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base mt-3 text-center">
            Sign in to your WACP Academy Account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6 font-sans-serif space-y-4">

          {/* Email */}
          <div>
            <label className="text-[14px] ">
              Email Address
            </label>
            <input
              type="email"
              className="w-full rounded-2xl h-12 border border-slate-200 mt-1 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-[14px] ">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-2xl h-12 border border-slate-200 mt-1 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full rounded-2xl h-12 bg-blue-600 flex items-center justify-center text-white text-[16px] font-bold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            Sign In
          </button>


        </form>

        {/* Divider */}
        <div className="mt-8">
          <hr className="text-slate-200" />
        </div>

        {/* Register Link */}
        <p className="flex items-center justify-center text-[14px] mt-4">
          <Link to="/CreatePage">Don't have an account?</Link>
        </p>

        {/* Check Eligibility */}
        <div className="w-full rounded-2xl h-12 bg-blue-600 flex items-center justify-center mt-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer">
          <Link
            to="/SelectionPage"
            className=" block w-full text-center text-white text-[16px] font-bold"
          >
            Check Eligibility & Apply
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;