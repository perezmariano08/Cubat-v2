import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import { ProductsContainerStyled, ProductsWrapper } from './ProductosStyles'
import Categories from '../../components/Categories/Categories'
import { useSelector } from 'react-redux'

const Productos = () => {
    let products = useSelector((state) => state.products.products)
    const {selectedCategory} = useSelector((state) => state.categories)
    if (selectedCategory) {
        products = { [selectedCategory]: products[selectedCategory]}
    }
    return (
        <>
            <ProductsContainerStyled>
                <ProductsWrapper>
                    <Categories/>
                    {
                        Object.entries(products).map(([, items]) => {
                            return items.map((item) => {
                                return <ProductCard key={item.id} {...item} />
                            })
                        })
                    }
                </ProductsWrapper>
            </ProductsContainerStyled>
        </>
    )
}

export default Productos