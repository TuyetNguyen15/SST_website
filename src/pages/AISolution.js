import React from "react";
import Header from "../components/header";
import "../assets/index.css";
import { useLanguage } from "../components/LanguageContext";
import Footer from "../components/Footer";

const AIPage = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50">
            <Header className="fixed top-0 left-0 right-0 z-50" />

            <main >
                {/* Hero Section */}
                <section className="relative w-full min-h-[720px] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={require('../assets/background_ai.jpg')}
                            alt={language === 'EN' ? "background" : "Nền AI"}
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                    </div>
                    <div className="container mx-auto px-6 relative h-full flex flex-col justify-center mt-[150px] items-center">
                        <div className="mb-[40px]">
                            <div className="flex items-center justify-center text-white max-w-2xl text-center">
                                <div>
                                    <h1 className="text-customer text-[30px] sm:text-[30px] md:text-[64px] md:text-[70px] font-medium mb-4 whitespace-nowrap ">
                                        {language === 'EN' ? "Artificial Intelligent Solutions" : "Giải Pháp Trí Tuệ Nhân Tạo"}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8 text-center">
                            <p className="text-white text-[30px] sm:text-[30px] md:text-[50px] max-w-4xl mx-auto inline">
                                {language === 'EN' ? "Unlock business value with AI-powered solutions" : "Khám phá giá trị doanh nghiệp qua giải pháp AI"}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-customer-2 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-2xl md:text-2xl text-left text-gray-800 mb-8 leading-relaxed">
                            {language === 'EN' ? "The information camera system project is equipped with Artificial Intelligence technology to identify traffic violations" : "Dự án hệ thống camera thông minh được trang bị công nghệ Trí Tuệ Nhân Tạo để nhận diện vi phạm giao thông"}
                        </p>

                        <div className="mb-6 flex justify-center">
                            <img
                                src={require('../assets/ai_camera.jpg')}
                                alt={language === 'EN' ? "Smart Camera AI" : "Camera Thông Minh AI"}
                                className="rounded-lg shadow-xl w-[938px] h-[400px]"
                            />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-customer-2 mb-6 py-2 text-left w-full ">
                            {language === 'EN' ? "Smart traffic camera" : "Camera giao thông"}
                        </h2>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-customer-reversed mb-6 py-2 text-left w-full  ">
                            {language === 'EN' ? "Solution for Police" : "Giải pháp cho Cảnh Sát"}
                        </h2>
                    </div>
                </section>

                <section className="bg-customer-3 py-12 px-4 sm:px-6 lg:px-8 min-h-[200px] flex items-start">
                    <div className="max-w-6xl mx-auto w-full">
                        <h2 className="text-3xl md:text-5xl text-white mb-12 text-center font-bold">
                            {language === 'EN' ? "Technology Areas" : "Lĩnh Vực Công Nghệ Nổi Bật"}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                            <div className="space-y-2 flex flex-col justify-start">
                                <div className="text-white flex flex-col min-h-[50px]">
                                    <h3 className="text-2xl font-bold mb-3 text-white ">
                                        {language === 'EN' ? "Machine Learning Models Work Flow" : "Quy Trình Làm Việc Của Mô Hình Học Máy"}
                                    </h3>
                                    <p className="text-lg h-[70px]">{language === 'EN' ? "Train, implement, and manage Predictive Models" : "Đào Tạo, Triển Khai và Quản Lý Mô Hình Dự Đoán"}</p>
                                </div>

                                <div className="text-white flex flex-col min-h-[50px]">
                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                        {language === 'EN' ? "Computer vision" : "Thị giác máy tính"}
                                    </h3>
                                    <p className="text-lg mb-2">{language === 'EN' ? "Autonomous vehicles | Medical Imaging | Security surveillance" : "Phương Tiện Tự Lái | Chẩn Đoán Hình Ảnh Y Tế | Giám Sát An Ninh"}</p>
                                    <p className="text-lg h-[70px]">{language === 'EN' ? "Application in Retail & Manufacturing" : "Ứng Dụng Trong Bán Lẻ & Sản Xuất"}</p>
                                </div>
                            </div>

                            <div className="space-y-2 flex flex-col justify-start">
                                <div className="text-white flex flex-col min-h-[50px]">
                                    <h3 className="text-2xl font-bold mb-3 text-white ">
                                        {language === 'EN' ? "Natural Language Processing (NLP)" : "Xử lý ngôn ngữ tự nhiên (NLP)"}
                                    </h3>
                                    <p className="text-lg h-[70px]">{language === 'EN' ? "Create text | Machine Translation | Answer questions | Create source code" : "Tạo văn bản | Dịch máy | Trả lời câu hỏi | Tạo mã nguồn"}</p>
                                </div>

                                <div className="text-white flex flex-col min-h-[50px]">
                                    <h3 className="text-2xl font-bold mb-3 text-white ">
                                        {language === 'EN' ? "Increase your Profits" : "Tăng lợi nhuận của bạn"}
                                    </h3>
                                    <p className="text-lg h-[70px]">{language === 'EN' ? "Forget about partnering with expensive developers to launch your NFT collection" : "Ra mắt bộ sưu tập NFT dễ dàng và tiết kiệm"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 px-4 sm:px-6 lg:px-8 h-[700px] mb-1">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-customer-reversed  mb-12 py-2 text-left w-full">
                            {language === 'EN' ? "Explore our products" : "Sản phẩm khác"}
                        </h2>


                        <div className="flex justify-between gap-8">
                            <div className="w-2/3 flex flex-col items-center relative">
                                <img
                                    src={require('../assets/images/service/coreBanking.jpg')}
                                    alt={language === 'EN' ? "Banking Solutions" : "Giải Pháp Ngân Hàng"}
                                    className="w-full h-[400px] object-cover rounded-xl shadow-xl transition-all duration-300"
                                />
                                <div className=" rounded-xl px-6 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <h2 className="text-white text-lg md:text-3xl">{language === 'EN' ? "Banking Solutions" : "Giải Pháp Ngân Hàng"}</h2>
                                    <p className="text-white text-lg mt-2">{language === 'EN' ? "We provide advanced software solutions that help businesses and government agencies optimize processes and improve work efficiency" : "Chúng tôi cung cấp các giải pháp phần mềm tiên tiến, giúp doanh nghiệp và các cơ quan nhà nước tối ưu hóa quy trình và nâng cao hiệu quả công việc"}</p>
                                </div>
                            </div>
                            <div className="w-1/3 flex flex-col items-center relative">
                                <img
                                    src={require('../assets/images/service/T24.jpg')}
                                    alt={language === 'EN' ? "Software Solutions" : "Giải Pháp Phần Mềm"}
                                    className="w-full h-[400px] object-cover rounded-xl shadow-xl transition-all duration-300"
                                />
                                <div className="rounded-xl absolute px-6 inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <h2 className="text-white text-lg md:text-3xl">{language === 'EN' ? "Software Solutions" : "Giải Pháp Phần Mềm"}</h2>
                                    <p className="text-white text-lg mt-2">{language === 'EN' ? "SST provides software and security solutions for many units in the banking industry" : "SST cung cấp các giải pháp phần mềm và bảo mật cho nhiều đơn vị trong ngành ngân hàng"}</p>
                                    <p className="text-white text-lg mt-2">{language === 'EN' ? "Clients: VCB, TCB, VP Bank, SeaBank, OCB" : "Khách hàng: VCB, TCB, VP Bank, SeaBank, OCB"}</p>
                                </div>
                            </div>
                            
                        </div>


                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AIPage;
