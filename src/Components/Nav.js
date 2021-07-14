import React from 'react';
import "../Css/Nav.css";
import { Link } from 'react-router-dom';
import firebase from '../Firebase';

const Nav = props => {

    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <nav className="nav_bar">
            {/* <span className="brand"><span>O</span><span></span>J<span></span>B</span> */}
            <ul className="nav_ul">
                <Link to="/login" className="nav_li">Login</Link>
                <Link to="/sign" className="nav_li">Sign-up</Link>
                <Link to='/' onClick={logout} className="nav_li">Logout</Link>
                <Link className="nav_li">Contact/About</Link>
            </ul>
        </nav>
    );
};

export default Nav;