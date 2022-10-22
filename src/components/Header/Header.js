import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='nav'>
                <Link to="/"><img src={logo} alt="Logo"></img></Link>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;