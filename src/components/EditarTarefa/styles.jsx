import styled from "styled-components";

export const ContentEdit = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;

    form {
        background: linear-gradient(to right, #fff 70%,  #0a0a0a 30%);
        width: 400px;
        height: 390px;
        border-radius: 5px;
        gap: 10px;
      
    }

    button {
        display: flex;
        align-items: center;
        background-color: red;
        color: #fff;
        width: 200px;
        height: 30px;
        justify-content: center;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        
       
    }

    h2 {
        display: flex;
        margin-bottom: 50px;
        font-size: 30px;
        font-weight: 700;
       
    }

    input {
        display: flex;
        width: 200px;
        height: 30px;
        outline: none;
    }
`