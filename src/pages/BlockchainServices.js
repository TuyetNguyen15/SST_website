import React, {useEffect, useRef} from "react";
import image6 from "../assets/image6.png";
import DeFiTechnologiesCircle from "./DeFiTechnologiesCircle ";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "../components/Footer";
import Header from "../components/header";

function BlockchainServices() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      console.log("width of container:", containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section>
      <Header className="fixed top-0 left-0 right-0 z-50" />
      
      <div 
        className="relative flex justify-center items-center min-h-screen w-full bg-[#1a1a2e] text-white pt-20 pb-5 px-5 md:pt-24 md:pb-10 md:px-10 lg:pt-28 lg:pb-12 lg:px-16 xl:pt-32 xl:pb-16 xl:px-20"
      >
        <div 
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-bottom bg-cover opacity-70 z-10"
          style={{ backgroundImage: `url(${image6})` }}
        ></div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto">
          <h1 
            id="title" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[rgba(43,120,184,1)] via-[rgba(230,153,92,1)] to-[rgba(235,187,149,1)] bg-clip-text text-transparent mb-0 leading-tight"
          >
            Blockchain & Decentralized Finance
          </h1>
          <p 
            id="subtitle" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-2.5 leading-relaxed"
          >
            Shape the Future with Decentralized Finance & Blockchain
          </p>
        </div>
      </div>
      
      <DeFiTechnologiesCircle/>
      <FeaturedProducts/>
      <Footer/>
    </section>
  );
}

export default BlockchainServices;
