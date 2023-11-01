import React from "react";

import { ContainerHome, ContentBanner, SectionService } from "./styles";

import Header from "../../components/Header";
import BannerJpg from "../../assets/img/wallprojects.png";
import ArticleSlider from "../../components/ArticleSlider";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <ContainerHome>
      <Header />

      <ContentBanner>
        <img src={BannerJpg} alt="" />

        <div className="title-banner">
          <h1>
            O Gestilt é uma plataforma de gerenciamento de projetos inovadora e
            intuitiva, desenvolvida para aumentar a eficiência e impulsionar o
            sucesso dos seus projetos.{" "}
          </h1>

          <a href="/cadastro">
            <button>Cadastre-se</button>
          </a>
        </div>

        <SectionService>
          <h2>O que você pode fazer com Gestilt</h2>
          <ArticleSlider />

          <Footer />
        </SectionService>
      </ContentBanner>
    </ContainerHome>
  );
};

export default Home;
