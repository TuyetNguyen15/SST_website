import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/index.css";

const Header = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  // State to control mobile menu visibility

  const servicesDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Nếu click vào bên ngoài Services Dropdown, tắt menu
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }

      // Nếu click vào bên ngoài Language Dropdown, tắt menu
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setLanguageDropdown(false);
      }

      // Đóng mobile menu khi click ra ngoài
      if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Toggle dropdown for services
  const toggleServicesDropdown = () => setServicesDropdown(prevState => !prevState);

  // Toggle dropdown for language
  const toggleLanguageDropdown = () => setLanguageDropdown(prevState => !prevState);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-[#020228] bg-opacity-100 shadow-md fixed w-full z-10 h-16 text-lg">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center h-full group"
        >
          <div className="relative h-full flex items-center">
            <img
              src={require('../assets/logo.png')}
              alt="SS Technology Logo"
              className="h-12 transform scale-110 transition-all duration-300 origin-left"
              style={{
                width: 'auto',
                maxHeight: '100%',
              }}
            />
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${isActive ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"
              }`
            }
          >
            {language === 'EN' ? 'About Us' : 'Giới Thiệu'}
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={toggleServicesDropdown}
              className={`hover:text-white transition duration-300 ${location.pathname.startsWith('/services')
                  ? "text-white border-b-2 border-blue-500 font-medium"
                  : "text-gray-300"
                }`}
            >
              {language === 'EN' ? 'Services ▾' : 'Dịch Vụ ▾'}
            </button>

            {servicesDropdown && (
              <div className="absolute left-0 mt-2 w-80 bg-[#020228] border border-gray-700 rounded-md shadow-lg py-1 z-20">
                <NavLink
                  to="/services/web-development"
                  className="block px-4 py-2 text-gray-100 hover:opacity-60 hover:text-white"
                  onClick={() => setServicesDropdown(false)}
                >
                  {language === 'EN' ? 'Blockchain & Decentralize Financet' : 'Phát Triển Web'}
                </NavLink>
                <NavLink
                  to="/services/mobile-app"
                  className="block px-4 py-2 text-gray-100 hover:opacity-60 hover:text-white"
                  onClick={() => setServicesDropdown(false)}
                >
                  {language === 'EN' ? 'Cross Platform Games' : 'Ứng Dụng Di Động'}
                </NavLink>
                <NavLink
                  to="/services/cloud-computing"
                  className="block px-4 py-2 text-gray-100 hover:opacity-60 hover:text-white"
                  onClick={() => setServicesDropdown(false)}
                >
                  {language === 'EN' ? ' Artificial Intelligent Solutions' : 'Điện Toán Đám Mây'}
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${isActive ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"
              }`
            }
          >
            {language === 'EN' ? 'Projects' : 'Dự Án'}
          </NavLink>
          <NavLink
            to="/group"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${isActive ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"
              }`
            }
          >
            {language === 'EN' ? 'Group' : 'Nhóm'}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${isActive ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"
              }`
            }
          >
            {language === 'EN' ? 'Contact Us' : 'Liên Hệ'}
          </NavLink>
        </div>

        {/* Language Switch */}
        <div className="hidden md:flex items-center">
  <button
    onClick={() => setLanguage(language === 'EN' ? 'VN' : 'EN')}
    className="flex items-center space-x-1"
  >
    <span className={`transition duration-300 ${language === 'VN' ? 'text-blue-500 ' : 'text-gray-200'}`}>
      VN
    </span>
    <span className="text-gray-400">/</span>
    <span className={`transition duration-300 ${language === 'EN' ? 'text-blue-500 ' : 'text-gray-200'}`}>
      EN
    </span>
  </button>
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none hamburger-button"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-0 bg-[#020228] bg-opacity-90 z-20 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 md:hidden`}
      >
        <div className="flex flex-col items-center py-8 space-y-4">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${isActive ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"
              }`
            }
          >
            {language === 'EN' ? 'About Us' : 'Giới Thiệu'}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${isActive ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"
              }`
            }
          >
            {language === 'EN' ? 'Projects' : 'Dự Án'}
          </NavLink>
          <NavLink
            to="/group"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${isActive ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"
              }`
            }
          >
            {language === 'EN' ? 'Group' : 'Nhóm'}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${isActive ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"
              }`
            }
          >
            {language === 'EN' ? 'Contact Us' : 'Liên Hệ'}
          </NavLink>
          <button
            onClick={() => setLanguage(language === 'EN' ? 'VN' : 'EN')}
            className="text-gray-100 hover:text-blue-600 transition duration-300"
          >
            {language === 'EN' ? 'VN' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
