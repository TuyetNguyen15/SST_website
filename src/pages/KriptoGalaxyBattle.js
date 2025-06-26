import React from 'react';
import character3 from '../assets/001.jpg';
import bg from '../assets/002.jpg';
import { useLanguage } from '../components/LanguageContext';

const KriptoGalaxyBattle = () => {
  const { language } = useLanguage();

  return (
    <div className="relative h-screen w-full overflow-hidden">
     
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${bg})` }}
      />

    
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-10 " />

      {/* Main content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-6xl">

       
          <div className="text-orange-500 flex flex-col justify-center gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Kripto Galaxy Battle
            </h1>
            <p className="text-lg md:text-xl text-yellow-100 text-justify">
              {language === 'EN'
                ? 'Kripto Galaxy Battle is an exciting idle "Play-to-Earn" NFT game built on KardiaChain. Explore a futuristic universe, collect rare gems, and complete quests to earn rewards. With low entry costs and engaging strategy gameplay, you can trade NFTs, stake tokens, and participate in a thriving marketplace. Enjoy this unique blend of gaming and DeFi!'
                : 'Kripto Galaxy Battle là một trò chơi NFT "Play-to-Earn" NFT thú vị được xây dựng trên nền tảng KardiaChain. Khám phá một vũ trụ giả tưởng, thu thập các viên đá quý hiếm và hoàn thành các nhiệm vụ để kiếm phần thưởng. Với chi phí gia nhập thấp và lối chơi chiến lược hấp dẫn, bạn có thể giao dịch NFT, stake token và tham gia vào một thị trường sôi động. Hãy tận hưởng sự kết hợp độc đáo giữa game và DeFi này!'}
            </p>

           
            <div className="flex ">
              <a
                href="https://kriptobattle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
              >
               
                {language === 'EN' ? 'Get it on Google Play' : 'Tải trên CH Play'}
              </a>
            </div>
          </div>

       
          <div className="flex justify-center items-center">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] w-full max-w-xl">
              <img
                src={character3}
                alt="Game Screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KriptoGalaxyBattle;
