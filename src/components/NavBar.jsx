import {Link, Outlet} from "react-router-dom";
import  "./Navbar.css";

function NavBar(){
    return( 
        <>
        <nav className="navbar">
            <Link to="/">
            <img className="logo" 
            src="src/assets/Nav/logo.png" 
            alt="OpenDoor's logo leading to homepage"/>
            </Link> 
            <div className="menu">
                <ul className="menuItems">
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