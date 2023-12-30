import React from 'react'
import { NavLinkStyled, NavbarContainerStyled, NavbarIcons, NavbarList, NavbarTopContainerStyled, NavbarTopWrapper, NavbarWrapper, OpenModalMenu } from './NavbarStyles'
import { FaCartShopping, FaUser, FaInstagram } from "react-icons/fa6";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

import LogoNavbar from '/logo-blanco.png'
const Navbar = () => {
    return (
        <>  
            <NavbarTopContainerStyled>
                <NavbarTopWrapper>
                    <FaInstagram className='icon'/>
                    <span>cubat.ok</span>
                </NavbarTopWrapper>
            </NavbarTopContainerStyled>
            <NavbarContainerStyled>
                <NavbarWrapper>
                    <img src={LogoNavbar} alt="Logo Cubat" className='logo-navbar'/>
                    <NavbarList>
                        <NavLinkStyled to={'/'}>Inicio</NavLinkStyled>
                        <NavLinkStyled to={'/servicios'}>Servicios</NavLinkStyled>
                        <NavLinkStyled to={'/productos'}>Productos</NavLinkStyled>
                        <NavLinkStyled to={'/contacto'}>Contacto</NavLinkStyled>
                        <NavLinkStyled to={'/sobre-nosotros'}>Sobre nosotros</NavLinkStyled>
                    </NavbarList>
                    <NavbarIcons>
                        <FaUser />
                        <FaCartShopping/>
                        <OpenModalMenu whileTap={{scale: .8}} className='menu-icon'>
                            <HiOutlineBars3BottomRight />
                        </OpenModalMenu>
                    </NavbarIcons>
                </NavbarWrapper>
            </NavbarContainerStyled>
        </>
        
    )
}

export default Navbar