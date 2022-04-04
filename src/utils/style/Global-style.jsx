import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/Context";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Trebuchet MS, Helvetica, sans-serif';
    }

    body{
        margin: 0px;
        background-color: ${({isDarkMode}) => (isDarkMode ? 'black' : 'white')};
    }
`
function GlobalStyleFunc() {
    const {theme} = useContext(ThemeContext)
    return <GlobalStyle isDarkMode={theme === 'dark'}/>
}

export default GlobalStyleFunc