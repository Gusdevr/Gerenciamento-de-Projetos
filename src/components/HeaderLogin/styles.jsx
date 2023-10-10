import styled from "styled-components"


export const ContainerHeader = styled.header`

  width: 100vw;
  height: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  border-bottom: 5px solid black;





.logo-header {
    img {
        width: 250px;
    }
}

nav ul  {
    display: flex;
    justify-content: space-around;
    list-style: none;
    gap: 40px;
    align-items: center;
    

}

ul li {
    display: flex;

  
   
}

nav a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 18px;

    :hover {
        color: #c71912;
        font-weight: 700;
    }
}

 nav button {
  
    background-color: #c71912;
    border: none;
    width: 100px;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    align-items: center;
    color: #fff;

   :hover {
    background-color: black;
    
   }
}
  
`