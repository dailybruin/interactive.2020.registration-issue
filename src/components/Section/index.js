import "./style.css";
import ArticleLine from "../ArticleLine"
import React from 'react';
import BannerAd from "../BannerAd"

export default function Section(props){
  return (
	  <>
	<BannerAd  section={props.section}/>
	<div className="section">
		<h1 className="title"> {props.section} </h1>
		<ArticleLine objects={props.objects}/>
	</div>
	</>)
}