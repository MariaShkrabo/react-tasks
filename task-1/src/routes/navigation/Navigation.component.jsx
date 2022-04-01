import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Footer, Header, MainSection, NavBarLink, NavbarLinkContainer, Wrapper } from "./Navigation.styles";


const Navigation = () => {
    return (
        <Wrapper>
            <Header>
                <NavbarLinkContainer>
                    <NavBarLink to="/">HOME</NavBarLink>
                    <NavBarLink to="/user-list">USER LIST</NavBarLink>
                </NavbarLinkContainer>
            </Header>
            <MainSection>
                <Outlet/>
            </MainSection>
            <Footer/>
        </Wrapper>
    )
}

export default Navigation;