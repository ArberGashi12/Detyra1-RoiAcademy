import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #101522;
height: 65px;
display: flex;
justify-content: space-between;
padding: 0.1rem calc((100vw - 1000px) / 8);
z-index:12;

`

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
margin-left: 4rem;

height: 100%;

cursor: pointer;


&.active{
    color: white;
    
}
&:hover{
    color: white;
}
`
export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center ;
text-transform: uppercase;
font-weight:bold;
`


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
padding-left: 18px;


`
