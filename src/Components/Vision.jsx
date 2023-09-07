import React from "react";
import visionimage from '../images/Vision.png'

function Vision() {
    return (
        <div id='vision'>
            <div className='vision-text'>
                <p>Get the opportunity to experience Next Generation SOS System at first. 200 users will be selected as a Beta Tester on a first come first serve basis. Testing will be done in 8 phases. Each phase’s duration will be 7 days and there will be 200 Testers.</p>
                <p>Get the opportunity to done in 8 phases. Each phase’s duration will be 7 days and there will be 200 Testers.</p>
                <p>Get the opportunity to done in 8 phases. Each phase’s duration will be 7 days and there will be 200 Testers</p>
                <button>READ MORE</button>
            </div>
            <div className='vision-image'>
                <img src={visionimage} alt="Image" />
            </div>
        </div>
    )
}

export default Vision;