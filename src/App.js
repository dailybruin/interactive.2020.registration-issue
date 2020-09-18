import React from 'react';
import './App.css';
import Landing from "./components/Landing.js"
import ScrollyContainer from "./components/ScrollyContainer.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
      <p>
          hello here's some stuff under the landing
      </p>
      <ScrollyContainer>
      </ScrollyContainer>
      <p>
          here's some stuff under the landing
      </p>
    </div>
  );
}

export default App;
