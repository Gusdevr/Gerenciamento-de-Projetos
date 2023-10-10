import React, { useState } from 'react'
import { ContainerSlider } from './styles'
import IconLandingPng from '../../assets/icons/iconlanding.png'
import IconMarketingPng from '../../assets/icons/iconmarketing.png'
import IconMobilePng from '../../assets/icons/iconmobile.png'
import IconSitePng from '../../assets/icons/iconsite.png'
import IconTraficPng from '../../assets/icons/iconk.png'
import IconBusinessPng from '../../assets/icons/iconbusiness.png'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"


const ArticleSlider = () => {
  const [currentArticle, setCurrentArticle] = useState(0)

  const articles = [
    {
      imageSrc: IconLandingPng,
      title: "Projeto mais Eficiente",
      description: `Inicie sua jornada de transformação empresarial 
      com nossa aplicação de gestão de projetos. Com nossa solução intuitiva 
      e poderosa, você ganha controle total sobre seus projetos, equipes 
      e metas de negócios, tudo em um só lugar. `,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconMarketingPng,
      title: "To Do List",
      description: `Uma lista de afazeres (to do list) é uma ferramenta 
      crucial para manter tarefas e metas sob controle, garantindo que nada 
      seja esquecido. Ela ajuda a priorizar, economiza tempo e reduz o estresse, 
      melhorando a produtividade e permitindo o alcance de objetivos 
      de maneira mais eficaz.`,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconSitePng,
      title: "Planejamento",
      description: `PLanejamento é essencial para orientar indivíduos, empresas 
      e organizações em direção ao sucesso. Ao criar um plano bem estruturado, 
      é possível visualizar o futuro, antecipar desafios, identificar oportunidades 
      e alocar recursos de maneira eficaz. `,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconMobilePng,
      title: "Acompanhamento",
      description: `Acompanhe todas as etapas do seu projeto com sistema de metas,
      podendo salvar o seu projeto e modifica-lo depois.
      `,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconTraficPng,
      title: "Metodologia Ágil",
      description: `A metodologia ágil é uma abordagem flexível de gerenciamento 
      de projetos que prioriza a colaboração, adaptação a mudanças, 
      entrega contínua de valor ao cliente e feedback constante.`,
      buttonLabel: "Saiba Mais",
    },
    {
      imageSrc: IconBusinessPng,
      title: "Compartilhe",
      description: `Compartilhar um projeto usando um aplicativo ágil envolve colaboração 
      e transparência. As equipes utilizam a ferramenta para criar um ambiente digital centralizado. 
      Os membros da equipe podem visualizar tarefas, progresso e prazos em tempo real, promovendo 
      a colaboração e mantendo todos atualizados.`,
      buttonLabel: "Saiba Mais",
    },
  ]

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev === 0 ? articles.length - 1 : prev - 1))
  }

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev === articles.length - 1 ? 0 : prev + 1))
  }


  return (
    <ContainerSlider>
      <FaAngleLeft
        className="left-arrow"
        size={"30px"}
        style={{  marginTop: "360px", cursor: "pointer" }}
        onClick={prevArticle}
      >
        Anterior
      </FaAngleLeft>

      <article className="article-site">
        <img
          onClick={nextArticle}
          src={articles[currentArticle].imageSrc}
          alt={articles[currentArticle].title}
        />
        <h3>{articles[currentArticle].title}</h3>
        <p>{articles[currentArticle].description}</p>
        <a href="https://api.whatsapp.com/send?phone=3194752630&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os">
          <button>{articles[currentArticle].buttonLabel}</button>
        </a>

      </article>

      <FaAngleRight
        className="right-arrow"
        size={"30px"}
        style={{ marginTop: "360px", cursor: "pointer" }}
        onClick={nextArticle}
      >
        Próximo
      </FaAngleRight>
    </ContainerSlider>
  )
}

export default ArticleSlider