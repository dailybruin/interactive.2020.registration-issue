import React from 'react';
import '../../App.css';
import styled from 'styled-components';

const Image = styled("img")`
    ${props => props.align == 'left' && `
        left: 0;
        bottom: -150px;
    `}
    ${props => props.align == 'right' && `
        right: 0;
        top: -150px;
    `}
    position: absolute;
    z-index: 1;
    width: 50%;
    @media (max-width: 768px) {
        width: 60%;
    }
    /* height: 600px; */
`
const waterRightImage = "https://assets.dailybruin.com/images/interactive.2020.registration-issue/water1-5fc6e68848e912abd9542f6fb0415c42.png";
const waterLeftImage = "https://assets.dailybruin.com/images/interactive.2020.registration-issue/water2-7bb062af88db7035de67484c317cd462.png";
const landOneImage = "https://assets.dailybruin.com/images/interactive.2020.registration-issue/land1-852925e69e6e314f92125830755853b1.png";
const landTwoImage = "https://assets.dailybruin.com/images/interactive.2020.registration-issue/land2-345660fddb9c3abb1862e8e7902e20ce.png";


class StaticImage extends React.Component {
    render() {
        let source = waterRightImage;
        let align = "";
        switch(this.props.imageUrl) {
            case "water_right":
                source = waterRightImage;
                align = 'right';
                break;
            case "water_left":
                source = waterLeftImage;
                align = 'left';
                break;
            case "land_one":
                source = landOneImage;
                align = 'left';
                break;
            case "land_two":
                source = landTwoImage;
                align = 'left';
                break;
          }
        if (this.props.section == "OPINION" && this.props.imageUrl == "water_right") {
            return (<></>)
        }
        else {
            return(
            <Image className='static_image' src={source} align={align}/>
        )
            }
    }
}
export default StaticImage;