import styled from "styled-components"

export const ContainerHome = styled.div`
    display: flex;
  
`

export const ContentBanner = styled.div`

.title-banner { 
        display: flex;
        justify-content: space-around;
        max-width: 500px;
        flex-direction: column;
        position: absolute;
        bottom: 40%;
        margin-left: 100px;
        color: #fff;
        text-shadow: 3px 4px black;
    

        button {
            margin-top: 25px;
            width: 160px;
            height: 60px;
            border: none;
            border-radius: 8px;
            background-color: #c71912;
            color: #Fff;
            font-weight: 700;
            font-size: 18px;
            cursor: pointer;

            :hover {
                background-color: black;
                color: #fff;
                font-weight: 700;
            }
        }

}

    
`

export const SectionService =  styled.div`
    
h2 {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    font-size: 32px;
}
`