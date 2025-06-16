import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';

 function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
       
        </Routes>
      </div>
    </Router>
  );
}
export default App;