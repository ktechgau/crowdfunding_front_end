import {Link, Outlet} from "react-router-dom";

function NavBar(){
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link t0="/project">Project</Link>
        </nav>
        <Outlet/>
        </>
    );
}
export default NavBar;