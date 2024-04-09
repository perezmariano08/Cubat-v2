import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
    background-color: var(--blue);
`

export const FooterWrapper = styled.div`
    padding: 50px 30px;
    flex-direction: column;
    gap: 40px;
    color: var(--gray-400);
    font-weight: 200;
`

export const FooterInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const FooterBrand = styled.div`
    display: flex;
    flex-direction:column;
    gap: 30px;
    width: 500px;
    img {
        width: 120px;
    }
`

export const FooterSocialIcons = styled.div`
    display: flex;
    gap: 10px;
    i, svg {
        color: var(--green);
    }
    
`

export const FooterMenu = styled.ul`
    display: flex;
    flex-direction: column;
    color: var(--white);
    gap: 20px;
`

export const FooterContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ItemFooterContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: var(--white);
    span {
        color: var(--green);
    }
`

export const FooterDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--gray-400);
`

export const FooterCopyright = styled.div`
    
`