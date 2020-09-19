import React from "react";
import "./style.css"
/**
* props = {
	width: 1,2,3
}
*/
function FillerCard(props) {
	return (
		<div className={`article-card-${props.width}`}>
		</div>
	)
}

export default FillerCard;