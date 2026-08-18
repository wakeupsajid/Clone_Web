import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[rgb(24,31,47)] font-sans mt-20 px-6 py-10 md:py-12">
      {/* Main Grid Wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-left">

        {/*  Logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="WACP Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-white font-bold text-lg tracking-wide">WACP Academy</h1>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Faculty of Community Health Online Academy
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-bold text-lg">Quick Links</h2>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link to="/" className="hover:text-white transition-colors duration-200 w-fit">
              Home
            </Link>

            <Link to="/SelectionPAge" className="hover:text-white transition-colors duration-200 w-fit">
              Apply
            </Link>
          </div>
        </div>

        {/*Disclaimer */}
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-bold text-lg">Disclaimer</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            This academy provides academic support only and does not replace WACP examinations.
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto">
        <hr className="border-gray-600 my-8" />
        <footer className="text-gray-400 text-center text-xs md:text-sm">
          ⓒ WACP Faculty of Community Health. All rights reserved. <br /><br />
          Website By wakeupSajid

        </footer>
      </div>
    </div>
  );
};

export default Footer;
