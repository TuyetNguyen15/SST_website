import React, { createContext, useContext, useState } from 'react';

// Tạo context
const LanguageContext = createContext();

// Hook để sử dụng ngôn ngữ
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Cung cấp ngữ cảnh
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
