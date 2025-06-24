// import React, { useState, useEffect } from 'react';
// import { useLanguage } from "../components/LanguageContext";  
// import { Lock, Database, Users, FileText, Zap, Image, Smartphone } from 'lucide-react';

// const DeFiTechnologiesCircle = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const { language } = useLanguage(); 
//   const technologies = [
//     {
//       title: "Cryptography",
//       subtitle: "Encrypt & Decrypt",
//       icon: Lock,
//       color: "#3B82F6",
//       gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)"
//     },
//     {
//       title: "Distributed Ledger",
//       subtitle: "Technology",
//       icon: Database,
//       color: "#10B981",
//       gradient: "linear-gradient(135deg, #10B981, #047857)"
//     },
//     {
//       title: "Consensus",
//       subtitle: "Mechanism",
//       icon: Users,
//       color: "#F59E0B",
//       gradient: "linear-gradient(135deg, #F59E0B, #D97706)"
//     },
//     {
//       title: "Blockchain",
//       subtitle: "Protocols",
//       icon: FileText,
//       color: "#8B5CF6",
//       gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)"
//     },
//     {
//       title: "Smart",
//       subtitle: "Contracts",
//       icon: Zap,
//       color: "#EF4444",
//       gradient: "linear-gradient(135deg, #EF4444, #DC2626)"
//     },
//     {
//       title: "NFT",
//       subtitle: "Non-Fungible Token",
//       icon: Image,
//       color: "#06B6D4",
//       gradient: "linear-gradient(135deg, #06B6D4, #0891B2)"
//     },
//     {
//       title: "Decentralized Apps",
//       subtitle: "dApp",
//       icon: Smartphone,
//       color: "#EC4899",
//       gradient: "linear-gradient(135deg, #EC4899, #DB2777)"
//     }
//   ];

//   const radius = 320;
//   const centerX = 50;
//   const centerY = 50;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % technologies.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [technologies.length]);

//   const calculatePosition = (index) => {
//     const angle = (index * 360) / technologies.length - 90;
//     const radian = (angle * Math.PI) / 180;
//     const x = centerX + (radius / 10) * Math.cos(radian);
//     const y = centerY + (radius / 10) * Math.sin(radian);
//     return { x: `${x}%`, y: `${y}%` };
//   };

//   return (
//     <div style={styles.container}>
      
//       <div style={styles.backgroundCircle1}></div>
//       <div style={styles.backgroundCircle2}></div>
//       <div style={styles.backgroundCircle3}></div>

      
//       <div style={styles.headerTitle}>
//         <h1 style={styles.mainTitle}>
//           <span style={styles.defiBold}>DeFi</span>
//           <span style={styles.defiSubtitle}> Decentralized Finance</span>
//         </h1>
//       </div>

     
//       <div style={styles.leftInfoContainer}>
//         <div style={styles.infoCard}>
//           <p style={styles.infoText}>
//           {language === 'EN' ? "Decentralize Finance (DeFi) is an important field in the Blockchain sector" : "Tài chính phi tập trung (DeFi) là một lĩnh vực quan trọng trong ngành Blockchain"}
           
//           </p>
//         </div>
//       </div>

      
//       <div style={styles.statsContainer}>
//         <div style={styles.statCard}>
//           <span style={styles.statNumber}>$43B</span>
//           <span style={styles.statLabel}>{language === 'EN' ? "Total Assets Locked in DeFi (Nov 2023) " : "Tổng tài sản khóa trong DeFi (11/2023)"}</span>
//         </div>
//       </div>

     
//       <div style={styles.circleContainer}>
        
//         <div style={styles.centralCircle}>
//           <div style={styles.centralContent}>
//             <h2 style={styles.centralTitle}>{language === 'EN' ? "Technologies Used in" : "Công nghệ được dùng"}</h2>
//             <h2 style={styles.centralSubtitle}> {language === 'EN' ? "Blockchain Sector" : "trong Blockchain"}</h2>
//           </div>
//           <div style={styles.centralGlow}></div>
//         </div>

        
//         {technologies.map((tech, index) => {
//           const position = calculatePosition(index);
//           const IconComponent = tech.icon;
//           const isActive = index === activeIndex;
          
