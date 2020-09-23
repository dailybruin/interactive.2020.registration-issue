import React, { useMemo } from "react";
import ArticleCard from "./ArticleCard";
import AdCard from "./AdCard";
import arrow from "./arrow.svg"

/**
* props: {
	objects = [
		{type: "article", width: 2, img: "", author: "", description: ""}, // this one is twice as wide
		{type: "article", width: 1, img: "", author: "", description: ""},
		{type: "ad", idk yet}
	]

}
*/
function ArticleGrid(props) {
  // useMem memoizes the result so it doesn't have to calculated again
  // appendFiller: add empty boxes to the end of a row if there isn't enough. If we didn't do this,
  //    the cards in the last row will be aligned weirdly. If mobile, no need since everything is in 1 column
  // sortObjectsIfMobile: in mobile, we can't have big cards. But big cards are more important.
  //    so if mobile, we put big cards in front of the little cards.
  // clean: lowercases all field names just in case in kerckhoff, google docs auto capitialized it
  //    we should honestly have something like this for all the data we get from kerckhoff but
  //    i haven't figured out a clean way to do that yet
  if(!props.objects) return null

  let processedObjects = clean(props.objects);
    
 

  return (
    <div className="article-line">
    <div className="article-container">
      {processedObjects.map((x,index) => {

        if (x.type === "article") {
          return (
            <ArticleCard
              key={index}
              img={x.img}
              author={x.author}
              title={x.title}
              link={x.link}
            />
          );
        } else if (x.type === "ad") {
          return (
            <AdCard
              key={index}
              num={x.num}
            />
          );
        }
        return <h1>Incorrect Type of Content</h1>;
      })}
    </div>
  {/*TODO: this isn't working right*/}
    <p className="article-read-more">Read more <img src={arrow} alt="Arrow icon"/></p>
    </div>
  );
}

function isMobile() {
  return window.innerWidth < 768;
}



function clean(objects) {
  // lowercase fields
  return objects.map(x => {
    let out = {}

    for (let key in x) {
        // so it doesn't copy prototype properties
        if (x.hasOwnProperty(key)) {
          out[key.toLowerCase()] = x[key]
        }
    }
    return out;
  })
}

export default ArticleGrid;
