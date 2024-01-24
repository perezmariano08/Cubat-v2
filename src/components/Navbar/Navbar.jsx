import React from 'react'
import { IconCart, NavLinkStyled, NavbarContainerStyled, NavbarIcons, NavbarList, NavbarLogo, NavbarTopContainerStyled, NavbarTopItem, NavbarTopItems, NavbarTopSocial, NavbarTopWrapper, NavbarWrapper, OpenModalMenu } from './NavbarStyles'
import { FaCartShopping, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

import LogoNavbar from '/logo-blanco.png'
import ModalCart from '../ModalCart/ModalCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../redux/cart/cartSlice';

const Navbar = () => {
    const dispatch = useDispatch()

    const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)
    
    return (
        <>
            <NavbarTopContainerStyled>
                <NavbarTopWrapper>
                    <NavbarTopItems>
                        <NavbarTopItem to={'/'}>
                            <FaEnvelope className='icon'/>
                            <span>contacto@cubatoficial.online</span>
                        </NavbarTopItem>
                        <NavbarTopItem to={'/'}>
                            <FaWhatsapp className='icon'/>
                            <span className='number'>3512 34-5678</span>
                        </NavbarTopItem>
                    </NavbarTopItems>
                    <NavbarTopSocial>
                        <FaInstagram className='icon'/>
                        <FaFacebook className='icon'/>
                    </NavbarTopSocial>
                </NavbarTopWrapper>
            </NavbarTopContainerStyled>
            <NavbarContainerStyled>
                <NavbarWrapper>
                    <OpenModalMenu whileTap={{scale: .8}} className='menu-icon'>
                        <HiOutlineBars3BottomLeft />
                    </OpenModalMenu>
                    <NavbarLogo href={'/'} whileTap={{scale: .95}}>
                        <img src={LogoNavbar} alt="Logo Cubat" className='logo-navbar'/>
                    </NavbarLogo>
                    <NavbarList>
                        <NavLinkStyled to={'/'}>Inicio</NavLinkStyled>
                        <NavLinkStyled to={'/servicios'}>Servicios</NavLinkStyled>
                        <NavLinkStyled to={'/productos'}>Productos</NavLinkStyled>
                        <NavLinkStyled to={'/contacto'}>Contacto</NavLinkStyled>
                        <NavLinkStyled to={'/sobre-nosotros'}>Sobre nosotros</NavLinkStyled>
                    </NavbarList>
                    <NavbarIcons>
                        <IconCart whileTap={{scale: .85}} onClick={() => dispatch(toggleHiddenCart())}>
                            <FaCartShopping/>
                            <span>{totalCartItems}</span>
                        </IconCart>
                    </NavbarIcons>
                </NavbarWrapper>
                
            </NavbarContainerStyled>
            <ModalCart/>
            
        </>
        
    )
}

export default Navbar