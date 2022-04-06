import styled from "styled-components";
import colors from '../../utils/style/colors';

export const ContainerHome = styled.div`
    margin: 90px 62px 0px 65px;
    width: 1313;
    height: 824px;
    background-color: ${({theme}) => theme === "light" ? colors.backgroundLight : "#4F4C6B" } ;
    display: flex;
    
`
export const ContainerTitle = styled.div`
    width: 552px;
    height: 249px;
    margin: 176px 45px 399px 98px;
    h2{
        font-size: 50px;
        font-weight: 700 bold;
        line-height: 80.25px;
    }
`

export const ContainerCard = styled.div`
    width: 541px;
    height: 506px;
    margin: 139px 77px 179px 0px;
    /* border: 1px solid black; */
    
`