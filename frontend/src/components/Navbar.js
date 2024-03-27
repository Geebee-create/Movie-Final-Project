// Navbar.js
import React from 'react';

const Navbar = ({ onNavigation }) => {
    return (
        <div className="navbar">
            <a href="#home" onClick={() => onNavigation('home')}>Homepage</a>
            <a href="#battles" onClick={() => onNavigation('battles')}>All Movie Battles</a>
            <a href="#profile" onClick={() => onNavigation('profile')}>Profile</a>
            <a href="#about" onClick={() => onNavigation('about')}>About</a>
        </div>
    );
}

export default Navbar;