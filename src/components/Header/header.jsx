import {HeaderContainer, NavContainer, LogoHeader, StyledLink } from "./Header-style"
import Logo from '../../assets/Vector.png'


function Header() {
    return (
        <HeaderContainer>
            <div className="container-logo-title">
            <LogoHeader src={Logo} alt="logo-web-site" />
            <h1>Shiny</h1>
            </div>
            <NavContainer>
                <StyledLink to="/">Acceuil</StyledLink>
                <StyledLink to="/survey/1">Questionnaire</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header
