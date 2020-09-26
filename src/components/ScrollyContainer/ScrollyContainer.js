import React from 'react';
import '../../App.css';
import './ScrollyContainer.css';

let d_string = "M380.232 17.2907C408.331 72.9908 798.5 306.5 643.5 437C489.056 567.032 -147 628 82.5 831C350.08 1067.68 798.5 1068.5 725 1253C690.342 1340 422.5 1368 422.5 1368"
let paths = document.createElementNS('http://www.w3.org/2000/svg', 'path');
paths.setAttribute('d', d_string)
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
        let offsetTop  = this.instance.getBoundingClientRect().top;
        let offsetBottom = this.instance.getBoundingClientRect().bottom; 
        //var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var scrollPercentage =  (-offsetTop / (offsetBottom - offsetTop) + 0.13) < 0.04 ? 0.04 : (-offsetTop / (offsetBottom - offsetTop) + 0.13); 
        //console.log(scrollPercentage)
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
        const { strokeDasharray, strokeDashoffset } = this.state; 
        return (
                <div id="ScrollyDiv" onScroll={this.handleScroll} ref={(el) => this.instance = el}>
                    <svg id="ScrollySVG" viewBox ="0 0 797 1373" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path id="ScrollyPath" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} d={d_string}/>
                    </svg>
                </div>
            
        );
      }
}

export default ScrollyContainer;
