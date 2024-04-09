import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({
        children,
        background = 'blue',
        disabled,
        onClick,
        type,
        width = "fit-content"        
    }) => {
    return (
        <ButtonWrapper 
            onClick={onClick}
            whileTap={{scale: .95}}
            background={background}
            disabled={disabled}
            type={type}
            width={width}
        >{children}</ButtonWrapper>
    )
}

export default Button