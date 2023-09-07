import React, {useState} from "react";
import logo from '../images/Logo.png';
import {Link} from 'react-scroll';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className='logo' smooth={true} duration={800}>
                <img src={logo} alt='Logo Image' />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={800}>Home</Link></li>
                <li><Link to='#' smooth={true} duration={800}>Directors</Link></li>
                <li><Link to='#' smooth={true} duration={800}>Statistics</Link></li>
                <li><Link to='blog' smooth={true} duration={800}>Blog</Link></li>
                <li><Link to='#' smooth={true} duration={800}>Career</Link></li>
                <li><Link to='vision' smooth={true} duration={800}>About Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;