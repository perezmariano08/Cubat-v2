import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Productos from '../pages/Productos/Productos'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <ReactDomRoutes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/productos' element={<Productos/>} />
                    <Route path='*' element={<PageNotFound/>} />
                </ReactDomRoutes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes