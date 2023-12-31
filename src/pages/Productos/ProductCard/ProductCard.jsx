import React from 'react'
import { ProductButtons, ProductCardInfo, ProductCardWrapper, ProductTitle } from './ProductCardStyles'
import { FaCartShopping, FaEye } from 'react-icons/fa6'
import Button from '../../../components/UI/Button/Button'

const ProductCard = ({id, category, title, desc, price, img, ancho, alto, rodado}) => {
    return (
        <ProductCardWrapper>
            <img src={`products/${img}`}/>
            <ProductCardInfo>
                <ProductTitle>
                    <span>{category}</span>
                    <h3>{title}</h3>
                </ProductTitle>
                
                <h4>${price}</h4>
                <ProductButtons>
                    <Button background="red">
                        <FaEye/>
                        <span>ver</span>
                    </Button>
                    <Button>
                        <FaCartShopping/>
                        <span>añadir al carrito</span>
                    </Button>
                    
                </ProductButtons>
                
            </ProductCardInfo>
            
        </ProductCardWrapper>
    )
}

export default ProductCard