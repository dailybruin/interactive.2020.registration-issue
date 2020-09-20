import React from 'react';
import './App.css';
import About from "./components/About/index.js"
import Explainer from "./components/Explainer/index.js"
import Landing from "./components/Landing.js"
import Section from "./components/Section"
import ScrollyContainer from "./components/ScrollyContainer.js"
import Staff from "./components/Staff/index.js"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />

      </header>
      <Explainer></Explainer>
      <ScrollyContainer>
      </ScrollyContainer>
      <p>
          here's some stuff under the landing
      </p>
      <p>
        here's some more garbage text to confirm line goes under everything
      </p>
      <Section/>
      <About></About>
      <Staff></Staff>
    </div>
  );
}

export default App;
