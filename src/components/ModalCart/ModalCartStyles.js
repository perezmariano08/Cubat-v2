import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
`;

export const ModalCartContainerStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 600px;
    height: 100vh;
    padding: 30px;
    flex-direction: column;
    gap: 20px;
    z-index: 99;
    display: flex;
    overflow-y: auto;
    background-color: var(--white);

    @media (max-width: 968px) {
        width: 100%;
    }
`

export const ModalCartClose = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;

    svg {
        cursor: pointer;
        font-size: 30px;
        color: var(--blue);
        text-align: center;
    }
`

export const ModalCartTitle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h3 {
        color: var(--blue);
        text-transform: uppercase;
        font-size: 20px;
        width: 100%;
    }
`

export const ModalCartDivider = styled.div`
    background-color: var(--gray-200);
    height: 1px;
    width: 100%;
`
export const ModalCartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 320px;
    overflow-y: hidden;
`
export const ModalCartItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    overflow-y: auto;
    padding-right: 15px;
`

export const ModalCartItem = styled.div`
    gap: 20px;
    display: flex;
    max-height: 150px;
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--gray-300);
    color: var(--blue);
    padding: 20px 10px;
    border-radius: 20px;
    img {
        height: 100%;
    }
`

export const ItemInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;

    h3 {
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
        text-transform: uppercase;
    }

    span {
        font-size: 18px;
        font-weight: 800;
    }
`

export const ItemHandler = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;

    .item-quantity {
        font-weight: 500;
    }

    .quantity-handler {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 8px;
        border: 1px solid var(--blue);
        color: var(--blue);
        font-weight: 500;
    }

    svg {
        color: var(--red);
    }
`

export const ModalCartPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    text-transform: uppercase;
    h4 {
        font-weight: 400;
        font-size: 20px;
    }
    span {
        font-weight: 800;
        font-size: 18px;
    }
`

export const ModalCartButton = styled.div`
    width: 100%;
    background-color: var(--blue);
`