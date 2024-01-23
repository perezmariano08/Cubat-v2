import React from 'react'
import { IconCart, NavLinkStyled, NavbarContainerStyled, NavbarIcons, NavbarList, NavbarTopContainerStyled, NavbarTopWrapper, NavbarWrapper, OpenModalMenu } from './NavbarStyles'
import { FaCartShopping, FaInstagram } from "react-icons/fa6";
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
                    <FaInstagram className='icon'/>
                    <span>cubat.ok</span>
                </NavbarTopWrapper>
            </NavbarTopContainerStyled>
            <NavbarContainerStyled>
                <NavbarWrapper>
                    <OpenModalMenu whileTap={{scale: .8}} className='menu-icon'>
                        <HiOutlineBars3BottomLeft />
                    </OpenModalMenu>
                    <img src={LogoNavbar} alt="Logo Cubat" className='logo-navbar'/>
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