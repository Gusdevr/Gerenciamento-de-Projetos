import styled from "styled-components"

export const ContainerTarefas = styled.div`



    .btn-create-project {
    button {
        width: 110px;
        height: 35px;
        margin-left: 100px;
        margin-top: 50px;
        border-radius: 5px;
        border: none;
        background-color: #0a0a0a;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;

        :hover {
            background-color: red;
        }
    }

    


    .modal {
      position: absolute;
      width: 400px;
      height: 100px;
      margin-top: 100px;
      margin-left: 100px;

      button {
        margin-left: 280px;
     

        
        
      }

      .btn-close {
        position: absolute;
        bottom: 200px;
        right: 50px;
        background-color: red;

      }

    }

    .modal-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      
     
    }

   

   
  }
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;

        
    }
`