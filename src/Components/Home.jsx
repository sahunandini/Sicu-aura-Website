import React from "react";
import homeimage from '../images/Globe.png'

function Home() {
    return (
        <div id='home'>
            <div className='home-image'>
                <img src={homeimage} alt="Image" width={1263}/>
            </div>
        </div>
    )
}

export default Home;