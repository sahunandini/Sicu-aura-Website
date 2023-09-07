import React from "react";
import headerimage from '../images/World Map.png'

function Header() {
    return (
        <div id='main'>
            <div className='header-text-background'>
                <div class='header-text'>
                    <h2>We’re Here To Give Protection To You And Your Family</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempor donec vestibulum pellen tesque sollicitudin nunc odio sed.</p>
                </div>
            </div>
            <div className='header-image'>
                <img src={headerimage} alt="Image" width={500}/>
            </div>
        </div>
    )
}


export default Header;