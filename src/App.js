import React from 'react';
import './App.css';
import Landing from "./components/Landing.js"
import Section from "./components/Section"
import ScrollyContainer from "./components/ScrollyContainer.js";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (  
    <div className="App">
      <header className="App-header">
        <Landing />

      </header>
      <Navbar/>
      <p>
          hello here's some stuff under the landing
      </p>
      <ScrollyContainer>
      </ScrollyContainer>
      <p>
          here's some stuff under the landing
      </p>
      <p>
        here's some more garbage text to confirm line goes under everything
      </p>
      <Section/>
    </div>
  );
}

export default App;
