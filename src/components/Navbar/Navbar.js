import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <nav className="navbar">
                {/* <div className="logo">Your Logo</div> */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/AboutPage">About</a></li>
                    <li><a href="/ContactPage">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
