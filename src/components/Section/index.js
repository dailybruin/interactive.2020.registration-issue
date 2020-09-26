import "./style.css";
import ArticleLine from "../ArticleLine"
import React from 'react';


export default function Section(props){
  return (
	<div className="section">
		<h1 className="title"> {props.section} </h1>
		<ArticleLine objects={props.objects}/>
	</div>)
}