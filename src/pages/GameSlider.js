
import React from "react";

export default function GameContainer() {
  return (
    <div className="game-container">
      <div className="game-grid">
        {/* Game Image */}
        <div className="game-image">
          <img
            src="https://opposite-cormorant-6b6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8e5c5d63-b70f-4572-ac6b-5db6079780b0%2F8e5670dc-2829-4fe5-a5f6-1bda1930f4e3%2FUntitled.png?table=block&id=e646dbd0-3c4f-455f-9195-ba66b526e626&spaceId=8e5c5d63-b70f-4572-ac6b-5db6079780b0&width=1420&userId=&cache=v2"
            alt="Match Market Sort: Triple 3D"
            className="game-screenshot"
          />
        </div>

        {/* Game Content */}
        <div className="game-content">
          <h1 className="game-title">Stickman Combat Legend</h1>

          <p className="game-description">
            <strong>Stickman Combat Legend</strong> là trò chơi chiến đấu người que đơn giản nhất!!!
            Trò chơi chiến đấu này sẽ cho phép bạn trở thành một trong những anh hùng của đội Siêu anh hùng, chiến đấu với những kẻ phản diện và bảo vệ toàn bộ hành tinh. Bước vào đấu trường và chiến đấu vì mạng sống của bạn. Nếu bạn thích chơi game thì đây là trò chơi dành cho bạn vì khả năng xử lý nhanh và các tính năng tuyệt vời.
          </p>

          <ul className="feature-list">
            <li>Chế độ chơi đơn</li>
            <li>Chế độ đối đầu</li>
            <li>Chế độ giải đấu</li>
            <li>Nhiều loại vũ khí để lựa chọn</li>
          </ul>

          <div className="download-section">
            <a
              href="https://play.google.com/store/apps/details?id=com.fc.stickman.heroes.fight.stick.warrirors"
              target="_blank"
              rel="noopener noreferrer"
              className="download-link"
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/024/170/871/small/badge-google-play-and-app-store-button-download-free-png.png"
                alt="Get it on Google Play"
                className="google-play-badge"
              />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .game-container {
          // max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          min-height: 100vh;
        }
        
        .game-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          border-radius: 24px;
          padding: 60px;
          
        }
        
        .game-image {
          position: relative;
        }
        
        .game-screenshot {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        
        .game-content {
          padding-left: 20px;
        }
        
        .game-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #2d3748;
          margin: 0 0 24px 0;
          line-height: 1.2;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .game-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 32px;
        }
        
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
        }
        
        .feature-list li {
          font-size: 1.1rem;
          color: #2d3748;
          margin-bottom: 12px;
          padding-left: 28px;
          position: relative;
          line-height: 1.5;
        }
        
        .feature-list li::before {
          content: '✨';
          position: absolute;
          left: 0;
          top: 0;
          font-size: 1.2rem;
        }
        
        .download-section {
          margin-top: 40px;
        }
        
        .download-link {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        
        .download-section .google-play-badge {
          height: 60px;
          width: auto;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
        }
        
        @media (max-width: 768px) {
          .game-container {
            padding: 20px 10px;
          }
          
          .game-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 30px;
          }
          
          .game-content {
            padding-left: 0;
            text-align: center;
          }
          
          .game-title {
            font-size: 2.2rem;
          }
          
          .game-description {
            font-size: 1rem;
          }
          
          .feature-list li {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
