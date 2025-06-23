import React from 'react';
import character1 from '../assets/9L2NNuHY0qNWCY6fOTuMMG7Qnqt1-7ba3a8w-removebg-preview 1.png';
import character2 from '../assets/9L2NNuHY0qNWCY6fOTuMMG7Qnqt1-7ba3a8w-removebg-preview 2.png';
import character3 from '../assets/kcripto.jpg';
import bg from '../assets/Frame3853.png';

const KriptoGalaxyBattle = () => {
  return (
    <div className="container">
      <div className="background-wrapper">
        <div 
          className="background-image"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
      </div>
      
      <div className="header-wrapper">
        <div className="header-line"></div>
        <div className="header-content">
          <div className="scrolling-text-wrapper">
            <div className="scrolling-text">
              <div className="text-group">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-item">
                    <div className="dot-wrapper">
                      <div className="dot"></div>
                    </div>
                    <span>KRIPTOBATTLE.COM</span>
                  </div>
                ))}
              </div>
              
              <div className="text-spacing"></div>
              
              <div className="text-group">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-item">
                    <div className="dot-wrapper">
                      <div className="dot"></div>
                    </div>
                    <span>KRIPTOBATTLE.COM</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        
        <div className="left-section">
          {/* Title */}
          <div className="title-section">
            <h1 className="main-title">
              Kripto Galaxy Battle
            </h1>
            <p className="subtitle">
              A New Idle "Play-to-Earn"
            </p>
          </div>
          
          {/* Floating platform with characters */}
          <div className="platforms-container">
            <div className="main-platform">
              <div className="character-1">
                <img 
                  src={character1} 
                  alt="Game character 1"
                />
              </div>
              <div className="secondary-platform">
                <div className="character-2">
                  <img 
                    src={character2} 
                    alt="Game character 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - 3D Game Interface */}
        <div className="right-section">
          <div className="game-interface">
            {/* 3D Game screen effect */}
            <div className="game-screen">
              {/* Game interface mockup */}
              <div className="game-content">
                <img 
                  src={character3} 
                  alt="Game interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      
      <style jsx>{`
        .container {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        .background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .background-image {
          width: 80%;
          height: 80%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: blur(12px) brightness(0.4);
        }

        .header-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
        }

        .header-line {
          background: linear-gradient(to right, #ea580c, #eab308);
          height: 4px;
        }

        .header-content {
          background: rgba(31, 41, 55, 0.9);
          backdrop-filter: blur(4px);
          padding: 12px 0;
          position: relative;
          overflow: hidden;
        }

        .scrolling-text-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
        }

        .scrolling-text {
          display: flex;
          align-items: center;
          animation: scroll-seamless 15s linear infinite;
        }

        .text-group {
          display: flex;
          align-items: center;
          gap: 32px;
          color: #fb923c;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
        }

        .text-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dot-wrapper {
          width: 16px;
          height: 16px;
          border: 1px solid #fb923c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #fb923c;
          border-radius: 50%;
        }

        .text-spacing {
          width: 32px;
        }

        .main-content {
          position: relative;
          z-index: 10;
          height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding: 60px 32px 32px;
        }

        .left-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 32px;
        }

        .title-section {
          text-align: left;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: white;
          margin-bottom: 8px;
        }

        .subtitle {
          font-size: 24px;
          color: #d1d5db;
          font-weight: 500;
        }

        .platforms-container {
          position: relative;
        }

        .main-platform {
          position: relative;
          width: 300px;
          height: 200px;
          animation: float 4s ease-in-out infinite;
        }

        .character-1 {
          position: absolute;
          top: 50px;
          left: 50px;
          width: 80%;
          height: 80%;
          animation: float 3s ease-in-out infinite;
        }

        .character-1 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          
        }

        .secondary-platform {
          position: absolute;
          top: 200px;
          left: 200px;
          animation: float 3.5s ease-in-out infinite 0.5s;
        }

        .character-2 {
          width: 100%;
          height: 100%;
        }

        .character-2 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .right-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .game-interface {
          position: relative;
          width: 100%;
          height: 50%;
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
        }

        .game-screen {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          bottom: 12px;
          
          overflow: hidden;
        }

        .game-content {
          padding: 20px;
          height: 100%;
        }

        .game-content img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
        }

        .particle-1 {
          top: 25%;
          left: 25%;
          width: 8px;
          height: 8px;
          background: #fbbf24;
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          opacity: 0.6;
        }

        .particle-2 {
          top: 35%;
          right: 30%;
          width: 12px;
          height: 12px;
          background: #a855f7;
          animation: bounce 1s infinite;
          animation-delay: 1s;
          opacity: 0.4;
        }

        .particle-3 {
          bottom: 30%;
          left: 35%;
          width: 8px;
          height: 8px;
          background: #3b82f6;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 2s;
          opacity: 0.5;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotateZ(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotateZ(2deg); 
          }
        }
        
        @keyframes scroll-seamless {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-50%); 
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes pulse {
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
};

export default KriptoGalaxyBattle;