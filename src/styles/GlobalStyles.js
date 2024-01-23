import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #BC0000;
        --blue: #000E1B;
        /* Gray Scale */
        --white: #fafafa;
        --gray-100: #e9ebed;
        --gray-200: #CACDD2;
        --gray-300: #9FA4A9;
        --gray-400: #73787E;
        --gray-500: #464C52;
        --gray-600: #26282B;
        --gray-700: #1B1D1F;
        --black: #121212;
    }
    html {
        scroll-behavior: smooth;
    }

    img {
        user-select: none;
    }

    body {
        background-color: var(--white);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Outfit', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    /*? Headings Desktop */
    h1 {
        font-size: 45px;
        line-height: 45px;
        font-weight: 700;
    }

    h2 {
        font-size: 40px;
        line-height: 40px;
        font-weight: 700;
    }

    h3 {
        font-size: 35px;
        line-height: 35px;
        font-weight: 700;
    }

    h4 {
        font-size: 30px;
        font-weight: 700;
    }

    h5 {
        font-size: 25px;
        font-weight: 700;
    }

    h6 {
        font-size: 20px;
        font-weight: 700;
    }

    p {
        font-weight: 300;
    }

    /* Mobile */
    @media (max-width: 575px) {
        h1 {
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
        }
        
        h2 {
            font-size: 35px;
            line-height: 35px;
            font-weight: 700;
        }
        
        h3 {
            font-size: 30px;
            line-height: 30px;
            font-weight: 700;
        }
        
        h4 {
            font-size: 30px;
            font-weight: 700;
        }
        
        h5 {
            font-size: 25px;
            font-weight: 700;
        }
        
        h6 {
            font-size: 20px;
            font-weight: 700;
        }

        
    } 
    // Estilo de la barra de desplazamiento para Chrome
    ::-webkit-scrollbar {
        width: 10px; /* Ancho de la barra de desplazamiento */
    }

    /* Estilo del botón de flecha (flecha de desplazamiento) en Chrome */
    ::-webkit-scrollbar-button {
        display: none;
    }

    /* Estilo de la pista (fondo) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-track {
        background-color: #f0f0f0; /* Color de fondo de la pista */
    }

    /* Estilo del pulgar (el indicador que se arrastra) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-thumb {
        background-color: var(--black); /* Color del pulgar */
        height: 80px;
    }

    /* Estilo del pulgar cuando se pasa el mouse por encima en Chrome */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #999; /* Color del pulgar al pasar el mouse por encima */
    }
`