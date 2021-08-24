import React from 'react';
import logo from './logo.jpeg';
import './App.css';
import './Nav.css';

import { Link } from 'react-router-dom';
function Nav(){
    return(
        <nav>
            <div>
            <img id="log" src={logo} alt="Logo" />
            </div>
            {/* <Link to='/'>
                <li id="sig"><strong>Home</strong></li>
                </Link> */}
            <ul className="nav-links">
            <Link to='/Home'>
            <strong id="toplink">Home</strong>
            </Link>
                <Link to='/signUp'>
                {/* <li id="sig"> */}
                    <strong id="toplink">Sign Up</strong>
                    {/* </li> */}
                </Link>
                <Link to='/logIn'>
                {/* <li id="lo"> */}
                    <strong id="toplink">Log In</strong>
                    {/* </li> */}
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;