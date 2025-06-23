import React, { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  useEffect(() => {
    const title = document.getElementById("featured-title");
    title.style.opacity = "0";

    setTimeout(() => {
      title.style.transition = "opacity 1s";
      title.style.opacity = "1";
    }, 100);
  }, []);

  const features = [
    {
      title: "WispSwap - Decentralized Exchange",
      description: "WispSwap is a DEX developed on the SUI Blockchain Network, with outstanding features such as:",
      features: [
        { icon: "🔄", text: "Trade" },
        { icon: "💧", text: "Pools (Liquidity)" },
        { icon: "🌾", text: "Stake/Yield farming" },
        { icon: "🎯", text: "Prediction market" }
      ],
      image: "https://i.imgur.com/mIgVXBf.jpeg",
      alt: "DEX",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      iconColor: "#667eea"
    },
    {
      title: "Multi Level Marketing DEX",
      description: "It is a multi-level investment platform with impressive features and the ability to generate attractive profits.",
       features: [
        { icon: "⚡", text: "DEX (Decentralized Exchange)" },
        { icon: "🎁", text: "Staking with Referral System" },
        { icon: "⚙️", text: "Admin page" }
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      alt: "Multi Level Marketing DEX",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      iconColor: "#f093fb"
    },
    {
      title: "Payment Gateway & Crypto Wallet",
      description: "In this project, we have developed a payment gateway, supporting many different types of tokens, ensuring the security of Users",
      features: [
        { icon: "🪙", text: "Multi-tokens support" },
        { icon: "🔄", text: "Auto Swap" },
        { icon: "📊", text: "Monitor market prices" },
        { icon: "💼", text: "Digital Asset Management" }
      ],
      image: "https://cdn.dribbble.com/userupload/5865870/file/original-74e4e870fa4615e5abde16bcd9ee6871.png?resize=1200x900&vertical=center",
      alt: "Payment Gateway & Crypto Wallet",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      iconColor: "#4facfe"
    },
  ];

  const linkTitles = [
    "DEX - Decentralize Exchange",
    "Multi Level Marketing DEX", 
    "Payment Gateway & Crypto Wallet"
  ];

  const handleFeatureClick = (index) => {
    setSelectedFeature(index);
  };

  return (
    <div className="featured-products-container">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <h1 id="featured-title" className="featured-title">
        <span className="title-main">Featured</span>
        <span className="title-accent">Products</span>
      </h1>

      {selectedFeature !== null && (
        <div className="feature-full-screen">
          <div className="feature-image-container">
            <img 
              src={features[selectedFeature].image} 
              alt={features[selectedFeature].alt} 
              className="feature-image" 
            />
            <div className="image-overlay"></div>
          </div>
          <div className="feature-content">
            <h2 className="feature-title">{features[selectedFeature].title}</h2>
            <p className="feature-description">{features[selectedFeature].description}</p>
            {features[selectedFeature].features && (
              <div className="feature-list">
                {features[selectedFeature].features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">{feature.icon}</span>
                    <span className="feature-text">{feature.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="feature-links">
        {linkTitles.map((title, index) => (
          <a
            key={index}
            href="#"
            className={`feature-link ${selectedFeature === index ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              handleFeatureClick(index);
            }}
            style={{
              '--hover-gradient': features[index].gradient,
              '--icon-color': features[index].iconColor
            }}
          >
            <div className="link-icon">
              <div className="icon-dot"></div>
            </div>
            <span className="link-text">{title}</span>
          </a>
        ))}
      </div>

      <style jsx>{`
        
        .featured-products-container {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .bg-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          top: 10%;
          left: 80%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(240, 147, 251, 0.1) 0%, transparent 70%);
          bottom: 20%;
          left: 10%;
          animation-delay: -7s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, transparent 70%);
          top: 60%;
          right: 20%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(0px) rotate(180deg); }
          75% { transform: translateY(20px) rotate(270deg); }
        }

        .featured-title {
          font-size: 4em;
          font-weight: 800;
          text-align: center;
          margin-bottom: 60px;
          z-index: 2;
          position: relative;
          letter-spacing: -2px;
        }

        .title-main {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-accent {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-left: 20px;
        }

        .feature-full-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 80%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          z-index: 2;
          transition: all 0.3s ease;
        }

        .feature-image-container {
          position: relative;
          width: 50%;
          margin-right: 40px;
        }

        .feature-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .feature-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 30px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .feature-icon {
          font-size: 1.2em;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-text {
          font-size: 0.95em;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1));
          border-radius: 20px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .feature-image-container:hover .image-overlay {
          opacity: 1;
        }

        .feature-content {
          padding: 20px;
          text-align: left;
          max-width: 50%;
          position: relative;
        }

        .feature-title {
          font-size: 2.2em;
          font-weight: 700;
          margin-bottom: 20px;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .feature-description {
          font-size: 1.1em;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-weight: 400;
        }


        .feature-links {
          display: flex;
          justify-content: space-between;
          width: 85%;
          position: absolute;
          bottom: 40px;
          gap: 20px;
          z-index: 2;
        }

        .feature-link {
          text-decoration: none;
          font-size: 1em;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 24px 20px;
          width: calc(33.33% - 14px);
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .feature-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--hover-gradient);
          opacity: 0;
          transition: all 0.4s ease;
          z-index: -1;
        }

        .feature-link:hover::before {
          left: 0;
          opacity: 0.1;
        }

        .feature-link.active {
          color: #ffffff;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .feature-link.active::before {
          left: 0;
          opacity: 0.15;
        }

        .feature-link:hover {
          color: #ffffff;
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .link-icon {
          width: 12px;
          height: 12px;
          position: relative;
        }

        .icon-dot {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--icon-color);
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .feature-link.active .icon-dot,
        .feature-link:hover .icon-dot {
          opacity: 1;
          transform: scale(1.2);
          box-shadow: 0 0 20px var(--icon-color);
        }

        .link-text {
          font-size: 0.95em;
          line-height: 1.4;
        }

        
      `}</style>
    </div>
  );
}

export default FeaturedProducts;