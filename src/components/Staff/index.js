import React from "react";

export default function Staff(props) {
    const mql = window.matchMedia(`(min-width: 800px)`);
    return (
    <div id={"STAFF_Section"}
  	    style={{ 
            color: "white", 
            "background-color": "#E5C9B2", 
            "text-align": "center", 
            "font-family": "Source Sans Pro",
            "font-style": "italic",
            // "font-size": "20px",
            // "padding": "100px",
            "font-size": mql.matches ? "20px" : '3.5vw', 
            "padding": mql.matches ? " 100px 200px" : "0 40px",
            // "margin-left": mql.matches ? 'min(13vw, 155px)' : '23vw', "margin-right": "30px"
        }}
    >      
        <h1 style= {{
            "font-family": "Source Sans Pro",
            "font-weight": "700px",
            "font-style": "normal",
        }}>Daily Bruin Editorial Staff</h1>
        <b style={{ "font-style": "normal"}}>Management</b>
        <br></br>
        Melissa Morris | Editor in chief
        <br></br>
        Lucy Carroll | Managing editor
        <br></br>
        Liz Ketcham | Digital managing editor
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>News</b>
        <br></br>
        Bernard Mendez | Editor
        <br></br>
        Saumya Gupta, Shruti Iyer, Kari Lau, Genesis Qu, Elizabeth Sherwood | Assistant editors
        <br></br>
        Martín Bilbao, David Gray, Stephen Liu, Emi Nakahara, Kate Nucci, Maddie Ostergaard, Sameera Pant, Teddy Rosenbluth, Julia Shapero, Megana Sekar, Hedy Wang, Sharon (Yu Chun) Zhen | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Opinion</b>
        <br></br>
        EJ Panaligan | Editor
        <br></br>
        Jake Brophy, Sabrina Huang | Assistant editors
        <br></br>
        Deepto Mizan, Andrew Raychawdhuri | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Arts</b>
        <br></br>
        Paige Hua | Editor
        <br></br>
        Vivian Xu, Alyson Kong, Yasmin Madjidi | Assistant editors
        <br></br>
        Eli Countryman, Raunak Devjani, Hannah Ferguson, Cameron Vernali, Linda Xu | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Sports</b>
        <br></br>
        Jack Perez | Editor
        <br></br>
        Kyle Boal, Jon Christon, Taiyo Keilin, Michael Waldman | Assistant editors
        <br></br>
        Sam Connon, Dylan D’Souza, Jacqueline Dzwonczyk, Angie Forburger, Joy Hong, Gabriel McCarthy, Coral Smith, Ryan Smith, Jared Tay | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Design</b>
        <br></br>
        Callista Wu | Director
        <br></br>
        Indya Donovan, Binxuan Zhang, Lauren Ho | Assistant directors
        <br></br>
        Angela Zhou | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Illustrations and Cartoons</b>
        <br></br>
        Andrea Grigsby, Emily Dembinski | Directors
        <br></br>
        Nicole Anisgard Parra, Kyle Icban, Juliette Le Saint, Cody Wilson | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Graphics</b>
        <br></br>
        Ben Brill | Editor
        <br></br>
        Farrah Au-Yeung | Assistant editor
        <br></br>
        Claire Guo, Ye Jin Kwon, Aileen Nguyen, Zoë Vikstrom, Mavis Zeng | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Photo</b>
        <br></br>
        Kanishka Mehra | Editor
        <br></br>
        Daanish Bhatti, Ashley Kenney, Lauren Man | Assistant editors
        <br></br>
        Amy Dixon, Jintak Han, Kristie-Valerie Hoang, Mia Kayser, Daniel Leibowitz, Axel Lopez, Tanmay Shankar, Niveda Tennety | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Copy</b>
        <br></br>
        Zoe Willoughby | Chief
        <br></br>
        Sara Hubbard | Assistant chief
        <br></br>
        Hailey Glenn, Maddie McDonagh, Anita Narkhede, Taylor Nossaman, Kaiya Pomeroy-Tso, Maggie Tully | Slot editors
        <br></br>
        Anush Arvind, Amy Baumgartner, Kaylee De Anda, Suzanna Gevorgyan, Elton Ho, Phillip Krings, Saskia Lane, Amarissa Mases, Omar Said, Rayna Salam, Skylar Sjöberg, Catie Soo, Maris Tasaka, Grace Ye | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Online</b>
        <br></br>
        Mattie Sanseverino | Editor
        <br></br>
        Andrew Kan, Sarthak More, Neil Prajapati, Denise Wang | Assistant editors
        <br></br>
        Thomas Gerard, Max Wu | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>BruinWalk</b>
        <br></br>
        Yu-Ying Chua | Editor
        <br></br>
        Rohit Tavare | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Video</b>
        <br></br>
        Amy Zhang | Producer
        <br></br>
        Tung Lin, Sophie Kehl | Assistant Video producers
        <br></br>
        Kristin Snyder | Podcast producer
        <br></br>
        MacKenzie Coffman, Sophia King, Samuel In, Natalie Tsang | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>The Quad</b>
        <br></br>
        Amanda Houtz | Editor
        <br></br>
        Cecile Wu | Assistant editor
        <br></br>
        Olivia Fitzmorris, Andrew Warner, Molly Wright | Staff 
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Outreach</b>
        <br></br>
        Marilyn Chavez- Martinez | Director
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Social media</b>
        <br></br>
        Lena Nguyen | Director
        <br></br>
        Shirley Yao | Assistant Director
        <br></br>
        Christine David | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>PRIME</b>
        <br></br>
        Anushka Jain | Director
        <br></br>
        Justin Huwe | Content editor
        <br></br>
        Samantha Joseph | Art director
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Enterprise</b>
        <br></br>
        Maanas Hemanth Oruganti | Editor
        <br></br>
        Justin Jung | Assistant editor
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Advertising</b>
        <br></br>
        Jeremy Wildman | Business Manager<br></br>
        Cat Larue | Assistant Business Manager<br></br>
        Chandler Coon | Online and Outdoor Traffic Manager<br></br>
        Aerielle Brackett, Caroline Halloran | Print Traffic Manager<br></br>
        Cooper Engelman, Kat Sotoodeh | Social Media Manager<br></br>
        Paulina Bremer, Tyler Beckman, Austin Longerbeam, Payton Rockwood, Kate Ennis, Electa Narasin, Taylor Eide, Sander Savage, Anna Melnyk, Jacqueline McConnell, Sylvanna Nilsen | Advertising Account Executives
        <br></br>
        Classified Account Executive | Skye Mitchell, Adriana Conte
        Aileen Nguyen, Caroline Halloran | Ad Creative
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>MIS</b>
        <br></br>
        Jose Hernandez | Chief technology officer<br></br>
        Daniel Huang, Andrew Lee, Michael Li, Richard Sun | Staff
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Advisers</b>
        <br></br>
        Abigail Goldman | Editorial advisor<br></br>
        Doria Deen | Student media director
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Designed by</b>:
        <br></br>
        Indya Donovan, Lauren Ho, Callista Wu, Benny Zhang
        <br></br>
        <br></br>
        <b style={{ "font-style": "normal"}}>Developed by:</b>
        <br></br>
        Mattie Sanseverino, Neil Prajapati, Sarthak More, Andrew Kan, and Denise Wang
	</div>
);
  
}