import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ButtonWrapper = styled(motion(NavLink))`
    border: none;
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    background: ${({ background }) => `var(--${background})`};
    color: var(--white);
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .1s ease-in-out;
    &:hover {
        opacity: .85; 

    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`