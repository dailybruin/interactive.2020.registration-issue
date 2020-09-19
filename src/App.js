import React from 'react';
import './App.css';
import Landing from "./components/Landing.js"
import Section from "./components/Section"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />

      </header>
      <p>
        hello here's some stuff under the landing
      </p>
      <Section/>
    </div>
  );
}

export default App;
