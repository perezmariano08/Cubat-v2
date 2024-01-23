import styled from "styled-components";

export const ProductsContainerStyled = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    @media (max-width: 768px) {
        padding: 50px 15px;
    }
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    max-width: 1200px;
    width: 100%;

    @media (max-width: 768px) {
        gap: 20px;
    }
`