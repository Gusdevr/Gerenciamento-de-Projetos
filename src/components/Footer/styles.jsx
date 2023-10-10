import styled from "styled-components"

export const ContainerFooter = styled.footer`
display: flex;
justify-content: center;
height: 300px;
align-items: center;
line-height: 30px;
width: 100vw;

a {
    
    text-decoration: none;
    color: inherit;

    @media screen and (max-width: 768px){
     display: flex;
    justify-content: center;
        
    }
    
}


h3 {
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
     display: flex;
    justify-content: center;
        
    }
}

p {
    display: flex;
    align-items: center;
    gap: 5px;

    @media screen and (max-width: 768px){
     display: flex;
    justify-content: center;
    
        
    }
  
}


img {
    width: 300px;
    height: 220px;
    margin-right: 200px;

    @media screen and (max-width: 768px){
        width: 180px;
        height: 100px;
       margin-left: 220px;
       margin-bottom: 20px;
     
        
    }
}


    .copy-gestilt {
        position: absolute;
        display: flex;
        margin-top: 250px;
        justify-content: center;
      
        @media screen and (max-width: 768px){
            padding-bottom: 30px;
            padding-top: 40px;
            max-width: 350px;
            flex-direction: column;
            text-align: center;
            font-size: 14px;
            line-height: 18px;

            
            
            
        }

    }

    @media screen and (max-width:  768px){
        display: flex;
        flex-direction: column;
        max-width: 350px;
        justify-content: center;
        display: none;
        
        
    }
`

