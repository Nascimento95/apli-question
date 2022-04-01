import styled from "styled-components";
import { Link } from 'react-router-dom';
import colors from "../../utils/style/colors";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 98px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container-logo-title{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
            margin-left: 12px
        }
    }
`
export const NavContainer = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 62px;
`
export  const LogoHeader = styled.img`
    height: 57.43px;
    width: 56.79px;
`

export const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186A0;
    text-decoration: none;
    font-size: 20px;
    :hover{
        background-color: ${colors.primary};
        border-radius: 29px;
    }
`