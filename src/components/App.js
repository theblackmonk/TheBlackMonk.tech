import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' />
          </Routes>
        </Router>
        <div className="App">
          <header className="App-header">
            <h1>TheBlackMonk.tech</h1>
            <h2>Coming Soon</h2>
            
          </header>
        </div>
      </div>
  );
}

export default App;
