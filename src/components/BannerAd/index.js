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
			return <a className="banner-ad" href={`http://ucu.org`} target='_blank'>
				<img src={`https://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=81&amp;cb=${rand}&amp;n=abdc3f10`} border='0' alt='' /></a>;
		case "OPINION":
			return <a className="banner-ad" href={`http://cancer.ucla.edu/swimacrossamerica`} target='_blank'>
				<img src={`http://ads.studentmedia.ucla.edu/www/delivery/avw.php?zoneid=82&amp;cb=${rand}&amp;n=a322f0ab`} border='0' alt='' /></a>
		default:
			return null
	}
}