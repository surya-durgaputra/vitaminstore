import React from 'react';
import './Navigation.css'

const Navigation = (props) => {
    return (
        <div id="myNav" className="overlay">
        {/* we dont do 
        onClick={props.closeNav()} 
        because then props.closeNav() 
        will be run as soon as the component is rendered. 
        We want it to run when the component is clicked.
        Below is the proper way to run a function on click event or any other event  */}
            <a onClick={()=>props.closeNav()} className="closebtn">&times;</a>
            <div className="overlay-content">
                <a href="">Tickets</a>
                <a href="">Calls</a>
                <a href="">Whatsapp</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
};

export default Navigation;