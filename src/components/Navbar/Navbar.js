import React from 'react';
import '../../App.css';

class Navbar extends React.Component {
    render() {
        return(
            <div className='navbar'>
                <div className='title'>registration issue 2020</div>
                <div className='navbar_items'>
                    <div className='navbar_item'>
                        introduction
                    </div>
                    <div className='navbar_item'>
                        stories
                    </div>
                    <div className='navbar_item'>
                        about
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;