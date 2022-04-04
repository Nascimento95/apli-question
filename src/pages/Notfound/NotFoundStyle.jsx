import styled from "styled-components";
import colors from '../../utils/style/colors';

export const Container = styled.div `
    width: 1313px;
    height: 1256px;
    background: ${colors.backgroundLight};
    margin : 62px 64px 0px 63px;
    h1{
        text-align: center;
        padding-top: 99px;
    }
    img{
        padding: 25px 219px 88px 219px;
    }
    p{
        text-align: center;
        font-size: 31px;
        font-family: 'Trebuchet MS';
        font-weight: 700 bold;
    }
`