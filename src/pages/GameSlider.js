import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import bling from "../assets/Frame42.png";
import AnimatedBackground from '../components/AnimatedBackground';
import { useLanguage } from "../components/LanguageContext";  

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Frame } from 'lucide-react';

const LogoWithBling = () => {
  return (
    <div style={styles.logoContainer}>
      <h1 style={styles.logoText}>
        WEB2
      </h1>
      <div style={styles.blingContainer}>
        <img 
          src={bling} 
          alt="Bling Effect"
          style={styles.blingImage}
        />
      </div>
    </div>
  );
};

const GameHeroSection = () => {
  
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  
  const gameImages = [
    {
      id: 1,
      src: image1,
      alt: "Platform Game",
      title: "Platform Adventure"
    },
    {
      id: 2,
      src: image2,
      alt: "Puzzle Game",
      title: "Color Puzzle"
    },
    {
      id: 3,
      src: image3,
      alt: "Christmas Game",
      title: "Christmas Special"
    },
    {
      id: 4,
      src: image4,
      alt: "Racing Game",
      title: "Speed Racing"
    },
    {
      id: 5,
      src: image5,
      alt: "Adventure Game",
      title: "Epic Adventure"
    }
  ];

  const itemsCount = gameImages.length;
  const angleStep = 360 / itemsCount;

  const rotate = (direction) => {
    setCurrentRotation(prev => prev + (direction * angleStep));
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 5000);
  };

  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setCurrentRotation(prev => prev + angleStep);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoRotating, angleStep]);

  return (
    <div style={styles.container}>
      
      <div style={styles.backgroundWrapper}>
        <AnimatedBackground />
      </div>
      
     
      <div style={styles.contentWrapper}>
        <LogoWithBling />
        
        
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>
            <span style={styles.subtitleBlue}>Immersed in the </span>
            <span style={styles.subtitleOrange}>entertainment </span>
            <span style={styles.subtitleRed}>world</span>
          </h2>
        </div>

        
        <div style={styles.carouselContainer}>
          <div 
            style={{
              ...styles.carouselInner,
              transform: `rotateY(${-currentRotation}deg)`,
            }}
          >
            {gameImages.map((game, index) => {
              const angle = index * angleStep;
              const isActive = Math.abs(((currentRotation % 360) + 360) % 360 - angle) < angleStep / 2 || 
                             Math.abs(((currentRotation % 360) + 360) % 360 - (angle + 360)) < angleStep / 2;
              
              return (
                <div
                  key={game.id}
                  style={{
                    ...styles.gameItem,
                    transform: `
                      translate(-50%, -50%) 
                      rotateY(${angle}deg) 
                      translateZ(360px)
                      ${isActive ? 'scale(1.15)' : 'scale(0.85)'}
                    `,
                    zIndex: isActive ? 10 : 0
                  }}
                >
                  <div style={styles.gameCard}>
                    <img 
                      src={game.src} 
                      alt={game.alt}
                      style={{
                        ...styles.gameImage,
                      }}
                    />
                    
                    
                    <div style={{
                      ...styles.gameOverlay,
                      opacity: isActive ? 1 : 0.6
                    }}>
                      <span style={{
                        ...styles.gameTitle,
                        fontSize: isActive ? '1.6rem' : '1.3rem'
                      }}>
                        {game.title}
                      </span>
                    </div>

                   
                    {isActive && (
                      <div style={styles.glowEffect}></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

      
          <button 
            onClick={() => rotate(-1)}
            style={styles.navButtonLeft}
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoRotating(true), 2000)}
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={() => rotate(1)}
            style={styles.navButtonRight}
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoRotating(true), 2000)}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Game Counter */}
        <div style={styles.counterContainer}>
          <div style={styles.counterInner}>
            {gameImages.map((_, index) => {
              const angle = index * angleStep;
              const isActive = Math.abs(((currentRotation % 360) + 360) % 360 - angle) < angleStep / 2 || 
                             Math.abs(((currentRotation % 360) + 360) % 360 - (angle + 360)) < angleStep / 2;
              
              return (
                <div
                  key={index}
                  style={{
                    ...styles.dot,
                    backgroundColor: isActive ? '#fbbf24' : '#4b5563',
                    transform: isActive ? 'scale(1.5)' : 'scale(1)',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setCurrentRotation(index * angleStep);
                    setIsAutoRotating(false);
                    setTimeout(() => setIsAutoRotating(true), 5000);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, 
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 10, 
    width: '100%',
    maxWidth: '80rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  logoContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3rem', 
    zIndex: 15, 
  },
  logoText: {
    fontSize: '4.2rem', 
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1.5rem', 
    position: 'relative',
    zIndex: 16,
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
  },
  blingContainer: {
    position: 'absolute',
    top: '4rem', 
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 12,
  },
  blingImage: {
    width: '7rem', 
    height: '7rem',
    objectFit: 'contain',
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  subtitleContainer: {
    textAlign: 'center',
    marginBottom: '4rem', // Tăng margin
    zIndex: 15,
  },
  subtitle: {
    fontSize: '1.8rem', // Tăng size
    fontWeight: '300',
    marginBottom: '0.5rem',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Thêm shadow
  },
  subtitleBlue: {
    color: '#60a5fa'
  },
  subtitleOrange: {
    color: '#fb923c'
  },
  subtitleRed: {
    color: '#f87171'
  },
  carouselContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '76rem', // Tăng max-width thêm nữa
    height: '24rem', // Tăng height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1200px', // Tăng perspective
    zIndex: 12,
  },
  carouselInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 1s ease-out'
  },
  gameItem: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transformStyle: 'preserve-3d',
    transition: 'all 1s ease-out'
  },
  gameCard: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.5s ease-out'
  },
  gameImage: {
    width: '16rem', // Tăng size
    height: '9rem', // Tăng size
    objectFit: 'cover',
    borderRadius: '1rem', // Tăng border radius
    transition: 'all 0.5s ease-out',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)', // Thêm shadow
  },
  gameOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: '1.2rem', // Tăng padding
    transition: 'opacity 0.5s ease-out'
  },
  gameTitle: {
    color: 'white',
    fontWeight: 'bold',
    transition: 'all 0.5s ease-out',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', // Thêm shadow cho text
  },
  glowEffect: {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #d97706)',
    borderRadius: '1rem',
    zIndex: -1,
    opacity: 0.6,
    filter: 'blur(8px)',
  },
  navButtonLeft: {
    position: 'absolute',
    left: '1rem', // Giảm khoảng cách một chút
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    color: 'white',
    padding: '1.2rem', // Tăng padding
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',
    backdropFilter: 'blur(4px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    zIndex: 20,
  },
  navButtonRight: {
    position: 'absolute',
    right: '1rem', // Giảm khoảng cách một chút
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    color: 'white',
    padding: '1.2rem', // Tăng padding
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',
    backdropFilter: 'blur(4px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    zIndex: 20,
  },
  counterContainer: {
    marginTop: '3rem', // Tăng margin
    textAlign: 'center',
    zIndex: 15,
  },
  counterInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem' // Tăng gap
  },
  dot: {
    width: '1rem', // Tăng size
    height: '1rem',
    borderRadius: '50%',
    transition: 'all 0.5s ease-out'
  }
};

export default GameHeroSection;