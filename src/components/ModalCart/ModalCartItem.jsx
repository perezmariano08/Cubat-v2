import React from 'react'
import { ItemHandler, ItemInfo, ItemText, ItemTitle, ModalCartItemWrapper } from './ModalCartStyles'
import { FaTrashCan } from 'react-icons/fa6'
import { formatPrice } from '../../utils/formatPrice'
import { addToCart, removeFromCart, removeItem } from '../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'

const ModalCartItem = ({id, category, title, desc, price, img, quantity, ancho, alto, rodado}) => {
    const dispatch = useDispatch()
    const enabledControl = quantity > 1 
    console.log(enabledControl);
    return (
        <ModalCartItemWrapper>
            <img src={`products/${img}`} />
            <ItemInfo>
                <ItemText>
                    <ItemTitle>
                        <span>{category}</span>
                        <h3>{title}</h3>
                    </ItemTitle>
                    
                    <h4>${formatPrice(price)}</h4>
                    <ItemHandler>
                        {!enabledControl 
                        ? 
                            <span className="quantity-handler down disabled">-</span> 
                        :
                            <span className="quantity-handler down" onClick={() => dispatch(removeFromCart(id))}>-</span>}
                        <span className="item-quantity">{quantity}</span>
                        <span className="quantity-handler up" onClick={() => dispatch(addToCart({img, title, desc, price, quantity, id}))}>+</span>
                        <FaTrashCan className="item-trash" onClick={() => dispatch(removeItem(id))} />
                    </ItemHandler>
                </ItemText>
            </ItemInfo>
        </ModalCartItemWrapper>
    )
}

export default ModalCartItem