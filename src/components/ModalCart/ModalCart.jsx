import React from 'react'
import { ItemHandler, ItemInfo, ItemText, ModalCartClose, ModalCartContainerStyled, ModalCartDivider, ModalCartItem, ModalCartItems, ModalCartItemsContainer, ModalCartPrice, ModalCartTitle, ModalOverlayStyled } from './ModalCartStyles'
import { IoClose } from "react-icons/io5";
import { FaTrashCan } from 'react-icons/fa6';
import Img from "/products/Automovil/prestiva.png"
import Button from '../UI/Button/Button';
const ModalCart = () => {
    return (
        <>
            <ModalOverlayStyled />
            <ModalCartContainerStyled>
                <ModalCartClose>
                    <IoClose className='icon-close'/>
                </ModalCartClose>
                <ModalCartTitle>
                    <h3>carrito de compras</h3>
                </ModalCartTitle>
                <ModalCartDivider/>
                <ModalCartItemsContainer>
                    <ModalCartItems>
                        <ModalCartItem>
                            <img src={Img} />
                            <ItemInfo>
                                <ItemText>
                                    <h3>145/80 R13 75T TL AR-300 FATE</h3>
                                    <span>$150000</span>
                                    <ItemHandler>
                                        <span classname="quantity-handler down">-</span>
                                        <span classname="item-quantity">1</span>
                                        <span classname="quantity-handler up">+</span>
                                        <FaTrashCan classname="item-trash"/>
                                    </ItemHandler>
                                </ItemText>
                            </ItemInfo>
                        </ModalCartItem>
                        <ModalCartItem>
                            <img src={Img} />
                            <ItemInfo>
                                <ItemText>
                                    <h3>145/80 R13 75T TL AR-300 FATE</h3>
                                    <span>$150000</span>
                                    <ItemHandler>
                                        <span classname="quantity-handler down">-</span>
                                        <span classname="item-quantity">1</span>
                                        <span classname="quantity-handler up">+</span>
                                        <FaTrashCan classname="item-trash"/>
                                    </ItemHandler>
                                </ItemText>
                            </ItemInfo>
                        </ModalCartItem>
                        <ModalCartItem>
                            <img src={Img} />
                            <ItemInfo>
                                <ItemText>
                                    <h3>145/80 R13 75T TL AR-300 FATE</h3>
                                    <span>$150000</span>
                                    <ItemHandler>
                                        <span classname="quantity-handler down">-</span>
                                        <span classname="item-quantity">1</span>
                                        <span classname="quantity-handler up">+</span>
                                        <FaTrashCan classname="item-trash"/>
                                    </ItemHandler>
                                </ItemText>
                            </ItemInfo>
                        </ModalCartItem>
                    </ModalCartItems>
                    
                </ModalCartItemsContainer>
                <ModalCartDivider/>
                <ModalCartPrice>
                    <h4>subTotal:</h4>
                    <span>$0</span>
                </ModalCartPrice>
                <ModalCartPrice>
                    <h4>subTotal:</h4>
                    <span>$0</span>
                </ModalCartPrice>
                <ModalCartDivider/>
                <Button>finalizar compra</Button>
            </ModalCartContainerStyled>
        </>
        
    )
}

export default ModalCart