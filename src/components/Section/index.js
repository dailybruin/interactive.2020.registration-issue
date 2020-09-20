import "./style.css";
import ArticleLine from "../ArticleLine"
import React from 'react';


export default function Section(props){

return (
	<div className="section">
	<h1 className="title"> News </h1>
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

       </div>)
}