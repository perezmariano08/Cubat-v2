import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--gray-100);
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 50px 100px;
    max-width: 1200px;
    gap: 50px;
`

export const FooterSocial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 30px;
    font-weight: 500;
    img {
        width: 50px;
    }
`

export const FooterSocialIcons = styled.div`
    display: flex;
    gap: 20px;
    font-size: 25px;
    a {
        color: var(--white);
    }
`