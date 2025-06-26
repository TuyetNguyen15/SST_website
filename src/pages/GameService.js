import React, { useEffect, useState } from "react";
import ezgif from "../assets/ezgif1.png";
import Header from "../components/header";
import Footer from "../components/Footer";
import GameSlider from './GameSlider';
import { useLanguage } from "../components/LanguageContext";
import Kcripto from './KriptoGalaxyBattle';

export default function GameService() {
const [imageHeight, setImageHeight] = useState(0);
const { language } = useLanguage(); 
useEffect(() => {
  const img = new Image();
  img.onload = () => {
    setImageHeight(img.naturalHeight);
  };
  img.src = ezgif;
}, []);
  return (
    <section>
      <Header className="fixed top-0 left-0 right-0 z-50" />
      
       <div 
    className="relative flex justify-center items-center w-full overflow-hidden bg-[#1a1a2e] text-white"
    style={{ height: `${imageHeight}px` }}
  >         
    <div
      className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover opacity-20 z-10"
      style={{ backgroundImage: `url(${ezgif})` }}
    ></div>
      
        <div className="relative z-20 text-center">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-[rgba(43,120,184,1)] via-[rgba(230,153,92,1)] to-[rgba(235,187,149,1)] bg-clip-text text-transparent mb-0">
            Cross Platform Games
          </h1>
          <p className="text-2xl text-white mt-2.5">
          {language === 'EN' ? "Accelerate Growth with Cross-Platform Game Creation" : "Tăng tốc tăng trưởng với việc sáng tạo game đa nền tảng"}
            
          </p>
        </div>
      </div>
      
      <GameSlider/>
      <Kcripto/>
      <Footer/>
    </section>
  );
}