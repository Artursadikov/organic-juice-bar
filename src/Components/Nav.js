import React from 'react';
import "../Css/Nav.css";

const Nav = props => {
    return (
        <nav className="nav_bar">
            {/* <span className="brand"><span>O</span><span></span>J<span></span>B</span> */}
            <ul className="nav_ul">
                <li className="nav_li">Login</li>
                <li className="nav_li">Sign-up</li>
                <li className="nav_li">Logout</li>
                <li className="nav_li">Contact/About</li>
            </ul>
        </nav>
    );
};

export default Nav;