import React from 'react';
import {
    AddressCity,
    AddressStreet,
    Title,
    UbicationAddress,
    UbicationContainerStyled,
    UbicationWrapper,
} from './UbicationStyles';
import { FaLocationDot } from 'react-icons/fa6';


const Ubication = () => {
    return (
        <UbicationContainerStyled>
            <UbicationWrapper>
                <Title>
                    <h2>Nuestra Sucursal</h2>
                    <span></span>
                    <p>Lunes a viernes de 9:30 a 18:00 y  Sabados de 10:00 a 14:00.</p>
                </Title>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.3867646408034!2d-64.2437201246001!3d-31.375897474280464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299acd9163713%3A0x42ffc5c310ab5f5b!2sCUBAT-%20NEUMATICOS%20Y%20BATERIAS!5e0!3m2!1ses-419!2sar!4v1703949299255!5m2!1ses-419!2sar" width="500" height="300" style={{ border: '0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map'
                ></iframe>
                <UbicationAddress>
                <AddressCity>
                    <FaLocationDot/>
                    <span>córdoba, argentina</span>
                </AddressCity>
                <AddressStreet>
                    <p>Cerro de las Rosas</p>
                    <a>José Roque Funes 1476</a>
                </AddressStreet>
                </UbicationAddress>
            </UbicationWrapper>
        </UbicationContainerStyled>
    );
};

export default Ubication;
