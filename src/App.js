import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AIPage from './pages/AISolution';

 function App() {
  return (
    <Router>
      <div className="app">
       
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services/ai-solution' element={<AIPage/>}></Route>
       
        </Routes>
      </div>
    </Router>
  );
}
export default App;