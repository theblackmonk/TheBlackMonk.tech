import React, { Component } from 'react'
import './App.css'
import Navbar from './NavBar'
import Content from './Content'



class App extends Component {
  componentWillMount() {
    console.log('app.js did mount')
  }
  
  render() {
  return (
    <div>

      <Navbar />
      <Content />
      
    </div>
  );
  }
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
