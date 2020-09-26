import React from "react";

export default function Explainer(props) {
    const mql = window.matchMedia(`(min-width: 800px)`);
    return (
        <div id={"Explainer_Section"}
            style={{ 
                color: "white", 
                "background-color": "#80ADD6",
                "text-align": "center", 
                "font-family": "Source Sans Pro",
                "font-style": "italic",
                "font-weight": "600",
                // "font-size": "10vw",
                "font-size": mql.matches ? "30px" : '3.5vw', 
                "padding": mql.matches ? " 50px 100px" : "0 50px",
                // "padding": "100px 200px",
                // "margin-left": mql.matches ? 'min(13vw, 155px)' : '23vw', 
                // "margin-right": "30px"
                // "height" : "100vh"
            }}
        >
            <br></br>
            <br></br>
            <p>
            Fall quarter will look a lot different this year. Rather than spending our first week exploring campus to find our classes, study spots or hangouts, we’ll be jumping between Zoom rooms. There is no campus map or familiar path for us to follow in the digital sphere. The daunting challenge of adjusting to online college life looms over us as we step into the 2020-2021 academic year. This year’s Registration Issue is not a map or a guide, but a first step toward understanding the challenges ahead.
            </p>
            <br></br>
            <p>
            Welcome to Registration Issue 2020: Uncharted Waters.
            </p>
            <br></br>
            <br></br>
            <hr/>
    </div>
    );
}