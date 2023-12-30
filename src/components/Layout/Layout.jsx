import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ContentContainerStyled } from './LayoutStyles'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <ContentContainerStyled>{children}</ContentContainerStyled>
            <Footer/>
        </>
    )
}

export default Layout