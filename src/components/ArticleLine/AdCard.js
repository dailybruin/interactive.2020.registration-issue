import React , {useEffect, useState} from "react";
import "./style.css";

/**
* props = {
	width: 1,2,3
}
*/
function AdCard(props) {

    let [rand, setRand] = useState(null);
  

    useEffect( ()=> {
      setRand(Math.floor(Math.random()*99999999999))
    },[])

  if(rand === null)
    return null

  console.log(props)

  let img; //= `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=69&cb=${rand}&n=acae03fd`
  let href;

  switch(props.id){
    case "news_1":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a54b3266&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=83&amp;cb=${rand}&amp;n=a54b3266`
      break
    case "news_2":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a9919e2e&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=84&amp;cb=${rand}&amp;n=a9919e2e`
      break
    case "multimedia_1":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a73cc8ed&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=85&amp;cb=${rand}&amp;n=a73cc8ed`
      break
    case "sports_1":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a6f5a82c&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=86&amp;cb=${rand}&amp;n=a6f5a82c`
      break
    case "sports_2":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a5d88353&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=87&amp;cb=${rand}&amp;n=a5d88353`
      break
    case "arts_1":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a18c8481&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=88&amp;cb=${rand}&amp;n=a18c8481`
      break
    case "opinion_1":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=ace87502&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=90&amp;cb=${rand}&amp;n=ace87502`
      break
    case "the_quad_1":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=aea28e33&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=89&amp;cb=${rand}&amp;n=aea28e33`
      break
    case "prime_1":
      href = `http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a2965b67&amp;cb=${rand}`
      img = `http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=91&amp;cb=${rand}&amp;n=a2965b67`
      break
  }




    return (
    <div 
      className={`article-card ad-card`}  
      style={{"backgroundImage": `url(${img})`}} 
      href={href}>
    </div>
  )
}

export default AdCard;
