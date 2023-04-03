import React from "react";
import ProjectForm from "../../components/ProjectForm/ProjectForm";

import "./Project.scss";

const Project = () => {
  return (
    <div className="min-height">
      <div className="container">
        <section className="container-mainProject">
          <h1 className="TitleProject">Criar Projeto</h1>
          <p>Crie seu projeto para depois adicionar os serviços</p>
          <ProjectForm />
        </section>
      </div>{" "}
    </div>
  );
};

export default Project;
