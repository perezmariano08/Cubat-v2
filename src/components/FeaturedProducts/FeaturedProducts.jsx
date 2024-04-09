import { useSelector } from "react-redux"
import { FeaturedProductsContainer, FeaturedProductsWrapper, ProductsContainer } from "./FeaturedProductsStyles"
import ProductCard from '../../pages/Productos/ProductCard/ProductCard'

const FeaturedProducts = () => {
    let products = useSelector((state) => state.products.products)
    return (
        <FeaturedProductsContainer className="container">
            <FeaturedProductsWrapper className="wrapper">
                <h2>productos destacados</h2>
                <ProductsContainer>
                {
                    Object.entries(products).map(([, items]) => {
                        return items.map((item) => {
                            return <ProductCard key={item.id} {...item} />
                        })
                    })
                }
                </ProductsContainer>
            </FeaturedProductsWrapper>
        </FeaturedProductsContainer>
    )
}

export default FeaturedProducts