import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CountComponent from './components/countComponent';
import FormComponent from './components/formComponent';
// import MyApp from ..;


function App() {

  // useEffect(() => {
  //     alert("Test");
  // });

  return (
    <div className="App">
      <FormComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <CountComponent />
    </div>
  );
}

export default App;