import React from "react";
import "./style.css";
/**
* props = {
	width: 1,2,3
}
*/
function ArticleCard(props) {
  // return (
  //   <div className={`article-card-${width}`}>
  //     <a href={props.link} >
  //     	<img className="article-card-img" src={props.img} alt="Article" />
  //     </a>
  //     <div className="article-card-author"> {props.author} </div>
  //     <p className="article-card-description"> {props.description} </p>
  //   </div>
  // );

  let x = {}
  let y = {}
  let width = 1;

  return (
    <div className={`article-card-${width}`}>
     <div class={`wrapper-${width}`}>
      <div class="sixteen-by-nine-aspect-ratio"></div>
      <div class="content">
        <a href={props.link} >
        <img className={`article-card-img-${width}`} src={props.img} alt="Article" />
       </a>
      </div>
    </div>
    <div className="article-text">
    <div className="article-card-author"> by {props.author} </div>
     <p className="article-card-title"> {props.title} </p>  
    </div>
  </div>
  )
}

export default ArticleCard;
