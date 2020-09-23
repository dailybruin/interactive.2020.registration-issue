import React from 'react';
import '../App.css';
import BannerAd from "./BannerAd"

function Landing() {
    return (
    <div>
        <div
        className="InfoBox"
        >
            registration issue
        </div>
        <div
        className="TwentyTwenty"
        >
            2020
        </div>
        <div
        className="ByDB"
        >
            by the Daily Bruin
        </div>
        <div
          className="Title"
        >
          Uncharted Waters
        </div>
        <div
        className="Illo-Credit">
            ILLUSTRATIONS BY EMILY DEMBINSKI
        </div>
        <a href="https://dailybruin.com">
            <img src={require("./images/db.png")} className="DB-Logo"></img>
        </a>
        
    </div>
    )
}

export default Landing
