import styled from "styled-components"

export const ContentLogin = styled.div`

  
  .form-login {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
    }

    input {
    width: 350px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 18px;
    outline-color: #c71912;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 10px;
    }


    h1{
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 50px;
        
    }

    button {
        margin-top: 20px;
        width: 350px;
        height: 40px;
        cursor: pointer;
        border: none;
        background-color: #c71912;
        color: #fff;
        font-weight: 700;
        font-size: 18px;
        border-radius: 5px;
    }
  }

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    
  }

`