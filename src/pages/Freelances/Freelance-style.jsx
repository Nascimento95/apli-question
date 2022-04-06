import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
        font-size: 30px;
    }
    h2{
        font-size: 20px;
        color: #8186A0;
    }
    .container-loading{
        display: flex;
        justify-content: center;
        width: 100vw;
    }

`
export const ErrorText = styled.h1`
    color : red;
    text-align: center;
`

export const CardsContainer = styled.div`

    padding: 97px 342px 276px 342px;
    justify-items: center;
    display: grid;
    gap: 70px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`