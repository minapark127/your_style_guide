import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}

    html{
        --color-black: #3d3d3d;
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

    main{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export default globalStyles;
