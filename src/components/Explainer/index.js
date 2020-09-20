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
                "font-size": "30px",
                "padding": "100px",
                // "margin-left": mql.matches ? 'min(13vw, 155px)' : '23vw', 
                // "margin-right": "30px"
            }}
        >
            <h1 style={{margin: 0,}}>Explainer</h1>
            <b>This is the explainer.</b>
            <br></br>
            <br></br>
            Fall quarter will look a lot different this year.
            <br></br>
            [More explanation describing the theme.]
            <br></br>
            <br></br>
            But we'll be navigating these uncharted waters together.
    </div>
    );
}