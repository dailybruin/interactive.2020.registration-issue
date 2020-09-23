import React from 'react';
import '../../App.css';
import styled from 'styled-components';

const Title = styled('div')`
    font-family: Source Sans Pro;
    font-weight: 700;
    font-size: 28px;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 36px;
    }
`

const NavbarItems = styled('div')`
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 28px;
    color: #fff;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 24px;
        justify-content: space-evenly;
    }
`

const NavbarItem = styled('div')`
    margin-left: 35px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`

const Bar = styled('div')`
    height: 75px; 
    position: -webkit-sticky;
    top: 0;
    position: sticky;
    background-color: #588BB8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 999;
    @media (max-width: 768px) {
        height: 100px;
        flex-direction: column;
        justify-content: center;
    }
`

class Navbar extends React.Component {
    render() {
        return(
            <Bar>
                <Title>registration issue 2020</Title>
                <NavbarItems>
                    <NavbarItem>
                        introduction
                    </NavbarItem>
                    <NavbarItem>
                        stories
                    </NavbarItem>
                    <NavbarItem>
                        about
                    </NavbarItem>
                </NavbarItems>
            </Bar>
        )
    }
}
export default Navbar;