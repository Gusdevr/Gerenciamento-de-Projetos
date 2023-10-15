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


  


    
`