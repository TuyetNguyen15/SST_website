import { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
   
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-10px) translateX(5px); }
        50% { transform: translateY(-5px) translateX(-5px); }
        75% { transform: translateY(-15px) translateX(3px); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
      }
      
      .float-animation {
        animation: float 8s linear infinite;
      }
      
      .pulse-animation {
        animation: pulse 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Inline styles thay thế Tailwind classes
  const styles = {
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden'
    },
    background: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'linear-gradient(to bottom right, #0f172a, #111827, #1e293b)'
    },
    gridOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.1,
      backgroundImage: `
        linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px'
    },
    circuitContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    horizontalLine: {
      position: 'absolute',
      height: '1px',
      background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.2), transparent)',
      left: '0%',
      width: '100%'
    },
    verticalLine: {
      position: 'absolute',
      width: '1px',
      background: 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.15), transparent)',
      top: '0%',
      height: '100%'
    },
    node: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
    },
    particleContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    particle: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      backgroundColor: 'rgba(148, 163, 184, 0.4)',
      borderRadius: '50%'
    },
    borderTop: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '1px',
      background: 'linear-gradient(to right, transparent, rgba(71, 85, 105, 0.5), transparent)'
    },
    borderBottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '1px',
      background: 'linear-gradient(to right, transparent, rgba(71, 85, 105, 0.5), transparent)'
    },
    borderLeft: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '1px',
      height: '100%',
      background: 'linear-gradient(to bottom, transparent, rgba(71, 85, 105, 0.3), transparent)'
    },
    borderRight: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '1px',
      height: '100%',
      background: 'linear-gradient(to bottom, transparent, rgba(71, 85, 105, 0.3), transparent)'
    },
    cornerTopLeft: {
      position: 'absolute',
      top: '16px',
      left: '16px',
      width: '32px',
      height: '32px',
      borderLeft: '2px solid rgba(59, 130, 246, 0.3)',
      borderTop: '2px solid rgba(59, 130, 246, 0.3)'
    },
    cornerTopRight: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      width: '32px',
      height: '32px',
      borderRight: '2px solid rgba(59, 130, 246, 0.3)',
      borderTop: '2px solid rgba(59, 130, 246, 0.3)'
    },
    cornerBottomLeft: {
      position: 'absolute',
      bottom: '16px',
      left: '16px',
      width: '32px',
      height: '32px',
      borderLeft: '2px solid rgba(6, 182, 212, 0.3)',
      borderBottom: '2px solid rgba(6, 182, 212, 0.3)'
    },
    cornerBottomRight: {
      position: 'absolute',
      bottom: '16px',
      right: '16px',
      width: '32px',
      height: '32px',
      borderRight: '2px solid rgba(6, 182, 212, 0.3)',
      borderBottom: '2px solid rgba(6, 182, 212, 0.3)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Tech Gradient Background */}
      <div style={styles.background}></div>
      
      {/* Subtle grid overlay */}
      <div style={styles.gridOverlay}></div>
      
      {/* Circuit board pattern */}
      <div style={styles.circuitContainer}>
        {/* Horizontal lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-line-${i}`}
            className="pulse-animation"
            style={{
              ...styles.horizontalLine,
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
        
        {/* Vertical lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-line-${i}`}
            className="pulse-animation"
            style={{
              ...styles.verticalLine,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2.5 + i * 0.3}s`
            }}
          />
        ))}
        
        {/* Connection nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="pulse-animation"
            style={{
              ...styles.node,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating data particles */}
      <div style={styles.particleContainer}>
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="float-animation"
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle tech border patterns */}
      <div style={styles.borderTop}></div>
      <div style={styles.borderBottom}></div>
      <div style={styles.borderLeft}></div>
      <div style={styles.borderRight}></div>
      
      {/* Corner tech accents */}
      <div style={styles.cornerTopLeft}></div>
      <div style={styles.cornerTopRight}></div>
      <div style={styles.cornerBottomLeft}></div>
      <div style={styles.cornerBottomRight}></div>
    </div>
  );
};

export default AnimatedBackground;