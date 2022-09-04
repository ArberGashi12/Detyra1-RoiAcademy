import React from 'react'
import {
    Nav, NavLink, NavMenu, NavLogo, DivContainer
} from "./NavbarStyles";
import {FaBeer} from 'react-icons/fa'

export const Navbar = () => {
    return(
      <Nav>
        <NavMenu>
            <NavLogo to="/"   style={{ marginRight:'50rem'}}>
            <FaBeer  style={{ marginRight:'0.5rem'}}/>Home Page 
            </NavLogo >
           
            <NavLink to="/about"   >
                About
            </NavLink>
            <NavLink to="/contact" >
                Contact
            </NavLink>
            <NavLink to="/blog" >
                Blog
            </NavLink>
            
        </NavMenu>
      </Nav>
    )

}