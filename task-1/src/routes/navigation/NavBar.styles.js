import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    align-items: center;
`

export const NavBarLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin: 20px;

    &:hover{
        color: #71acdf;
    }
`