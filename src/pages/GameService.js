import ezgif from "../assets/ezgif1.png";

export default function GameService() {
 

  return (
    <div className="container">
      <div className="stripes"></div>
      <div className="background" style={{ backgroundImage: `url(${ezgif})` }}></div>
      <div className="content">
        <h1 id="title" className="title">
          Cross Platform Games
        </h1>
        <p id="subtitle" className="subtitle">
          Accelerate Growth with Cross-Platform Game Development
        </p>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background-color: #1a1a2e;
          color: #fff;
        }
        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 0.2;
          z-index: 1;
        }
        .content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .title {
          font-size: 5em;
          font-weight: bold;
          background: linear-gradient(135deg,rgba(43, 120, 184, 1) 15%, rgba(230, 153, 92, 1) 51%, rgba(235, 187, 149, 1) 99%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0;
        }
        .subtitle {
          font-size: 1.5em;
          color: #fff;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
