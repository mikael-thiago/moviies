import React from "react";

//Components
import { NavbarButton } from "../Topbar/Topbar";
import { Link } from "react-router-dom";

//Styles
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-header">
                <NavbarButton />
            </div>
            <div className="navbar-body">
                <nav className="navbar-nav">
                    <ul>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="">
                                <span className="navbar-item-icon glyphicon glyphicon-home"></span>
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link className="navbar-link" to="/favorites">
                                <span className="navbar-item-icon glyphicon glyphicon-heart"></span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;