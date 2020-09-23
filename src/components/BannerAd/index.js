import React, {useState,useEffect} from 'react'
import "./bannerAd.css"

export default function BannerAd(props) {

	let [rand, setRand] = useState(null);
	

	useEffect( ()=> {
		setRand(Math.floor(Math.random()*99999999999))
	},[])

	if(rand === null)
		return null

	switch(props.section){
		case "HEADER":
			return <a className="banner-ad" href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=ac54f0fd&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=67&cb=${rand}&n=ac54f0fd`} border='0' alt='' /></a>;
		case "SPORTS":
			return <a className="banner-ad" href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a8964dfd&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=70&cb=${rand}&n=a8964dfd`} border='0' alt='' /></a>
		case "ARTS":
			return <a className="banner-ad" href={`http://ads.studentmedia.ucla.edu/www/delivery/ck.php?n=a6986ad4&cb=${rand}`} target='_blank'><img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=73&cb=${rand}&n=a6986ad4`} border='0' alt='' /></a>
		default:
			return null
	}
}