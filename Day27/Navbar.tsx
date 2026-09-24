import { UserContext } from "./useContext";
import { useContext } from "react";

function Navbar(){
    const NavbarUser = useContext(UserContext);
    return(
        <>
        <nav>
            <h1>Navbar</h1>
            <p>Name: {NavbarUser}</p>
        </nav>
        </>
    );
}

export default Navbar;