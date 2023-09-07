import React from 'react';
import iconL from '../images/icon_linkedin.png'
import iconF from '../images/icon_facebook.png'
import iconT from '../images/icon_twitter.png'


function Footer() {
    return (
        <div className='footer'>
            <div className='s_footer sec_padding'>
                <div className='footer-links'>
                    <div className='footer_links-div'>
                        <h4>KNOW US</h4>
                        <a className='footer-a' href="/main">
                            <p>Home</p>
                        </a>
                        <a className='footer-a' href="/vision">
                            <p>About Us</p>
                        </a>
                        <a className='footer-a' href="/blog">
                            <p>Blog</p>
                        </a>
                    </div>
                    <div className='footer_links-div'>
                        <h4>USEFUL LINKS</h4>
                        <a className='footer-a' href="">
                            <p>Career</p>
                        </a>
                        <a className='footer-a' href="">
                            <p>Directors</p>
                        </a>
                        <a className='footer-a' href="">
                            <p>Statistics</p>
                        </a>
                        <a className='footer-a' href="">
                            <p>Privacy Policy</p>
                        </a>
                        <a className='footer-a' href="">
                            <p>Terms And Condition</p>
                        </a>
                    </div>
                    <div className='footer_links-div'>
                        <h4>CONTACT US</h4>
                        <h5>Address:</h5>
                        <p className='add-p'>#68. 2nd Cross, Muniramappa layout, Geddalahalli, Bengaluru, KA 560094.</p>
                        <h5>Email</h5>
                        <p className='add-p'>sicu.aura.official@gmail.com</p>
                        <h5>Contact Number</h5>
                        <p className='add-p'>+91-9876543210 / 2435-9876</p>
                    </div>
                    <div className='footer_links-div'>
                        <h4>SUBSCRIPTION</h4>
                        <p className='add-p'>With Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything And Everything The Brand Needs. Follow Us To Get Our Latest Updates.</p>
                        <h4 className='holo'>FOLLOW US ON</h4>
                        <div className='socialmedia'>
                        <p>
                            <img src={iconL} alt="LinkedIn" />
                            <img src={iconF} alt="Facebook" />
                            <img src={iconT} alt="Twitter" />
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='footer_below'>
                <div className='footer_copyright'>
                    <p>
                    *Terms and Condition Applied* | Copyright © 2023 Sicu Aura. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;