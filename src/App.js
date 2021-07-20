import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
 const [showImg, setShowImg] = useState (false);



  const toggel = () => {
    setShowImg(!showImg);
  }

   return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={() => toggel ()}>
            {showImg ? 'Esconder' : 'Mostrar'}
            </button>
          
          {showImg && (
            <img src={logo} className="App-logo" alt="logo" />
          )}
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
    );
   }

export default App;
