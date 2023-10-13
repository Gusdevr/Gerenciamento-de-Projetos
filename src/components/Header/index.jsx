import React, {useState, useEffect} from 'react'

import LogoPng from '../../assets/img/logogestilt.png'

import { ContainerHeader } from './styles'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Comportamento de rolagem suave
        });
      };
    

  return (
    <ContainerHeader className={scrolled ? "scrolled" : ""}>

    <div className='logo-header'> 
    <a href="/"><img src={LogoPng} alt="Logo Gestilt" /> </a>
        
    </div>

    <nav>
        <ul>
            <a href="/painel"><li>Painel</li></a>
            <a href="#"><li>Soluções</li></a> 
            <a href="#"><li>Recursos</li></a>
            <a href="/login"><li>Entrar</li></a>
            <a href="/cadastro"><button>Cadastro</button></a>

        </ul>
    </nav>

    </ContainerHeader>


  )
}

export default Header