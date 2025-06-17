import React from "react";
import ServiceSlider from "../components/Slider";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header className="fixed top-0 left-0 right-0 z-50" />

      <main className="pt-5">
        {/* Hero Section */}
        <section className="relative w-full min-h-[900px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={require('../assets/BGHOME.png')}
              alt="AI-Powered Solutions"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

         
          <div className="container mx-auto px-6 relative h-full flex flex-col justify-start pt-20 items-center">
            <div className="mb-[150px]">
              
              <div className="flex items-center justify-center mb-0 space-x-4">
               
                <img
                  src={require('../assets/Frame 37.png')}
                  alt="Decoration"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />

             
                <h1 className="text-2xl md:text-2xl text-[#2C78B8] mx-6">SST</h1>

            
                <img
                  src={require('../assets/Frame 36.png')}
                  alt="Decoration"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>

             
              <div className="flex items-center justify-center text-white max-w-2xl text-center">
                <div>
                  <h1 className="text-xl md:text-[64px] font-medium mb-4 whitespace-nowrap">
                    Transform Your Business with
                  </h1>
                  <h1 className="text-6xl md:text-[64px] font-medium mb-4 whitespace-nowrap">
                    AI-Powered Solutions
                  </h1>
                </div>
              </div>
            </div>

            <div className="mb-8 text-center">
              <div className="flex items-center justify-center mb-0 space-x-4">
                <img
                  src={require('../assets/Frame 37.png')}
                  alt="Decoration"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
                <h1 className="text-2xl md:text-2xl  text-[#2C78B8] mx-6">About Us</h1>
                <img
                  src={require('../assets/Frame 36.png')}
                  alt="Decoration"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <p className="text-white text-[30px] max-w-4xl mx-auto">
                A growdownt lectus nulla. Aliquet consecetur portitor tincidunt ultricies taculis integer rhoncus molestie.
                In ipsum platea ignissim dignissim convallis nulla sit cursus mi.A growdownt lectus nulla. Aliquet consecetur portitor tincidunt ultricies taculis integer rhoncus molestie.
                In ipsum platea ignissim dignissim convallis nulla sit cursus mi.
              </p>
            </div>
          </div>
        </section>

        {/* Service Slider Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <ServiceSlider />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
