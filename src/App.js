import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/home';
import AIPage from './pages/AISolution';
import BlockchainServices from "./pages/BlockchainServices";
import GameService from "./pages/GameService";


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {

    if (!location.hash) {
      window.scrollTo(0, 0);  
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services/ai-solution' element={<AIPage />} />
          <Route path='/services/blockchain-solution' element={<BlockchainServices />} />
          <Route path='/services/game-service' element={<GameService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
