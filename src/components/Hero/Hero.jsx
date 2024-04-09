import React from 'react'
import { HeroContainerStyled, HeroText, HeroWrapper } from './HeroStyles'
import Button from '../UI/Button/Button'
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
    return (
        <HeroContainerStyled className='container'>
            <HeroWrapper className='wrapper'>
                <HeroText>
                    <h1>NEUMATICOS DE <span>ALTA CALIDAD</span> Y AL MEJOR PRECIO</h1>
                    <p>Renová tus neumáticos de forma <span>ágil</span> y <span>segura</span>. Seguridad garantizada para tu vehículo.
                    En Neumaticor, trabajamos con marcas de alta calidad y al mejor precio del mercado.</p>
                    <Button background='green'>
                        <FaWhatsapp/>
                        Comunicate con nosotros
                    </Button>
                </HeroText>
            </HeroWrapper>
            <video autoPlay muted loop id="background-video" src='/video.mp4'>
            </video>
        </HeroContainerStyled>
    )
}

export default Hero