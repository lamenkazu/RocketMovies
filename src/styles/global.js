import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.BACKGROUND};
        color: ${({ theme }) => theme.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 200ms;
    }

    button:hover, 
    a:hover{
        filter: brightness(0.9)
    }

    ::-webkit-scrollbar{
        width: .8rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({ theme }) => theme.PRIMARY}
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.WHITE}
    }
`;
