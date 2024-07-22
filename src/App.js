import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>  
    </Router>
    
  );
}

export default App;
