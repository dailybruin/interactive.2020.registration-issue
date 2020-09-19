import React from 'react';
import './App.css';
import Landing from "./components/Landing.js"
import ArticleLine from "./components/ArticleLine"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />

      </header>
      <p>
        hello here's some stuff under the landing
      </p>
      <ArticleLine objects={[
          {
            "type": "article", 
            "img": "https://wp.dailybruin.com/images/2020/09/fires.KM_1.jpg",
            "author": "Elizabeth Sherwood",
            "title": "Air quality in Westwood is unhealthy",
            "link": "https://dailybruin.com/2020/09/12/air-quality-in-westwood-deemed-unhealthy-as-a-result-of-nearby-fires"
          },
          {
            "type": "article", 
            "img": "https://wp.dailybruin.com/images/2020/09/fires.KM_1.jpg",
            "author": "Elizabeth Sherwood",
            "title": "Air quality in Westwood is unhealthy",
            "link": "https://dailybruin.com/2020/09/12/air-quality-in-westwood-deemed-unhealthy-as-a-result-of-nearby-fires"
          },
          {
            "type": "article", 
            "img": "https://wp.dailybruin.com/images/2020/09/fires.KM_1.jpg",
            "author": "Elizabeth Sherwood",
            "description": "Air quality in Westwood is unhealthy because of wildfires east of Los Angeles.",
            "link": "https://dailybruin.com/2020/09/12/air-quality-in-westwood-deemed-unhealthy-as-a-result-of-nearby-fires"
          },
          {
            "type": "article", 
            "img": "https://wp.dailybruin.com/images/2020/09/fires.KM_1.jpg",
            "author": "Elizabeth Sherwood",
            "description": "Air quality in Westwood is unhealthy because of wildfires east of Los Angeles.",
            "link": "https://dailybruin.com/2020/09/12/air-quality-in-westwood-deemed-unhealthy-as-a-result-of-nearby-fires"
          },
          {
            "type": "article", 
            "img": "https://wp.dailybruin.com/images/2020/09/fires.KM_1.jpg",
            "author": "Elizabeth Sherwood",
            "title": "Air quality in Westwood is unhealthy because of wildfires east of Los Angeles.",
            "link": "https://dailybruin.com/2020/09/12/air-quality-in-westwood-deemed-unhealthy-as-a-result-of-nearby-fires"
          },
          {
            "type": "article", 
            "img": "https://wp.dailybruin.com/images/2020/09/fires.KM_1.jpg",
            "author": "Elizabeth Sherwood",
            "description": "Air quality in Westwood is unhealthy because of wildfires east of Los Angeles.",
            "link": "https://dailybruin.com/2020/09/12/air-quality-in-westwood-deemed-unhealthy-as-a-result-of-nearby-fires"
          },
          {
            "type": "article", 
            "img": "https://wp.dailybruin.com/images/2020/09/fires.KM_1.jpg",
            "author": "Elizabeth Sherwood",
            "description": "Air quality in Westwood is unhealthy because of wildfires east of Los Angeles.",
            "link": "https://dailybruin.com/2020/09/12/air-quality-in-westwood-deemed-unhealthy-as-a-result-of-nearby-fires"
          },

        ]}/>
    </div>
  );
}

export default App;
