import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonWrapper = styled(motion.button)`
    border: none;
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    background: ${({ background }) => `var(--${background})`};
    color: var(--white);
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .1s ease-in-out;
    &:hover {
        opacity: .85; 

    }
`