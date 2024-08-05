import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact-form" element={<Contact/>}></Route>
        </Routes>
      </div>  
    </Router>
    
  );
}

export default App;
