import React from 'react'
import { ContainerFooter } from './styles'
import LogoPng from  '../../assets/img/logogestilt.png'
import { FaRegEnvelope } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"


const Footer = () => {
  return (
   <ContainerFooter>

    <img src={LogoPng} alt="logo" />



    <div contact-footer>
   <h3>Fale com a Gente</h3>
     <p><FaRegEnvelope size={'20px'} />Gestilt@contato.com</p>
     
    <a href="#"><FaWhatsappSquare style={{marginTop: '10px'}} size={'25px'} /></a>
    <a href="#"><FaFacebookSquare size={'25px'} /></a>
    <a href="#"><FaInstagramSquare size={'25px'} /></a>


    </div>

    <div className='copy-gestilt'>

    Gestilt 2023 &copy; <strong> Todos os Direitos Reservados</strong>
    </div>


   </ContainerFooter>
  )
}

export default Footer