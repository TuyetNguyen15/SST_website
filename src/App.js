import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AIPage from './pages/AISolution';
import BlockchainServices from "./pages/BlockchainServices";
import GameService from "./pages/GameService"
 function App() {
  return (
    <Router>
      <div className="app">
       
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services/ai-solution' element={<AIPage/>}></Route>
          <Route path='/services/blockchain-solution' element={<BlockchainServices/>}></Route>
          <Route path='/services/game-service' element={<GameService/>}></Route>
       
        </Routes>
      </div>
    </Router>
  );
}
export default App;






