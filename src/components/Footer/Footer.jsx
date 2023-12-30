import React from 'react'
import { FooterContainerStyled, FooterSocial, FooterSocialIcons, FooterWrapper } from './FooterStyles'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
    return (
        <FooterContainerStyled>
            <FooterWrapper>
                <FooterSocial>
                    <img src="/logo-blanco.png" />
                    <p>En Cubat, nos encargamos de que tu vehiculo tenga la seguridad que necesita. Contactanos via WhatsApp y explorá nuestros productos en redes sociales.</p>
                    <FooterSocialIcons>
                        <a target="_blank" href="https://www.instagram.com/cubat.ok/"><FaInstagram/></a>
                        <a target="_blank" href="https://www.facebook.com/cubat.ok/"><FaFacebook/></a>
                        <a href="https://wa.link/28bhyu"><FaWhatsapp/></a>   
                    </FooterSocialIcons>
                </FooterSocial>
            </FooterWrapper>
        </FooterContainerStyled>
    )
}

export default Footer