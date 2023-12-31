import styled from "styled-components";

export const ProductCardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    background-color: var(--gray-100);
    width: 300px;
    border-radius: 20px;
    img {
        width: 100%;
        transition: all .3s ease-in-out;
        cursor: pointer;
        &:hover {
            opacity: .80;
            scale: 1.02;
        }
    }
`

export const ProductCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    h3 { 
        font-size: 22px;
        line-height: 22px;
        color: var(--blue);
    }
    
    h4 {
        font-size: 18px;
        font-weight: 500;
        color: var(--gray-500);
    }
`

export const ProductTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
        color: var(--gray-400);
        text-transform: uppercase;
        font-size: 12px;
    }
`

export const ProductButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`