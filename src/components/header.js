import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300"
        >
          SS TECHNOLOGY
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-medium" : "text-gray-700"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/services"
            className={({ isActive }) => 
              `hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-medium" : "text-gray-700"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/projects"
            className={({ isActive }) => 
              `hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-medium" : "text-gray-700"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/group"
            className={({ isActive }) => 
              `hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-medium" : "text-gray-700"
              }`
            }
          >
            Group
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              `hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-medium" : "text-gray-700"
              }`
            }
          >
            Contact Us
          </NavLink>
          <span className="text-gray-700">网-</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;