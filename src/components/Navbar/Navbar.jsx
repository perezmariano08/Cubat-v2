import React from 'react'
import { IconAccount, IconCart, NavLinkStyled, NavbarContainerStyled, NavbarIcons, NavbarList, NavbarLogo, NavbarTopContainerStyled, NavbarTopItem, NavbarTopItems, NavbarTopSocial, NavbarTopWrapper, NavbarWrapper, OpenModalMenu } from './NavbarStyles'
import { FaCartShopping, FaInstagram, FaUser, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare, FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { BsEnvelopeAt } from "react-icons/bs";
import { LuUserCircle } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";

import LogoNavbar from '/Logos/Logotipo-Positivo.png'
import ModalCart from '../ModalCart/ModalCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../redux/cart/cartSlice';
import { toggleHiddenMenu } from '../../redux/menu/menuSlice';
import ModalMenu from '../ModalMenu/ModalMenu';
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
    const dispatch = useDispatch()

    const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)
    
    return (
        <>
            <NavbarTopContainerStyled>
                <NavbarTopWrapper>
                    <NavbarTopItems>
                        <NavbarTopItem target='_blank' to={'mailto:contacto@cubatoficial.online'}>
                            <BsEnvelopeAt className='icon'/>
                            <span>neumaticor.oficial@gmail.com</span>
                        </NavbarTopItem>
                        <NavbarTopItem target='_blank' to={'https://wa.link/5je7pn'}>
                            <FaWhatsapp className='icon'/>
                            <span className='number'>3517649357</span>
                        </NavbarTopItem>
                    </NavbarTopItems>
                    <NavbarTopSocial>
                        <a target='_blank' href="https://www.instagram.com/neumaticor.ok/"><FaInstagram className='icon'/></a>
                        <a target='_blank' href="https://www.facebook.com/Cubat.ok/"><FaFacebookSquare className='icon'/></a>
                    </NavbarTopSocial>
                </NavbarTopWrapper>
            </NavbarTopContainerStyled>
            <NavbarContainerStyled>
                <NavbarWrapper>
                    <NavbarLogo whileTap={{scale: .95}} href='/'>
                        <img src={LogoNavbar} alt="Logo Cubat" className='logo-navbar'/>
                    </NavbarLogo>
                    <NavbarList>
                        <li><NavLinkStyled to={'/'}>Inicio</NavLinkStyled></li>
                        <li><NavLinkStyled to={'/servicios'}>Servicios</NavLinkStyled></li>
                        <li><NavLinkStyled to={'/productos'}>Productos</NavLinkStyled></li>
                        <li><NavLinkStyled to={'/contacto'}>Contacto</NavLinkStyled></li>
                        <li><NavLinkStyled to={'/sobre-nosotros'}>Sobre nosotros</NavLinkStyled></li>
                    </NavbarList>
                    <OpenModalMenu whileTap={{scale: .8}} className='menu-icon' onClick={() => dispatch(toggleHiddenMenu())}>
                        <CgMenuGridO />
                    </OpenModalMenu>
                    {/* <NavbarIcons>
                        <IconAccount whileTap={{scale: .85}} to={"/"}>
                            <LuUserCircle/>
                            <span>Mi Cuenta</span>
                        </IconAccount>
                        <IconCart whileTap={{scale: .85}} onClick={() => dispatch(toggleHiddenCart())}>
                            <IoCartOutline/>
                            <span>{totalCartItems}</span>
                        </IconCart>
                    </NavbarIcons> */}
                </NavbarWrapper>
            </NavbarContainerStyled>
            {/* <ModalCart/> */}
            <ModalMenu/>
        </>
        
    )
}

export default Navbar