import styled from "styled-components"

export const ContainerProjetos = styled.div`



ul {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  list-style: none;
  font-size: 18px;
  line-height: 150%;

  button {
   display: flex;
   margin: 10px 0px;
   width: 80px;
   height: 25px;
   cursor: pointer;
   border-radius: 5px;
   border: none;
   align-items: center;
   background-color: red;
   color: #fff;
   font-weight: 500;
   padding: 5px;
    
  }

  .btn-edit {
    background-color: black;
  }

}

.title-project {
  margin-left: 100px;
  margin-top: 100px;
}
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
      max-width: 300px;
      height: 100px;
      margin-top: 100px;
      margin-left: 700px;

     

      button {
        margin-left: 200px;
     

        
        
      }

    

      
      .btn-close {
        bottom: 270px;
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