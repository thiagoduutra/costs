import React from "react";
import "./ProjectForm.scss";

const ProjectForm = () => {
  return (
    <div className="container-projectForm">
      <form>
        <div className="wrapper-input">
          <label className="labelForm" htmlFor="nameProject">
            Nome do projeto:
          </label>
          <input
            id="nameProject"
            className="input-form"
            name="nameProject"
            type="text"
            placeholder="Insira o nome do projeto"
          />
        </div>
        <div className="wrapper-input">
          <label className="labelForm" htmlFor="priceProject">
            Orçamento do projeto:
          </label>
          <input
            id="priceProject"
            className="input-form"
            name="priceProject"
            type="number"
            placeholder="Insira o orçamento total"
          />
        </div>
        <div className="wrapper-input">
          <label className="labelForm" htmlFor="category-id">
            Selecione a categoria
          </label>
          <select className="input-form" name="category-id" id="category-id">
            <option value="" disabled selected>
              Selecione a categoria
            </option>
            <option value="1">Categoria 1</option>
          </select>
        </div>
        <input type="submit" className="btn" value="Criar Projeto" />
      </form>
    </div>
  );
};

export default ProjectForm;
