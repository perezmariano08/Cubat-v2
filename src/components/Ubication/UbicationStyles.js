import styled from "styled-components";

export const UbicationContainerStyled = styled.section`
    padding: 50px 0;
    width: 100%;
    background-image: url(/img-ubication.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 575px) { 
        padding: 50px 20px;
    }
`

export const UbicationWrapper = styled.div`
    background: var(--white);
    padding: 50px 100px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .map {
        border-radius: 15px;
        padding: 1px;
        background-color: var(--gray-200);

        @media (max-width: 768px) { 
            width: 100%;
        }
    }

    @media (max-width: 768px) { 
        padding: 50px 0;
    }

    @media (max-width: 575px) { 
        padding: 45px 30px;
    }
`

export const UbicationAddress = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AddressCity = styled.div`
    text-transform: uppercase;
    display: flex;
    gap: 6px;
    align-items: center;
    color: var(--red);
`

export const AddressStreet = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
        font-weight: 400;
    }

    a {
        color: var(--gray-400);
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        color: var(--blue);
    }

    span {
        height: 2px;
        width: 200px;
        background-color: var(--red);
    }

    p {
        text-align: center;
    }
`