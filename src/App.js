import React, {useState, useEffect} from 'react';
import './App.css';
import About from "./components/About/index.js"
import Explainer from "./components/Explainer/index.js"
import Landing from "./components/Landing.js"
import Section from "./components/Section"
import ScrollyContainer from "./components/ScrollyContainer.js"
import Staff from "./components/Staff/index.js"
import Navbar from './components/Navbar/Navbar';
import StaticImage from './components/StaticImage/StaticImage';
import BannerAd from "./components/BannerAd"
import styled from 'styled-components';
import axios from 'axios'

const waterRightImage = "https://assets.dailybruin.com/images/interactive.2020.registration-issue/water1-5fc6e68848e912abd9542f6fb0415c42.png";
const waterLeftImage = "https://assets.dailybruin.com/images/interactive.2020.registration-issue/water2-7bb062af88db7035de67484c317cd462.png";

const Anchor = styled('div')`
`


const section_names = [
  "NEWS",
  "SPORTS",
  "ARTS",
  "OPINION",
  "MULTIMEDIA",
  "PRIME",
  "THE_QUAD"
];

function App (){

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

 console.log(data)
  return (  
    <div className="App">
      <header className="App-header">
        <Landing />
        
      </header>
      <BannerAd  section={"HEADER"}/>
      <ScrollyContainer>
      </ScrollyContainer>
      <Navbar/>
      <Anchor id='introduction'/>
      <Explainer/>
      <StaticImage imageUrl={waterRightImage} align="left"/>
     
      <ScrollyContainer/>
      

      {section_names.map(x => data[x]? <Section key={x} section={x.replace("_", " ")} objects={data[x]}/>: null)}

      
      <About></About>

      <Staff></Staff>
    </div>
  );
  
}

export default App;
