import React from 'react';
import ReactDOM from 'react-dom'
import '../App.css';

let paths = document.createElementNS('http://www.w3.org/2000/svg', 'path');
paths.setAttribute('d','M' + 2.5 + ',' + 1 + 'L' + 9.5 + ',' + 1596)
paths.setAttribute('stroke', "#568CBA")
paths.setAttribute('strokeWidth', 5);
let pathLength = paths.getTotalLength(); 
paths.style.strokeDasharray = pathLength + ' ' + pathLength;
paths.style.strokeDashoffset = pathLength;

class ScrollyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strokeDasharray: paths.style.strokeDasharray,
            strokeDashoffset: paths.style.strokeDashoffset
        }

        this.handleScroll = this.handleScroll.bind(this);
    }
    
    handleScroll() {
        // What % down is it? 
        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                
        // Length to offset the dashes
        var drawLength = pathLength * (scrollPercentage - 0.03);

        // Draw in reverse
        paths.style.strokeDashoffset = pathLength - drawLength;
        if (scrollPercentage >= 0.99) {
            paths.style.strokeDasharray = "none";
        } else {
            paths.style.strokeDasharray = pathLength + ' ' + pathLength;
        }
        this.setState({
            strokeDasharray: paths.style.strokeDasharray,
            strokeDashoffset: paths.style.strokeDashoffset
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
      render() {
        const { strokeDasharray, strokeDashoffset }= this.state; 
        return (
            <div onScroll={this.handleScroll}>
                <svg id="Scrolly" width="12" height="1596" viewBox="0 0 12 1596" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} strokeWidth="5" stroke="#568CBA" d="M2.5, 1 L9.5, 1596"></path>
                </svg>
            </div>
        );
      }
}

export default ScrollyContainer;
