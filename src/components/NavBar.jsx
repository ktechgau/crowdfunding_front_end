import {Link, Outlet} from "react-router-dom";

function NavBar(){
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        <Outlet/>
        </>
    );
}
export default NavBar;