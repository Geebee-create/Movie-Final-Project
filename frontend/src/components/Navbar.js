import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navbarWidth }) => {
    return (
        <div className="navbar" style={{ width: navbarWidth }}>
            <div className="navbar-content">
                <span role="img" aria-label="boxing-glove">🥊</span> 
                <strong style={{ color: 'maroon', fontSize: '130%' }}>  SCREEN CLASH  </strong> 
                <span role="img" aria-label="popcorn">🍿</span>
                <Link to="/">Homepage</Link>
                <Link to="/Battle-Page">Battle Page</Link> 
                <Link to="/profile">Profile</Link> 
                <Link to="/about">About</Link>
                {/* Login Button */}
                <button className="login-button">
                  <Link to="/log" className="login-button-link">
                    Log-in/Register
                  </Link>
                </button> 
            </div>
        </div>
    );
}

export default Navbar;
