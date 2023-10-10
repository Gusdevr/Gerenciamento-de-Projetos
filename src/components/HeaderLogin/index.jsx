import React from 'react'

import LogoPng from '../../assets/img/logogestilt.png'

import { ContainerHeader } from './styles'

const HeaderLogin = () => {


  return (
    <ContainerHeader>

    <div className='logo-header'> 
    <a href="/"><img src={LogoPng} alt="Logo Gestilt" /> </a>
        
    </div>

   

    </ContainerHeader>


  )
}

export default HeaderLogin