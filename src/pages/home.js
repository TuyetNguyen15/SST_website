import React from "react";
import ServiceSlider from "../components/Slider";
import Header from "../components/header";
import Carousel from "../components/Carousel";
import ThreeColumns from "../components/ThreeColumns"; 
import { useLanguage } from "../components/LanguageContext";  
import Footer from "../components/Footer";

const Home = () => {
  const { language } = useLanguage(); 

  const columnData = [
    {
      icon: require('../assets/images/icon/GamePad.jpg'),
      title: language === 'EN' ? "Studio Games" : "Studio Games",
      description: language === 'EN' ? "The Studio Games team specializes in designing creative and engaging digital products, offering exciting and innovative gaming experiences" : "Studio Games chuyên thiết kế các sản phẩm kỹ thuật số sáng tạo và hấp dẫn, mang đến những trải nghiệm chơi game thú vị và đổi mới"
    },
    {
      icon: require('../assets/images/icon/software2.jpg'),
      title: language === 'EN' ? "Outsource Software" : "Outsource Software",
      description: language === 'EN' ? "With extensive experience in software design, the Outsource Software team is committed to delivering high-quality software solutions that optimize processes and enhance productivity" : "Đội ngũ Outsource Software với kinh nghiệm vững vàng trong lĩnh vực thiết kế phần mềm, luôn nỗ lực mang đến các giải pháp phần mềm chất lượng, giúp tối ưu hóa quy trình và nâng cao năng suất làm việc"
    },
    {
      icon: require('../assets/images/icon/web3.jpg'),
      title: language === 'EN' ? "Outsource Web3" : "Outsource Web3",
      description: language === 'EN' ? "The Outsource Web3 team delivers Web3 solutions, helping businesses develop blockchain platforms and decentralized applications (DApps)" : "Outsource Web3 cung cấp các giải pháp Web3, hỗ trợ doanh nghiệp phát triển nền tảng blockchain và các ứng dụng phi tập trung (DApps)"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header className="fixed top-0 left-0 right-0 z-50" />

      <main >
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] md:min-h-[700px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={require('../assets/BGHOME.png')}
              alt={language === 'EN' ? "AI-Powered Solutions" : "Giải Pháp AI"}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container mx-auto px-6 relative h-full flex flex-col justify-start pt-20 items-center">
            <div id="about-us" className="mb-[150px]">
              <div className="flex items-center justify-center mb-0 space-x-4">
                <img
                  src={require('../assets/Frame 37.png')}
                  alt="Decoration"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#2C78B8] mx-6">SST</h1>
                <img
                  src={require('../assets/Frame 36.png')}
                  alt="Decoration"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>

              <div className="flex items-center justify-center text-white max-w-2xl text-center">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-[64px] font-medium mb-12 whitespace-nowrap ">
                    {language === 'EN' ? "Transform Your Business with" : "Tăng Tốc Doanh Nghiệp Với "}
                  </h1>
                  <h1 className="text-3xl sm:text-4xl md:text-[64px] font-medium mb-4 whitespace-nowrap">
                    {language === 'EN' ? "AI-Powered Solutions" : "Công Nghệ AI Thông Minh"}
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#2C78B8] mx-6">{language === 'EN' ? "About Us" : "Giới Thiệu"}</h1>
                <img
                  src={require('../assets/Frame 36.png')}
                  alt="Decoration"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <p className="text-white text-[20px] sm:text-[24px] md:text-[30px] max-w-4xl mx-auto">
                {language === 'EN' ? "SSTech provides comprehensive technology solutions, helping businesses enhance efficiency and achieve sustainable growth through innovative and cutting-edge services" : "SSTech cung cấp các giải pháp công nghệ toàn diện, giúp doanh nghiệp nâng cao hiệu quả và phát triển bền vững thông qua các dịch vụ sáng tạo và đột phá"}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="pt-12 bg-white">
          <div id="service" className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl  md:text-5xl font-bold mb-8">
              <span className="text-customer">
                {language === 'EN' ? "Explore Our Services" : "Dịch Vụ Của Chúng Tôi"}
              </span>
            </h2>

            <p className="text-xl sm:text-2xl md:text-1xl text-gray-600 mb-6 max-w-3xl mx-auto">
              {language === 'EN' ? "Delivering Professional Services Tailored to Your Needs" : "Cung cấp giải pháp chuyên nghiệp, tùy chỉnh theo yêu cầu và mục tiêu của doanh nghiệp bạn"}
            </p>
            <ServiceSlider />
          </div>

          {/* Projects Section */}
          <div id="projects" className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-customer-reversed">
                {language === 'EN' ? "Explore Our Success Stories" : "Dự Án Của Chúng Tôi"}
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-1xl text-gray-600 max-w-4xl mx-auto">
              {language === 'EN' ? "Our products deliver real value and effectiveness, meeting the needs and expectations of our clients" : "Các sản phẩn mang lại giá trị thực tế và hiệu quả"}
            </p>
            <Carousel />
          </div>

          {/* Group Section */}
          <div id="group" className="container min-h-[600px] bg-customer mx-auto px-4 text-center mt-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <span className="text-customer">
                {language === 'EN' ? "SSTech Groups" : "SSTech Groups"}
              </span>
            </h2>
            <ThreeColumns data={columnData} />
          </div>
        </section>
      </main>
      <div id="contact">
      <Footer />
      </div>
    </div>
  );
};

export default Home;
