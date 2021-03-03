import { createGlobalStyle, keyframes } from "styled-components";
import { reset } from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}

    html{
        --color-black: #3d3d3d;
        --color-grey: #636e72;
        --color-lightGrey: #bdc3c7;
        --color-blue: #4285f4;
        --color-red: #db4437;
        --color-GHPurple:#6f42c1;
        --color-LIBlue:#2867b2;
        --shadow-grey: 0px 0px 18px 0px rgba(217, 217, 217, 1);
        --border-lightGrey: 1px solid var(--color-lightGrey);
        --border-lightGrey-dashed: 1px dashed var(--color-lightGrey);
        --border-blue: 1px solid var(--color-blue);
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
        font-size: 16px;
        border: var(--border-blue);
        color: var(--color-blue);
        cursor: pointer;
    }

    input:focus{
        outline: none;
    }

    main{
        width: 100%;
        max-width: 1200px;
        min-height: 50vh;
        margin: 0 auto;
        padding: 5px 35px;
        margin-bottom: 200px;
    }
`;

export default globalStyles;

export const slideIn = keyframes`
0% {
  transform: translateY(-10px);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}`;

export const FadeOut = keyframes`
 8% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
