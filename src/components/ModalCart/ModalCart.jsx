import { useNavigate } from "react-router-dom";
import { ModalCartButtons, ModalCartContainerStyled, ModalCartDivider, ModalCartItems, ModalCartItemsContainer, ModalCartPrice, ModalCartTitle, ModalOverlayStyled } from './ModalCartStyles'
import { FaAngleLeft } from 'react-icons/fa6';
import Button from '../UI/Button/Button';
import { useDispatch, useSelector } from "react-redux"
import { clearCart, toggleHiddenCart } from '../../redux/cart/cartSlice';
import { AnimatePresence } from 'framer-motion';
import ModalCartItem from './ModalCartItem';
import { formatPrice } from '../../utils/formatPrice';
const ModalCart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const hiddenCart = useSelector((state) => state.cart.hidden)
    const {cartItems} = useSelector((state) => state.cart)
    const totalPrice = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity)
    }, 0);
    return (
        <>
            {!hiddenCart && (
                <ModalOverlayStyled
                    onClick={() => dispatch(toggleHiddenCart())}
                />
            )}
            <AnimatePresence>
                {!hiddenCart && (
                <ModalCartContainerStyled
                    initial={{ translateX: 600 }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: 600 }}
                    transition={{ type: "spring", damping: 27 }}
                    key="cart-modal"
                > 
                    <ModalCartTitle>
                        <FaAngleLeft onClick={() => dispatch(toggleHiddenCart())} className='icon-close'/>
                        <h3>carrito de compras</h3>
                    </ModalCartTitle>
                    <ModalCartDivider/>
                    <ModalCartItemsContainer>
                        <ModalCartItems>
                            {
                                cartItems?.length ? (
                                    cartItems.map((item) => {
                                        return <ModalCartItem key={item.id} {...item}/>
                                    })
                                ) : (
                                    <p>No hay productos en el carrito.</p>
                                )
                            }
                        </ModalCartItems>
                        
                    </ModalCartItemsContainer>
                    <ModalCartDivider/>
                    <ModalCartPrice>
                        <h4>total:</h4>
                        <span>${formatPrice(totalPrice)}</span>
                    </ModalCartPrice>
                    <ModalCartDivider/>
                    <ModalCartButtons>
                        <Button 
                            background='red' 
                            disabled={!cartItems.length} 
                            onClick={() => dispatch(clearCart())}
                            >vaciar carrito
                        </Button>
                        <Button 
                            to={`/checkout`}
                            disabled={!cartItems.length}
                            onClick={() => {
                                dispatch(toggleHiddenCart())
                            }}
                        >finalizar compra</Button>
                    </ModalCartButtons>
                </ModalCartContainerStyled>
            )}
            </AnimatePresence>
            
        </>
        
    )
}

export default ModalCart