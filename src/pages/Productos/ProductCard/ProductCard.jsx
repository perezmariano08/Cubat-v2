import React from 'react'
import { ProductButtons, ProductCardInfo, ProductCardWrapper, ProductImg, ProductTitle } from './ProductCardStyles'
import { FaCartShopping, FaEye } from 'react-icons/fa6'
import Button from '../../../components/UI/Button/Button'
import { formatPrice } from '../../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartSlice';
import { NavLink } from 'react-router-dom';

const ProductCard = ({id, category, title, desc, price, img, ancho, alto, rodado}) => {
    const dispatch = useDispatch()
    return (
        <ProductCardWrapper>
            <ProductImg>
                <img src={`products/${img}`}/>
            </ProductImg>
            
            <ProductCardInfo>
                <ProductTitle>
                    <span>{category}</span>
                    <h3>{title}</h3>
                </ProductTitle>
                <h4>${formatPrice(price)}</h4>
                <ProductButtons>
                    <Button background="red" to={`/productos/${id}`}>
                            <FaEye/>
                            <span>ver</span>
                    </Button>
                    <Button onClick={() => dispatch(addToCart({id, category, title, desc, price, img, ancho, alto, rodado}))}>
                        <FaCartShopping/>
                        <span>agregar</span>
                    </Button>
                </ProductButtons>
            </ProductCardInfo>
        </ProductCardWrapper>
    )
}

export default ProductCard