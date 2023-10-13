import styled from "styled-components"

export const ContainerHeaderPanel =  styled.div`

  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  padding: 0 30px;
  border-bottom: 5px solid black;

  .logo-header-panel {
    img {
        width: 150px;
        display: flex;
        
    }
  }
`

export const ContentIcons = styled.div`

  display: flex;
  margin-left: 100px;
  gap: 40px;
  
  
  .icons-panel {
    display: flex;
    gap: 20px;
    margin-left: 300px;
    align-items: center;

   

    
  }

  .search-panel {
    display: flex;
    align-items: center;
  }


  .btn-create-project {
    button {
        width: 110px;
        height: 35px;
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
      width: 400px;
      height: 100px;
      margin-top: 200px;

    }

    .modal-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }


    
`