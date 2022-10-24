import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    * input {
        width: 400px;
        height: 40px;
    }

    * button{
        width: 30px;
        height: 30px;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: #000;

        display: flex;
        justify-content: center;
    }
`;