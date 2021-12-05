import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/pages/Homepage/Home';
import Footer from '../components/pages/Footer/Footer';
import About from '../components/pages/About/About';
import Bitcoin from '../components/pages/Bitcoin/Bitcoin';
import Ethereum from '../components/pages/Ethereum/Ethereum';
import Meditation from '../components/pages/Meditation/Meditation';
import Youtube from '../components/pages/Youtube/Youtube';


function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/bitcoin' element={<Bitcoin />}/>
            <Route path='/ethereum' element={<Ethereum />}/>
            <Route path='/meditation' element={<Meditation />}/>
            <Route path='/youtube' element={<Youtube />}/>
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