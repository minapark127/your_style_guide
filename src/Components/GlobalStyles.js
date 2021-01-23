import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}

    html{
        --color-black: #3d3d3d;
        --color-grey: #636e72;
        --color-lightGrey: #bdc3c7;
        --color-blue: #4285f4;
        --color-red: #db4437;
        --shadow-grey: 0px 0px 18px 0px rgba(217, 217, 217, 1);
    }

    *{
        box-sizing: border-box;
        word-wrap: no-wrap;
    }

    body{
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        color: var(----color-black);
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button{
        all: unset;
        font-size: 18px;
        font-weight: 600;
        border: 2px solid var(--color-blue);
        color: var(--color-blue);
        cursor: pointer;
    }

    input:focus{
        outline: none;
    }

    main{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 5px 35px;
    }
`;

export default globalStyles;
