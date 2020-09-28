import React, {useState, useEffect} from 'react';
import './App.css';
import About from "./components/About/index.js"
import Explainer from "./components/Explainer/index.js"
import Landing from "./components/Landing.js"
import Section from "./components/Section"
import ScrollyContainer from "./components/ScrollyContainer/ScrollyContainer.js"
import Staff from "./components/Staff/index.js"
import Navbar from './components/Navbar/Navbar';
import StaticImage from './components/StaticImage/StaticImage';
import BannerAd from "./components/BannerAd"
import styled from 'styled-components';
import axios from 'axios'
import ReactGA from 'react-ga';

const Anchor = styled('div')`
`


const section_names = [
  "NEWS",
  "SPORTS",
  "ARTS",
  "OPINION",
  "THE_QUAD",
  "MULTIMEDIA",
  "PRIME",
];

function initializeReactGA() {
  ReactGA.initialize('UA-28181852-30');
  ReactGA.pageview('/homepage');
}

function App (){

  initializeReactGA()

  let [data, setData] = useState({})

  useEffect(() => {
    axios.get('https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2020.registration-issue/').then(function (response) {
      
      setData(response["data"]["data"]["article.aml"]);
     

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }, [])

  //      
  return (  
    <div className="App">
      
      <header className="App-header">
        <Landing />        
      </header>
      <BannerAd  section={"HEADER"}/>
      
      <Navbar/>
      
      <Anchor id='introduction'/>
      
      <Explainer/>
      <div style={{position: "relative"}}>
        <div style={{position: "absolute", height: "100%", width: "100%", backgroundColor: "#80ADD6", zIndex: -99}}></div>
        <ScrollyContainer/>
        <Anchor id='stories'/>
        {section_names.map(x => data[x] ? // if x is one of the sections...
        <div style={{marginBottom: "200px", width: "100%", position: "relative"}}>
          <StaticImage imageUrl={"water_right"} section={x.replace("_", " ")}/>
          <Section key={x} section={x.replace("_", " ")} objects={data[x]}/>
          <StaticImage imageUrl={"land_one"}/>
        </div>
        : null)}
      </div>
      <Anchor id='about'/>
      <About></About>

      <Staff></Staff>
    </div>
  );
  
}

export default App;
