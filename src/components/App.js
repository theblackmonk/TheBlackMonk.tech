import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './pages/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/pages/Homepage/Home';
import Footer from '../components/pages/Footer/Footer';
import About from '../components/pages/About/About';
import Bitcoin from '../components/pages/Bitcoin/Bitcoin';
import Ethereum from '../components/pages/Ethereum/Ethereum';
import Meditation from '../components/pages/Meditation/Meditation';
import Youtube from '../components/pages/Youtube/Youtube';
import Projects from './pages/Projects';
import Wallet from '../components/pages/Wallet/Wallet';
import MT6 from '../components/pages/MT6/MT6';
import ScrollToTop from './ScrollToTop';


const PageNotFound = () =>{
  return(
    <div>
      <br></br>
    <h1 className='four'>404! Page Not Found</h1>
    </div>
  );
}

//<a href="https://www.google.com" rel='noreferrer'>Go to Home</a>
function App() {
  
  
//<ScrollToTop />
  return (
      <div>
        <Router>
        <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/bitcoin' element={<Bitcoin />}/>
            <Route path='/ethereum' element={<Ethereum />}/>
            <Route path='/meditation' element={<Meditation />}/>
            <Route path='/youtube' element={<Youtube />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/wallet' element={<Wallet />}/>
            <Route path='/MT6' element={<MT6 />}/>
            
          </Routes>
          <Footer />
        </Router>
        
      </div>
  );
}

export default App;

//<Route path='/*' element={<PageNotFound />} />
/*
<div className="App">
  <header className="App-header">
    <h1>TheBlackMonk.tech</h1>
    <h2>Coming Soon</h2>
            
  </header>
</div>
*/