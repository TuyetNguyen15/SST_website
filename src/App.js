import './App.css';
import React from 'react';
import BlockchainServices from './pages/BlockchainServices';
import FeaturedProducts from './pages/FeaturedProducts';
import GameService from './pages/GameService';
import GameSlider from './pages/GameSlider';
import { useState, useEffect } from 'react';
import Kcripto from './pages/KriptoGalaxyBattle';
import DeFiTechnologiesCircle from './pages/DeFiTechnologiesCircle ';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [<BlockchainServices key="services" />, <DeFiTechnologiesCircle/>, <FeaturedProducts key="featured" />, <Footer/>]; 

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const delta = event.deltaY;
      if (delta > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1); 
      } else if (delta < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, sections.length]);

  useEffect(() => {
    const section = document.getElementById(`section-${currentSection}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection]);

  return (
    <div className="app-container">
      {sections.map((section, index) => (
        <div
          key={index}
          id={`section-${index}`}
          className="full-screen-section"
          style={{ minHeight: "100vh" }}
        >
          {section}
        </div>
      ))}
      <style jsx>{`
        .app-container {
          overflow: hidden;
          height: 100vh;
        }
        .full-screen-section {
          width: 100%;
          height: 100vh;
          position: relative;
        }
      `}</style>
    </div>
  );
}

export default App;