//           return (
//             <div
//               key={index}
//               style={{
//                 ...styles.techItem,
//                 left: position.x,
//                 top: position.y,
//                 transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
//                 zIndex: isActive ? 10 : 5
//               }}
//               onMouseEnter={() => setActiveIndex(index)}
//             >
//               <div 
//                 style={{
//                   ...styles.techCard,
//                   background: isActive ? tech.gradient : 'rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(10px)',
//                   border: isActive ? `2px solid ${tech.color}` : '2px solid rgba(255, 255, 255, 0.2)',
//                   boxShadow: isActive 
//                     ? `0 20px 40px ${tech.color}40, 0 0 30px ${tech.color}30`
//                     : '0 8px 32px rgba(0, 0, 0, 0.3)'
//                 }}
//               >
//                 <div style={styles.techIcon}>
//                   <IconComponent 
//                     size={24} 
//                     color={isActive ? 'white' : tech.color}
//                   />
//                 </div>
//                 <div style={styles.techContent}>
//                   <h3 style={{
//                     ...styles.techTitle,
//                     color: isActive ? 'white' : tech.color
//                   }}>
//                     {tech.title}
//                   </h3>
//                   <p style={{
//                     ...styles.techSubtitle,
//                     color: isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'
//                   }}>
//                     {tech.subtitle}
//                   </p>
//                 </div>
//               </div>

              
//               <div 
//                 style={{
//                   ...styles.connectionLine,
//                   background: isActive ? tech.color : 'rgba(255, 255, 255, 0.2)',
//                   boxShadow: isActive ? `0 0 10px ${tech.color}` : 'none'
//                 }}
//               ></div>
//             </div>
//           );
//         })}

   
//         <div style={styles.orbitalRing}></div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: '100vh',
//     width: '100%', 
//     maxWidth: '100%', 
//     background: 'radial-gradient(circle at center, #1a1625 0%, #0f0a19 70%, #000000 100%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     overflow: 'hidden',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     padding: '2rem',
//     boxSizing: 'border-box' 
//   },
//   backgroundCircle1: {
//     position: 'absolute',
//     width: 'min(900px, 50vw)', 
//     height: 'min(900px, 50vw)',
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
//     top: '5%',
//     left: '5%',
//     animation: 'float 20s ease-in-out infinite'
//   },
//   backgroundCircle2: {
//     position: 'absolute',
//     width: 'min(700px, 40vw)', 
//     height: 'min(700px, 40vw)',
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
//     bottom: '5%',
//     right: '5%',
//     animation: 'float 25s ease-in-out infinite reverse'
//   },
//   backgroundCircle3: {
//     position: 'absolute',
//     width: 'min(500px, 30vw)', 
//     height: 'min(500px, 30vw)',
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
//     top: '50%',
//     left: '75%',
//     animation: 'float 15s ease-in-out infinite'
//   },
//   headerTitle: {
//     position: 'absolute',
//     top: '0rem',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     textAlign: 'center',
//     zIndex: 20,
//     width: '100%', // ✅ Đảm bảo không overflow
//     boxSizing: 'border-box'
//   },
//   mainTitle: {
//     margin: 0,
//     fontSize: 'clamp(2rem, 4vw, 3rem)', 
//     fontWeight: '700'
//   },
//   defiBold: {
//     color: '#3B82F6',
//     textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
//   },
//   defiSubtitle: {
//     color: 'rgba(255, 255, 255, 0.9)',
//     fontWeight: '300'
//   },
//   leftInfoContainer: {
//     position: 'absolute',
//     top: '50%',
//     left: 'max(2rem, 2vw)', 
//     transform: 'translateY(-50%)',
//     zIndex: 20,
//     maxWidth: 'calc(25vw - 2rem)'
//   },
//   infoCard: {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     padding: '1.5rem',
//     borderRadius: '1rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     maxWidth: '250px',
//     textAlign: 'center',
//     boxSizing: 'border-box' 
//   },
//   infoText: {
//     fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', 
//     color: 'rgba(255, 255, 255, 0.9)',
//     margin: 0,
//     lineHeight: '1.6',
//     fontWeight: '300'
//   },
//   statsContainer: {
//     position: 'absolute',
//     top: '50%',
//     right: 'max(2rem, 2vw)', 
//     transform: 'translateY(-50%)',
//     zIndex: 20,
//     maxWidth: 'calc(25vw - 2rem)' 
//   },
//   statCard: {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     padding: '1.5rem',
//     borderRadius: '1rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     maxWidth: '250px',
//     boxSizing: 'border-box' // ✅ Thêm box-sizing
//   },
//   statNumber: {
//     fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', // ✅ Responsive font
//     fontWeight: '700',
//     color: '#F59E0B',
//     marginBottom: '0.5rem',
//     textShadow: '0 0 20px rgba(245, 158, 11, 0.5)'
//   },
//   statLabel: {
//     fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', // ✅ Responsive font
//     color: 'rgba(255, 255, 255, 0.8)',
//     lineHeight: '1.4',
//     fontWeight: '300'
//   },
//   circleContainer: {
//     position: 'relative',
//     width: 'min(800px, 70vw)', // ✅ Responsive size
//     height: 'min(800px, 70vw)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     maxWidth: '100%', // ✅ Đảm bảo không overflow
//     maxHeight: '100%'
//   },
//   centralCircle: {
//     position: 'absolute',
//     width: 'min(240px, 25vw)', // ✅ Responsive size
//     height: 'min(240px, 25vw)',
//     borderRadius: '50%',
//     background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
//     backdropFilter: 'blur(20px)',
//     border: '2px solid rgba(255, 255, 255, 0.3)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 15,
//     boxShadow: '0 0 50px rgba(59, 130, 246, 0.3), inset 0 0 50px rgba(147, 51, 234, 0.2)'
//   },
//   centralContent: {
//     textAlign: 'center',
//     zIndex: 2,
//     padding: '1rem'
//   },
//   centralTitle: {
//     fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', 
//     fontWeight: '600',
//     color: 'white',
//     margin: '0 0 0.5rem 0',
//     textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
//     lineHeight: '1.3'
//   },
//   centralSubtitle: {
//     fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', 
//     color: 'rgba(255, 255, 255, 0.9)',
//     margin: 0,
//     fontWeight: '600',
//     letterSpacing: '0.5px',
//     lineHeight: '1.3'
//   },
//   centralGlow: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     borderRadius: '50%',
//     background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
//     animation: 'pulse 3s ease-in-out infinite',
//     zIndex: 1
//   },
//   techItem: {
//     position: 'absolute',
//     transition: 'all 0.5s ease-out'
//   },
//   techCard: {
//     width: 'min(150px, 12vw)', 
//     padding: '1.2rem',
//     borderRadius: '1rem',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease-out',
//     position: 'relative',
//     boxSizing: 'border-box' 
//   },
//   techIcon: {
//     marginBottom: '0.75rem',
//     padding: '0.6rem',
//     borderRadius: '50%',
//     background: 'rgba(255, 255, 255, 0.1)'
//   },
//   techContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   techTitle: {
//     fontSize: 'clamp(0.7rem, 1vw, 0.9rem)', 
//     fontWeight: '600',
//     margin: '0 0 0.25rem 0',
//     lineHeight: '1.2'
//   },
//   techSubtitle: {
//     fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)', 
//     margin: 0,
//     lineHeight: '1.2',
//     fontWeight: '300'
//   },
//   connectionLine: {
//     position: 'absolute',
//     width: '2px',
//     height: '70px',
//     top: '-35px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     transformOrigin: 'bottom',
//     transition: 'all 0.3s ease-out',
//     zIndex: -1
//   },
//   orbitalRing: {
//     position: 'absolute',
//     width: 'min(720px, 65vw)', 
//     height: 'min(720px, 65vw)',
//     borderRadius: '50%',
//     border: '1px dashed rgba(255, 255, 255, 0.2)',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 1,
//     animation: 'rotate 60s linear infinite'
//   }
// };

// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = `
//   @keyframes pulse {
//     0%, 100% { opacity: 0.6; transform: scale(1); }
//     50% { opacity: 1; transform: scale(1.05); }
//   }
  
//   @keyframes rotate {
//     from { transform: translate(-50%, -50%) rotate(0deg); }
//     to { transform: translate(-50%, -50%) rotate(360deg); }
//   }
  
//   @keyframes float {
//     0%, 100% { transform: translateY(0px); }
//     50% { transform: translateY(-20px); }
//   }
//   @media (max-width: 1200px) {
//     /* Ẩn side cards trên màn hình nhỏ để tránh overflow */
//   }
  
//   @media (max-width: 768px) {
//     /* Mobile adjustments */
//   }
// `;
// document.head.appendChild(styleSheet);

// export default DeFiTechnologiesCircle;

import React, { useState, useEffect } from 'react';
import { Lock, Database, Users, FileText, Zap, Image, Smartphone } from 'lucide-react';

const DeFiTechnologiesCircle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Mock language context for demonstration
  const language = 'EN';
  
  const technologies = [
    {
      title: "Cryptography",
      subtitle: "Encrypt & Decrypt",
      icon: Lock,
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)"
    },
    {
      title: "Distributed Ledger",
      subtitle: "Technology",
      icon: Database,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #047857)"
    },
    {
      title: "Consensus",
      subtitle: "Mechanism",
      icon: Users,
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #D97706)"
    },
    {
      title: "Blockchain",
      subtitle: "Protocols",
      icon: FileText,
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)"
    },
    {
      title: "Smart",
      subtitle: "Contracts",
      icon: Zap,
      color: "#EF4444",
      gradient: "linear-gradient(135deg, #EF4444, #DC2626)"
    },
    {
      title: "NFT",
      subtitle: "Non-Fungible Token",
      icon: Image,
      color: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #0891B2)"
    },
    {
      title: "Decentralized Apps",
      subtitle: "dApp",
      icon: Smartphone,
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899, #DB2777)"
    }
  ];

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const radius = isMobile ? 180 : 320;
  const centerX = 50;
  const centerY = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const calculatePosition = (index) => {
    const angle = (index * 360) / technologies.length - 90;
    const radian = (angle * Math.PI) / 180;
    const radiusPercent = isMobile ? (radius / 6) : (radius / 10);
    const x = centerX + radiusPercent * Math.cos(radian);
    const y = centerY + radiusPercent * Math.sin(radian);
    return { x: `${x}%`, y: `${y}%` };
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.backgroundCircle1}></div>
      <div style={styles.backgroundCircle2}></div>
      <div style={styles.backgroundCircle3}></div>

      
      <div style={styles.headerTitle}>
        <h1 style={styles.mainTitle}>
          <span style={styles.defiBold}>DeFi</span>
          <span style={styles.defiSubtitle}> Decentralized Finance</span>
        </h1>
      </div>

      {/* Info và Stats - Ẩn trên mobile */}
      {!isMobile && (
        <>
          <div style={styles.leftInfoContainer}>
            <div style={styles.infoCard}>
              <p style={styles.infoText}>
                {language === 'EN' ? "Decentralize Finance (DeFi) is an important field in the Blockchain sector" : "Tài chính phi tập trung (DeFi) là một lĩnh vực quan trọng trong ngành Blockchain"}
              </p>
            </div>
          </div>

          <div style={styles.statsContainer}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>$43B</span>
              <span style={styles.statLabel}>{language === 'EN' ? "Total Assets Locked in DeFi (Nov 2023)" : "Tổng tài sản khóa trong DeFi (11/2023)"}</span>
            </div>
          </div>
        </>
      )}

      {/* Mobile Stats - Hiển thị dưới title trên mobile */}
      {isMobile && (
        <div style={styles.mobileStatsContainer}>
          <div style={styles.mobileStatCard}>
            <span style={styles.mobileStatNumber}>$43B</span>
            <span style={styles.mobileStatLabel}>Total Assets Locked in DeFi</span>
          </div>
        </div>
      )}

      {/* Circle Container */}
      <div style={styles.circleContainer}>
        {/* Central Circle */}
        <div style={styles.centralCircle}>
          <div style={styles.centralContent}>
            <h2 style={styles.centralTitle}>{language === 'EN' ? "Technologies Used in" : "Công nghệ được dùng"}</h2>
            <h2 style={styles.centralSubtitle}> {language === 'EN' ? "Blockchain Sector" : "trong Blockchain"}</h2>
          </div>
          <div style={styles.centralGlow}></div>
        </div>

        {/* Technology Items */}
        {technologies.map((tech, index) => {
          const position = calculatePosition(index);
          const IconComponent = tech.icon;
          const isActive = index === activeIndex;
          
          return (
            <div
              key={index}
              style={{
                ...styles.techItem,
                left: position.x,
                top: position.y,
                transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                zIndex: isActive ? 10 : 5
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)} // Touch support
            >
              <div 
                style={{
                  ...styles.techCard,
                  background: isActive ? tech.gradient : 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: isActive ? `2px solid ${tech.color}` : '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: isActive 
                    ? `0 20px 40px ${tech.color}40, 0 0 30px ${tech.color}30`
                    : '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div style={styles.techIcon}>
                  <IconComponent 
                    size={isMobile ? 18 : 24} 
                    color={isActive ? 'white' : tech.color}
                  />
                </div>
                <div style={styles.techContent}>
                  <h3 style={{
                    ...styles.techTitle,
                    color: isActive ? 'white' : tech.color
                  }}>
                    {tech.title}
                  </h3>
                  <p style={{
                    ...styles.techSubtitle,
                    color: isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {tech.subtitle}
                  </p>
                </div>
              </div>

              {/* Connection Line */}
              <div 
                style={{
                  ...styles.connectionLine,
                  background: isActive ? tech.color : 'rgba(255, 255, 255, 0.2)',
                  boxShadow: isActive ? `0 0 10px ${tech.color}` : 'none'
                }}
              ></div>
            </div>
          );
        })}

        {/* Orbital Ring */}
        <div style={styles.orbitalRing}></div>
      </div>

      {/* Mobile Info - Hiển thị dưới cùng trên mobile */}
      {isMobile && (
        <div style={styles.mobileInfoContainer}>
          <div style={styles.mobileInfoCard}>
            <p style={styles.mobileInfoText}>
              Decentralized Finance (DeFi) is an important field in the Blockchain sector
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    maxWidth: '100%',
    background: 'radial-gradient(circle at center, #1a1625 0%, #0f0a19 70%, #000000 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: 'clamp(1rem, 3vw, 2rem)',
    boxSizing: 'border-box'
  },
  backgroundCircle1: {
    position: 'absolute',
    width: 'clamp(300px, 50vw, 900px)',
    height: 'clamp(300px, 50vw, 900px)',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
    top: '5%',
    left: '5%',
    animation: 'float 20s ease-in-out infinite'
  },
  backgroundCircle2: {
    position: 'absolute',
    width: 'clamp(200px, 40vw, 700px)',
    height: 'clamp(200px, 40vw, 700px)',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
    bottom: '5%',
    right: '5%',
    animation: 'float 25s ease-in-out infinite reverse'
  },
  backgroundCircle3: {
    position: 'absolute',
    width: 'clamp(150px, 30vw, 500px)',
    height: 'clamp(150px, 30vw, 500px)',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
    top: '50%',
    left: '75%',
    animation: 'float 15s ease-in-out infinite'
  },
  headerTitle: {
    position: 'absolute',
    top: 'clamp(1rem, 5vh, 3rem)',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    zIndex: 20,
    width: '100%',
    boxSizing: 'border-box'
  },
  mainTitle: {
    margin: 0,
    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
    fontWeight: '700',
    lineHeight: '1.2'
  },
  defiBold: {
    color: '#3B82F6',
    textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
  },
  defiSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '300'
  },
  // Desktop side cards
  leftInfoContainer: {
    position: 'absolute',
    top: '50%',
    left: 'max(1rem, 2vw)',
    transform: 'translateY(-50%)',
    zIndex: 20,
    maxWidth: 'calc(25vw - 2rem)'
  },
  infoCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    maxWidth: '250px',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  infoText: {
    fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    lineHeight: '1.6',
    fontWeight: '300'
  },
  statsContainer: {
    position: 'absolute',
    top: '50%',
    right: 'max(1rem, 2vw)',
    transform: 'translateY(-50%)',
    zIndex: 20,
    maxWidth: 'calc(25vw - 2rem)'
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '250px',
    boxSizing: 'border-box'
  },
  statNumber: {
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    fontWeight: '700',
    color: '#F59E0B',
    marginBottom: '0.5rem',
    textShadow: '0 0 20px rgba(245, 158, 11, 0.5)'
  },
  statLabel: {
    fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.4',
    fontWeight: '300'
  },
  // Mobile stats (under title)
  mobileStatsContainer: {
    position: 'absolute',
    top: 'clamp(6rem, 15vh, 8rem)',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20,
    width: '90%',
    maxWidth: '300px'
  },
  mobileStatCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  mobileStatNumber: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#F59E0B',
    marginBottom: '0.25rem',
    textShadow: '0 0 20px rgba(245, 158, 11, 0.5)'
  },
  mobileStatLabel: {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.3',
    fontWeight: '300'
  },
  // Mobile info (bottom)
  mobileInfoContainer: {
    position: 'absolute',
    bottom: 'clamp(1rem, 5vh, 3rem)',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20,
    width: '90%',
    maxWidth: '350px'
  },
  mobileInfoCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  mobileInfoText: {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    lineHeight: '1.5',
    fontWeight: '300'
  },
  circleContainer: {
    position: 'relative',
    width: 'clamp(350px, 85vw, 800px)',
    height: 'clamp(350px, 85vw, 800px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '70vh',
    marginTop: 'clamp(2rem, 8vh, 4rem)'
  },
  centralCircle: {
    position: 'absolute',
    width: 'clamp(140px, 30vw, 240px)',
    height: 'clamp(140px, 30vw, 240px)',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
    backdropFilter: 'blur(20px)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 15,
    boxShadow: '0 0 50px rgba(59, 130, 246, 0.3), inset 0 0 50px rgba(147, 51, 234, 0.2)'
  },
  centralContent: {
    textAlign: 'center',
    zIndex: 2,
    padding: 'clamp(0.5rem, 2vw, 1rem)'
  },
  centralTitle: {
    fontSize: 'clamp(0.7rem, 2.5vw, 1.2rem)',
    fontWeight: '600',
    color: 'white',
    margin: '0 0 0.25rem 0',
    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
    lineHeight: '1.2'
  },
  centralSubtitle: {
    fontSize: 'clamp(0.7rem, 2.5vw, 1.2rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    fontWeight: '600',
    letterSpacing: '0.5px',
    lineHeight: '1.2'
  },
  centralGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
    animation: 'pulse 3s ease-in-out infinite',
    zIndex: 1
  },
  techItem: {
    position: 'absolute',
    transition: 'all 0.5s ease-out'
  },
  techCard: {
    width: 'clamp(100px, 18vw, 150px)',
    height: 'clamp(100px, 18vw, 150px)',
    padding: 'clamp(0.75rem, 2vw, 1.2rem)',
    borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',
    position: 'relative',
    boxSizing: 'border-box'
  },
  techIcon: {
    marginBottom: 'clamp(0.4rem, 1vw, 0.75rem)',
    padding: 'clamp(0.3rem, 1vw, 0.6rem)',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)'
  },
  techContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  techTitle: {
    fontSize: 'clamp(0.6rem, 1.8vw, 0.9rem)',
    fontWeight: '600',
    margin: '0 0 0.15rem 0',
    lineHeight: '1.1'
  },
  techSubtitle: {
    fontSize: 'clamp(0.5rem, 1.4vw, 0.7rem)',
    margin: 0,
    lineHeight: '1.1',
    fontWeight: '300'
  },
  connectionLine: {
    position: 'absolute',
    width: '2px',
    height: 'clamp(40px, 8vw, 70px)',
    top: 'clamp(-20px, -4vw, -35px)',
    left: '50%',
    transform: 'translateX(-50%)',
    transformOrigin: 'bottom',
    transition: 'all 0.3s ease-out',
    zIndex: -1
  },
  orbitalRing: {
    position: 'absolute',
    width: 'clamp(320px, 75vw, 720px)',
    height: 'clamp(320px, 75vw, 720px)',
    borderRadius: '50%',
    border: '1px dashed rgba(255, 255, 255, 0.2)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    animation: 'rotate 60s linear infinite'
  }
};

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes pulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }
  
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @media (hover: none) and (pointer: coarse) {
    * {
      touch-action: manipulation;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1024px) {
    /* Fine-tune for tablets */
  }
  
  @media (max-width: 768px) and (orientation: landscape) {
    /* Specific adjustments for mobile landscape */
  }
`;
document.head.appendChild(styleSheet);

export default DeFiTechnologiesCircle;