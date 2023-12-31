import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import { ProductsContainerStyled, ProductsWrapper } from './ProductosStyles'
import { products } from '../../data/Products'

const Productos = () => {
    return (
        <>
            <ProductsContainerStyled>
                <ProductsWrapper>
                    {
                        products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    }
                </ProductsWrapper>
            </ProductsContainerStyled>
            
        </>
        
    )
}

export default Productos