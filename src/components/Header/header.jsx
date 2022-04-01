import { StyledLink } from "./Header-style"

function Header() {
    return (
        <nav>
            <StyledLink to="/">Acceuil</StyledLink>
            <StyledLink to="/survey/1">Questionnaire</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
        </nav>
    )
}

export default Header
