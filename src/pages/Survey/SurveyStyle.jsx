import styled from "styled-components";
import colors from '../../utils/style/colors';

export const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 146px;
    .yes-or-no{
        display: flex;
        .no{
            margin-left: 20px;
        }
    }
`

export const YesButton = styled.button`
    width: 291px;
    height: 96px;
    border-radius: 31px;
    border: none;
    background: ${colors.backgroundLight};
    font-size: 25px;
    margin-top: 63px;
    &:hover{
        background-color: ${colors.primary};
        color: white;
    }
`

export const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

export const QuestionContent = styled.span`
    margin: 30px;
`

export const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`