import styled from 'styled-components';

export const Container = styled.div`
    width: 600px;
    height: 100vh;
    background-color: #000;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #fff;
        font-size: 48px;
        margin: 20px 0;
    }
`;

export const FormContainer = styled.div`
    
    input{
        border-radius: 5px;
        border: 1px solid #fff;
        font-size: 24px;
        margin-right: 10px;
        outline: none;
    }

    input::placeholder{
        font-size: 18px;
        padding-left: 5px;
        margin-bottom: 5px;
    }

    button{
        background: transparent;
        border: 1px solid #000;
        cursor: pointer;
    }

    section{
        width: 400px;
        height: 40px;
        background-color: #fff;
    }
`;

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;

    section{
        width: 500px;
        height: 50px;
        background-color: #fff;
        border-radius: 20px;
        margin-top: 20px;

        display: flex;
        justify-content: space-between;
    }

    section ul{
        display: flex;
        align-items: center;
        margin-left: 10px;
        list-style: none;
    }

    section span{
        font-size: 24px;
    }

    section button{
        margin-top: 10px;
        margin-right: 10px;
        background: transparent;
        border: 1px solid #fff;
        cursor: pointer;
    }

`;


