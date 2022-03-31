import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Footer, Header, NavBarLink, NavbarLinkContainer } from "./Navigation.styles";

const Navigation = () => {
    return (
        <Fragment>
            <Header>
                <NavbarLinkContainer>
                    <NavBarLink to="/">HOME</NavBarLink>
                    <NavBarLink to="/user-list">USER LIST</NavBarLink>
                </NavbarLinkContainer>
            </Header>
            <Outlet/>
            <Footer></Footer>
        </Fragment>
    )
}

export default Navigation;