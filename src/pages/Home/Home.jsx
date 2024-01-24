import React from 'react'
import Ubication from '../../components/Ubication/Ubication'
import Benefits from '../../components/Benefits/Benefits'
import Footer from '../../components/Footer/Footer'
import Gif from '/fate-banner-primary.gif'
const Home = () => {
    return (
        <>
            <img src={Gif} alt="" srcset="" />
            <Ubication/>
            <Benefits/>
        </>
    )
}

export default Home