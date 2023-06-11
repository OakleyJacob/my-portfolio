

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";


const Navbar = () => {
    return (
        <>
        
                    <NavLink to="/contact" >New Game </NavLink>
                    <NavLink to="/Portfolio">Load Game</NavLink>
                    <NavLink to="/Skills" > Options </NavLink>
                    <NavLink to="/about" >Credits</NavLink>


        </>
    );
};
 
export default Navbar;