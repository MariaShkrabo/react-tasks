import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header= styled.header`
    width: 100%;
    height: 80px;
    background-color: #7C005A;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    flex: 0 0 auto;
`

export const NavbarLinkContainer = styled.nav`
    width: 90%;
    display: flex;
    gap: 30px;
`

export const NavBarLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-size: large;

    &:hover{
        color: #37A110;
    }
`

export const Footer = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #7C005A;
    flex: 0 0 auto;
`