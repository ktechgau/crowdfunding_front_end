import {Link, Outlet} from "react-router-dom";
import  "./Navbar.css";
import React, { useState } from 'react';
import { useAuth } from "../../hooks/use-auth";
import hamburger from "../../assets/NavImg/hamburger.png";
import logo from "../../assets/NavImg/logo.png";
import close from "../../assets/NavImg/x-close.png";

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const {auth, setAuth} = useAuth();
    
    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return( 
        <>
        <nav className="navbar">

            <Link to="/">
            <img className="logo" 
            src={logo} 
            alt="OpenDoor's logo leading to homepage"/>
            </Link> 
            
            <div className="menu">
                
                <img className="burger"
                src={
                    menuOpen
                    ? close
                    : hamburger
                }
                alt="Menu button for mobile screenview"
                onClick={() => setMenuOpen(!menuOpen)}
                />
               
                <ul className={`${"menuItems"} ${menuOpen && "menuOpenStyle"}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><Link className= "link" to="/">Home</Link></li>
                    <li><Link className= "link" to="/projects">Help</Link></li>
                    <li><Link className= "link" to="/ask">Ask for Help</Link></li>
                        {auth.token ? (
                            <Link className="link" to="/" onClick={handleLogout}>Log Out</Link>
                        ) 
                        : (<Link className="link" to="/login">Login/Sign Up</Link>)}

                    {/*<li><Link className="link" to="/login">Sign In</Link></li>*/}
                </ul>
            </div>

        </nav>
       
        <Outlet/>
        </>
    );
}
export default NavBar;