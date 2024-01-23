import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({
        children,
        background = 'blue',
        disabled,
        onClick,
        to
    }) => {
    return (
        <ButtonWrapper 
            onClick={onClick}
            whileTap={{scale: .95}}
            background={background}
            disabled={disabled}
            to={to}
        >{children}</ButtonWrapper>
    )
}

export default Button