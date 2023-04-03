import React from "react";
import savings from "../../img/savings.svg";
import LinkBtn from "../../components/Header/LinkBtn";

import "./Home.scss";

const Home = () => {
  return (
    <div className="min-height">
      <div className="container">
        <section className="container-mainHome">
          <h1 className="titleHome">
            Bem vindo ao <span className="span-Costs">Costs</span>
          </h1>
          <p className="phraseHome">
            Comece a gerenciar os seus projetos agora mesmo!
          </p>
          <LinkBtn to="/newproject" text="Criar Projeto" />
          <img className="imgHome" src={savings} alt="logo home" />
        </section>
      </div>
    </div>
  );
};

export default Home;
