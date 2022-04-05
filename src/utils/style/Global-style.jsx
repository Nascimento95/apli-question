import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/Context";

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Trebuchet MS, Helvetica, sans-serif';
    }

    body{
        margin: 0px;
        background-color: ${({isDarkMode}) => (isDarkMode ? '#2F3E41' : 'white')};
        color: ${({isDarkMode}) => (isDarkMode ? 'white' : 'black')};
    }
`
function GlobalStyleFunc() {
    const {theme} = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}

export default GlobalStyleFunc