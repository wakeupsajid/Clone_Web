import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi"; 

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount 
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // clear data and navigate 
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/"); 
  };

  return (
    // Replaced hardcoded bg-white with dynamic background variables or tokens
    <nav className="bg-[var(--bg-navbar)] text-[var(--text-main)] font-sans shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="" className="h-10 sm:h-12" />
          <h1 className="text-xl sm:text-2xl font-bold hover:text-blue-600">
            <Link to="/">WACP Academy</Link>
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer hover:text-blue-600 text-[var(--text-muted)]">
              <Link to="/BackgroundPage ">Background</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-[var(--text-muted)]">
              <Link to="/CheckProgramPage">Check Programmes</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 text-[var(--text-muted)]">
              <Link to="/CreatePage">Registration</Link>
            </li>
          </ul>

          {/* Desktop Theme Switch Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-[var(--bg-hover)] transition-colors duration-200 text-xl"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon className="text-gray-700" /> : <FiSun className="text-yellow-400" />}
          </button>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <button className="bg-blue-600 text-white px-5 py-2 rounded">
              <Link to="/LoginPage" >Login</Link>
            </button>
          )}
        </div>

        {/* Mobile menu toggle controls */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Mobile Theme Switch Button (Always visible next to menu trigger) */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-[var(--bg-hover)] transition-colors duration-200 text-xl"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon className="text-gray-700" /> : <FiSun className="text-yellow-400" />}
          </button>

          <button
            className="text-[var(--text-main)] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-4 pb-4 sm:px-6 bg-[var(--bg-navbar)]"> 
          <hr className="border-[var(--bg-hover)]" />
          <ul className="flex flex-col gap-6"> 
            <li className="cursor-pointer hover:text-blue-600 text-[var(--text-main)] text-lg"> 
              <Link to="/BackgroundPage" className="block w-full" onClick={() => setMenuOpen(false)}>Background</Link> 
            </li> 
            <li className="cursor-pointer hover:text-blue-600 text-[var(--text-main)] text-lg"> 
              <Link to="/CheckProgramPage" className="block w-full" onClick={() => setMenuOpen(false)}>Check Programmes Eligibilty & Application</Link> 
            </li> 
            <li className="cursor-pointer hover:text-blue-600 text-[var(--text-main)] text-lg"> 
              <Link to="/CreatePage" className="block w-full" onClick={() => setMenuOpen(false)}>Registration & Upload Documents</Link> 
            </li> 
          </ul>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-2xl">
              <Link to="/LoginPage" className="block w-full" onClick={() => setMenuOpen(false)}>Login</Link>
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
