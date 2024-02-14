import {Link, Outlet} from "react-router-dom";
import  "./Navbar.css";
import React, { useState } from 'react';

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return( 
        <>
        <nav className="navbar">

            <Link to="/">
            <img className="logo" 
            src="src/assets/Nav/logo.png" 
            alt="OpenDoor's logo leading to homepage"/>
            </Link> 

            <div className="menu">
                
                <img className="burger"
                src={
                    menuOpen
                    ?("src/assets/Nav/x-close.png")
                    :("src/assets/Nav/hamburger.png")
                }
                alt="Menu button for mobile screenview"
                onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul className={`${"menuItems"} ${menuOpen && "menuOpenStyle"}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><Link className= "link" to="/">Home</Link></li>
                    <li><Link className= "link" to="/projects">Help</Link></li>
                    <li><Link className= "link" to="/ask">Ask for Help</Link></li>
                    <li><Link className="link" to="/how">How it Works</Link></li>
                    <li><Link className="link" to="/login">Sign In</Link></li>
                </ul>
            </div>

        </nav>
       
        <Outlet/>
        </>
    );
}
export default NavBar;