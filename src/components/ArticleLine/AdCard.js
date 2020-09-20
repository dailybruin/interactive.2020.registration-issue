import React , {useEffect, useState} from "react";
import "./style.css";

/**
* props = {
	width: 1,2,3
}
*/
function AdCard(props) {
  // return (
  //   <div className={`article-card-${props.width}`}>
  //     <a className="article-ad-card-image" href='http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=acae03fd&cb=${rand}' target='_blank'><img src='http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=69&cb=${rand}&n=acae03fd' border='0' alt='' /></a>
  //     {props.sponsor ? (
  //       <div className="article-card-author article-ad-card-sponsor">
  //         {" "}
  //         {"SPONSORED: " + props.sponsor}{" "}
  //       </div>
  //     ) : null}

  //     <p className="article-card-description article-ad-card-description">
  //       {" "}
  //       {props.description}{" "}
  //     </p>
  //   </div>
  // );
    let [rand, setRand] = useState(null);
  

    useEffect( ()=> {
      setRand(Math.floor(Math.random()*99999999999))
    },[])

  if(rand === null)
    return null

    let ad = null

    switch(parseInt(props.num)){
      case 2:
        ad = <a className={`article-ad-card-image-${props.width}`} href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a80fdaba&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=68&cb=${rand}&n=a80fdaba`} border='0' alt='' /></a>
        
        break;
      case 3:
        ad = <a className={`article-ad-card-image-${props.width}`} href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=acae03fd&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=69&cb=${rand}&n=acae03fd`} border='0' alt='' /></a>
        break;
      case 5:
        ad = <a className={`article-ad-card-image-${props.width}`} href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a4ddbe54&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=71&cb=${rand}&n=a4ddbe54`} border='0' alt='' /></a>
        break;
      case 6:
        ad = <a className={`article-ad-card-image-${props.width}`} href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=abf44e2f&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=72&cb=${rand}&n=abf44e2f`} border='0' alt='' /></a>
        break;
      case 8: 
        ad = <a className={`article-ad-card-image-${props.width}`} href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=acf0edb7&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=74&cb=${rand}&n=acf0edb7`} border='0' alt='' /></a>
        break;
      case 9:
        ad = <a className={`article-ad-card-image-${props.width}`} href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a48cb4e8&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=75&cb=${rand}&n=a48cb4e8`} border='0' alt='' /></a>
        break;
      case 11:
        ad = <a className={`article-ad-card-image-${props.width}`} href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a232ea3c&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=77&cb=${rand}&n=a232ea3c`} border='0' alt='' /></a>
        break;
      case 12:
        ad = <a className={`article-ad-card-image-${props.width}`} href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a76d1287&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=78&cb=${rand}&n=a76d1287`} border='0' alt='' /></a>
        break;


    }



    return (
    <div className={`article-card-${props.width}`}>
     <div class={`wrapper-${props.width}`}>
      <div class="three-eighty-by-three-twenty-ratio"></div>
      <div class="content">
        {ad}
      </div>
    </div>
    {props.sponsor ? (
        <div className="article-card-author article-ad-card-sponsor">
          {" "}
          {"SPONSORED: " + props.sponsor}{" "}
        </div>
      ) : null}

      <p className="article-card-description article-ad-card-description">
        {" "}
        {props.description}{" "}
      </p>  
  </div>
  )
}

export default AdCard;
