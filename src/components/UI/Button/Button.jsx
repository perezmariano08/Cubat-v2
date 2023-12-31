import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({
        children,
        background = 'blue',
    }) => {
    return (
        <ButtonWrapper 
            whileTap={{scale: .95}}
            background={background}
        >{children}</ButtonWrapper>
    )
}

export default Button