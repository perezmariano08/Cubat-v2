import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    position: relative;
    background-image: url(/service-neumatico.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8); 
    }

    video {
        position: absolute;
        top: 0;
        width: 100%;
        @media (max-width: 968px) {
            display: none;
        }
    }

    @media (max-width: 968px) {
        border-radius: 0 0 50px 50px;
    }
`

export const HeroWrapper = styled.div`
    padding: 0 30px;
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 100px 0;
    width: 70%;
    z-index: 1;
    color: var(--white);
    
    h1 span {
        color: var(--green);
    }

    p span {
        font-weight: 500;
    }

    @media (max-width: 968px) {
        width: 100%;
    }
`