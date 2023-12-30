import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const NavbarTopContainerStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue);
    height: 40px;
    width: 100%;
    padding: 0 100px;
    @media (max-width: 968px) {
        display: none;
    }
`

export const NavbarTopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    color: var(--white);
    gap: 5px;
    span {
        font-weight: 300;
    }
`

export const NavbarContainerStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99;
    width: 100%;
    padding: 0 100px;
    background-color: var(--red);


    @media (max-width: 968px) {
        padding: 0 30px;
        height: 60px;
    }
`

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    img {
        height: 40%;
    }
    .menu-icon {
        display: none;
        cursor: pointer;
        @media (max-width: 968px) {
            display: flex;
            font-size: 25px;
        }
    }
`

export const NavbarList = styled.ul`
    display: flex;
    gap: 20px;
    @media (max-width: 968px) {
        display: none;
    }
`

export const NavLinkStyled = styled(NavLink)`
    color: var(--white);
    font-size: 18px;
    font-weight: 300;

    &.active {
        font-weight: 800;
    }
`

export const NavbarIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--white);
    font-size: 18px;
    font-weight: 200;
    
`

export const OpenModalMenu = styled(motion.div)``