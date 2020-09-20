import React from 'react';
import '../../App.css';
import styled from 'styled-components';

const Image = styled("img")`
    right: 0;
    position: absolute;
`
class StaticImage extends React.Component {
    render() {
        return(
            <Image className='static_image' src={this.props.imageUrl} />
        )
    }
}
export default StaticImage;