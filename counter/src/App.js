import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountComponent from './components/countComponent';


function App() {
  return (
    <div className="App">
      <CountComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;