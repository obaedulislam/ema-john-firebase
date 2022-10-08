import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='nav'>
                <a href="/home"><img src={logo} alt="Logo"></img></a>
                <div className="menu">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/services">Services</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;