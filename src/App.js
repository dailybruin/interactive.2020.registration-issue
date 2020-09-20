import React from 'react';
import './App.css';
import Landing from "./components/Landing.js"
import Section from "./components/Section"
import ScrollyContainer from "./components/ScrollyContainer.js";
import Navbar from './components/Navbar/Navbar';
import StaticImage from './components/StaticImage/StaticImage';

const waterRightImage = "https://assets.dailybruin.com/images/interactive.2020.registration-issue/water1-5fc6e68848e912abd9542f6fb0415c42.png";
const waterLeftImage = "https://assets.dailybruin.com/images/interactive.2020.registration-issue/water2-7bb062af88db7035de67484c317cd462.png";

function App() {
  return (  
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
      <Navbar/>
      <StaticImage imageUrl={waterRightImage} align="left"/>
      <p>
          hello here's some stuff under the landing
      </p>
      <ScrollyContainer/>
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
