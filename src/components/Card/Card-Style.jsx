import styled from "styled-components";
import colors from '../../utils/style/colors';

export const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`
export const CardImage = styled.img`
    height: 148px;
    width : 148px;
    border-radius : 50%;
    margin-top: 30px;
    margin-bottom: 32px;
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-items: center; */
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 339px;
    height: 334px;
    transition: 200ms;
    
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }

`