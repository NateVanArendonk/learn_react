import React from "react";
import logo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav className="navbar"> 
            <img src={logo} className="nav-image"></img>
            <h3 className="navbar-main-text">ReactFacts</h3>
            <h4 className="navbar-sub-text">React Course - Project 1</h4>
        </nav>
    )
}
