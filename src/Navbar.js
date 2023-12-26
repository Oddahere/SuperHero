import React from 'react';


//this is the navigation bar on the very top
//color found in index.css under ".navbar"

//https://stackoverflow.com/questions/55623303/bootstrap-4-navigation-bar-using-json

function Navbar(props){
    return(
        <div className="navbar">
            <span id="logo">Superheros Search Engine</span>
        </div>
    );
}

export default Navbar;