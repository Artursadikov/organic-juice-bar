import React, { useContext } from 'react';
import "../Css/Nav.css";
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import { AuthContext } from "../Auth";

const Nav = props => {

    const { currentUser } = useContext(AuthContext);


    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <nav className="nav_bar">
            {/* <span className="brand"><span>O</span><span></span>J<span></span>B</span> */}
            <ul className="nav_ul">
                {!currentUser ?
                    <Link to="/login" className="nav_li">Login</Link>
                    : null
                }
                {!currentUser ?
                    <Link to="/sign" className="nav_li">Sign-up</Link>
                    : null
                }

                {currentUser ?
                    <Link to="/" onClick={logout} className="nav_li">Logout</Link>
                    : null
                }
            </ul>
        </nav>
    );
};

export default Nav;