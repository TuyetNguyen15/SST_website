// Footer.js
import React from "react";
import { Facebook, Linkedin, Send, MessageCircle, MapPin } from 'lucide-react';
import '../tw.css';

const Footer = () => (
  <footer className="bg-gray-900 text-white min-h-screen flex flex-col justify-center">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
      
      {/* Main Content Section */}
      <div className="text-center mb-4 lg:mb-12">
        
        {/* Get in touch button
        <button className="border border-white rounded-full px-6 py-2 lg:px-8 lg:py-3 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 mb-6 lg:mb-8 text-sm lg:text-base">
          Get in touch
        </button>
         */}
        {/* Main heading */}
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6 leading-tight">
          Supercharge your business with SSTech!
        </h2>
        
        {/* Yellow text */}
        <div className="text-yellow-400 font-bold text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8">
          SSTech for your business?
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 lg:space-x-8 mb-8 lg:mb-10">
          <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Facebook className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
          <a href="#" className="text-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
            <Linkedin className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Send className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
            <MessageCircle className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
        </div>
        
        {/* Company Information */}
        <div className="text-gray-300 text-sm lg:text-base space-y-2 lg:space-y-3 mb-8 lg:mb-10 max-w-4xl mx-auto">
          <div className="flex items-start justify-center space-x-2">
            <MapPin className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 mt-0.5" />
            <p className="text-left sm:text-center">
              Address: No.16 - 6A, Thanh Cong Ward, Ba Dinh District Ha Noi City, Viet Nam
            </p>
          </div>
          <p>Registration Number: 0110206596</p>
          <p>Registration Date: 14/12/2022</p>
        </div>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-6 mb-8 lg:mb-12">
        {['HOME', 'ABOUT', 'SERVICES', 'PRODUCTS', 'GROUP', 'CONTACT'].map((item) => (
          <a
            key={item}
            href="#"
            className="bg-gray-800 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl hover:bg-gray-700 transition-all duration-300 text-sm lg:text-base font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {item}
          </a>
        ))}
      </nav>
      
      {/* Copyright section (optional - uncomment if needed) */}
      <div className="border-t border-gray-700 pt-6 lg:pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs lg:text-sm">
          <span className="mb-2 sm:mb-0">
            Copyright © 2024 SSTech | All Rights Reserved
          </span>
          <div className="flex space-x-4 lg:space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-300">LICENSES</a>
            <a href="#" className="hover:text-white transition-colors duration-300">CHANGELOG</a>
            <a href="#" className="hover:text-white transition-colors duration-300">STYLE GUIDE</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
