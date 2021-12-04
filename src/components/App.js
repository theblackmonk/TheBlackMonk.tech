import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/pages/Homepage/Home';
import Footer from '../components/pages/Footer/Footer';
import Services from '../components/pages/Services/Services';
import Products from '../components/pages/Products/Products';
import SignUp from '../components/pages/SignUp/Signup';


function App() {
  return (
      <div>
        <Router>
        
          <Navbar />
          
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/sign-up' element={<SignUp />}/>
          </Routes>
        
          <Footer />
          
        </Router>
      </div>
  );
}

export default App;

/*
<div className="App">
  <header className="App-header">
    <h1>TheBlackMonk.tech</h1>
    <h2>Coming Soon</h2>
            
  </header>
</div>
*/