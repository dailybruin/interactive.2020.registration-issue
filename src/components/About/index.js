import React from "react";

export default function About(props) {
    // const mql = window.matchMedia(`(min-width: 800px)`);
    return (
        <div id={"ABOUT_Section"}
            style={{ 
                color: "white", 
                "background-color": "#588BB8",
                "text-align": "center", 
                "font-family": "Source Sans Pro",
                "font-size": "30px",
                "padding": "100px",
                "font-style": "italic",
                "font-weight": "600",
                // "margin-left": mql.matches ? 'min(13vw, 155px)' : '23vw', 
                // "margin-right": "30px"
            }}
        >
            We’ll be navigating these uncharted waters together.
            <br></br>
            <br></br>
            <h1 style={{
                "font-family": "Clearface Black SSi",
                "font-style": "normal",
            }}>about</h1>
            Like what you see?
            <br></br>
            <br></br>
            Apply for a Daily Bruin internship now at
            <br></br>
            <a href="apply.uclastudentmedia.com">apply.uclastudentmedia.com</a>
            <br></br>

        </div>
    );
}