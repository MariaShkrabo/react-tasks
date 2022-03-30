import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { NavbarContainer, NavBarLink } from "./NavBar.styles";


const Navigation = () => {
    return (
        <Fragment>
            <NavbarContainer>
                <NavBarLink to="/">HOME</NavBarLink>
                <NavBarLink to="/user-list">USER LIST</NavBarLink>
            </NavbarContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;