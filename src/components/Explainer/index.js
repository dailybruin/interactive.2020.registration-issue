import React from "react";

export default function Explainer(props) {
    // const mql = window.matchMedia(`(min-width: 800px)`);
    return (
        <div id={"Explainer_Section"}
            style={{ 
                color: "white", 
                "background-color": "#588BB8",
                "text-align": "center", 
                "font-family": "Source Sans Pro",
                "font-style": "italic",
                "font-weight": "600",
                "font-size": "30px",
                "padding": "100px 200px",
                // "margin-left": mql.matches ? 'min(13vw, 155px)' : '23vw', 
                // "margin-right": "30px"
            }}
        >
            <br></br>
            <br></br>
            Fall quarter will look a lot different this year. Rather than spending our first week exploring campus to find our classes, study spots or hangouts, we’ll be jumping between Zoom rooms. There is no campus map or familiar path for us to follow in the digital sphere. The daunting challenge of adjusting to online college life looms over us as we step into the 2020-2021 academic year. This year’s Registration Issue is not a map or a guide, but a first step toward understanding the challenges ahead.
            <br></br>
            <br></br>
            Welcome to Registration Issue 2020: Uncharted Waters.
            <br></br>
            <br></br>
    </div>
    );
}