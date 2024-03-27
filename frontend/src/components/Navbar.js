import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Homepage</Link>
            <Link to="/Battle-Page">Battle Page</Link> 
            <Link to="/profile">Profile</Link> 
            <Link to="/about">About</Link> 
        </div>
    );
}

export default Navbar;