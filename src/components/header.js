import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext'; // Import useLanguage
import "../assets/index.css";

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('');
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesDropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-us', 'services', 'projects', 'group', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
  //       setServicesDropdown(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [servicesDropdown]);

  const handleNavClick = (section) => {
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${section}`;
    }
    setMobileMenuOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(prevState => !prevState);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className=" shadow-md fixed w-full z-50 h-16 text-lg">
      <div className="bg-[rgba(2,2,40,0.5)] backdrop-blur-md mx-auto px-16 h-full flex justify-between items-center">
        <NavLink to="/" className="flex items-center h-full group">
          <div className="relative h-full flex items-center">
            <img src={require('../assets/logo.png')} alt="SS Technology Logo" className="h-12 transform scale-110 transition-all duration-300 origin-left" />
          </div>
        </NavLink>

        <div className="hidden md:flex space-x-6 items-center outline outline-1 outline-gray-400 rounded-full p-2">
          <NavLink to="#" onClick={() => handleNavClick('about-us')} className={`px-4 transition duration-300 ${activeSection === 'about-us' ? "bg-gray-600 text-white rounded-full" : "text-gray-300 rounded-full"}`}>
            {language === 'EN' ? 'About Us' : 'Giới Thiệu'}
          </NavLink>

          <NavLink to="#" onClick={toggleServicesDropdown} className={`hover:text-white transition duration-300 ${activeSection === 'services' ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300 relative"}`} ref={servicesDropdownRef}>
            <button className={`hover:text-white transition duration-300 ${activeSection === 'services' ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"}`}>
              {language === 'EN' ? 'Services ▾' : 'Dịch Vụ ▾'}
            </button>

            {/* Desktop Dropdown */}
            {servicesDropdown && (
              <div className="absolute left-0 mt-2 w-80 bg-[#020228] border border-gray-700 rounded-md shadow-lg py-1 z-20">
                <NavLink to="/services/blockchain-solution" className="block px-4 py-2 text-gray-100 hover:opacity-60 hover:text-white" onClick={() => setServicesDropdown(false)}>
                  {language === 'EN' ? 'Blockchain & Decentralize Finance' : 'Blockchain & Tài chính phi tập trung'}
                </NavLink>
                <NavLink to="/services/game-service" className="block px-4 py-2 text-gray-100 hover:opacity-60 hover:text-white" onClick={() => setServicesDropdown(false)}>
                  {language === 'EN' ? 'Cross Platform Games' : 'Trò chơi đa nền tảng'}
                </NavLink>
                <NavLink to="/services/ai-solution" className="block px-4 py-2 text-gray-100 hover:opacity-60 hover:text-white" onClick={() => setServicesDropdown(false)}>
                  {language === 'EN' ? 'Artificial Intelligent Solutions' : 'Giải pháp Trí tuệ Nhân tạo'}
                </NavLink>
              </div>
            )}
          </NavLink>

          <NavLink to="#" onClick={() => handleNavClick('projects')} className={`px-4 transition duration-300 ${activeSection === 'projects' ? "bg-gray-600 text-white rounded-full" : "text-gray-300 rounded-full"}`}>
            {language === 'EN' ? 'Projects' : 'Dự Án'}
          </NavLink>

          <NavLink to="#" onClick={() => handleNavClick('group')} className={`px-4 transition duration-300 ${activeSection === 'group' ? "bg-gray-600 text-white rounded-full" : "text-gray-300 rounded-full"}`}>
            {language === 'EN' ? 'Group' : 'Nhóm'}
          </NavLink>

          <NavLink to="#" onClick={() => handleNavClick('contact')} className={`px-4 transition duration-300 ${activeSection === 'contact' ? "bg-gray-600 text-white rounded-full" : "text-gray-300 rounded-full"}`}>
            {language === 'EN' ? 'Contact Us' : 'Liên Hệ'}
          </NavLink>
        </div>

        <div className="hidden md:flex items-center">
          <button onClick={() => changeLanguage(language === 'EN' ? 'VN' : 'EN')} className="flex items-center space-x-1">
            <span className={`transition duration-300 ${language === 'VN' ? 'text-blue-500' : 'text-gray-200'}`}>
              VN
            </span>
            <span className="text-gray-400">/</span>
            <span className={`transition duration-300 ${language === 'EN' ? 'text-blue-500' : 'text-gray-200'}`}>
              EN
            </span>
          </button>
        </div>

        <button className="md:hidden focus:outline-none hamburger-button" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-0 bg-[#020228] z-20 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 md:hidden`}>
        <div className="flex flex-col items-center py-8 space-y-4">
          <NavLink to="#" onClick={() => handleNavClick('about-us')} className={`px-4 transition duration-300 ${activeSection === 'about-us' ? "bg-gray-600 text-white rounded-full" : "text-gray-300 rounded-full"}`}>
            {language === 'EN' ? 'About Us' : 'Giới Thiệu'}
          </NavLink>

          <div className="relative">
            <button onClick={toggleServicesDropdown} className={`hover:text-white transition duration-300 ${activeSection === 'services' ? "text-white border-b-2 border-blue-500 font-medium" : "text-gray-300"}`}>
              {language === 'EN' ? 'Services ▾' : 'Dịch Vụ ▾'}
            </button>

            {servicesDropdown && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-auto bg-[#020228] py-1 z-20">
                <NavLink to="/services/blockchain-solution" className="block px-4 py-2 text-gray-100 hover:text-white hover:opacity-60" onClick={() => setServicesDropdown(false)} >
                  {language === 'EN' ? 'Blockchain & Decentralize Finance' : 'Blockchain & Tài chính phi tập trung'}
                </NavLink>

                <NavLink to="/services/game-service" className="block px-4 py-2 text-gray-100 hover:text-white hover:opacity-60" onClick={() => setServicesDropdown(false)} >
                  {language === 'EN' ? 'Cross Platform Games' : 'Trò chơi đa nền tảng'}
                </NavLink>

                <NavLink to="/services/ai-solution" className="block px-4 py-2 text-gray-100 hover:text-white hover:opacity-60" onClick={() => setServicesDropdown(false)} >
                  {language === 'EN' ? 'Artificial Intelligent Solutions' : 'Giải pháp Trí tuệ Nhân tạo'}
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="#" onClick={() => handleNavClick('projects')} className={`px-4 transition duration-300 ${activeSection === 'projects' ? "bg-gray-600 text-white rounded-full" : "text-gray-300 rounded-full"}`}>
            {language === 'EN' ? 'Projects' : 'Dự Án'}
          </NavLink>

          <NavLink to="#" onClick={() => handleNavClick('group')} className={`px-4 transition duration-300 ${activeSection === 'group' ? "bg-gray-600 text-white rounded-full" : "text-gray-300 rounded-full"}`}>
            {language === 'EN' ? 'Group' : 'Nhóm'}
          </NavLink>

          <NavLink to="#" onClick={() => handleNavClick('contact')} className={`px-4 transition duration-300 ${activeSection === 'contact' ? "bg-gray-600 text-white rounded-full" : "text-gray-300 rounded-full"}`}>
            {language === 'EN' ? 'Contact Us' : 'Liên Hệ'}
          </NavLink>

          <button onClick={() => changeLanguage(language === 'EN' ? 'VN' : 'EN')} className="text-gray-100 hover:text-blue-600 transition duration-300">
            {language === 'EN' ? 'VN' : 'EN'}
          </button>
          <button className="absolute top-4 right-8 text-white outline outline-1 outline-gray-400 rounded-full p-2" onClick={() => setMobileMenuOpen(false)}>
  X
</button>

        </div>
      </div>
    </nav>
  );
};

export default Header;
