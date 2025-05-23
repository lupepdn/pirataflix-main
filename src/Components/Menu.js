import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="d-flex flex-column align-items-center bg-dark text-light w-100 p-3 top-0 border-dark position-relative">
      <h1>PIRATAFLIX</h1>

      <div className="d-flex justify-content-center">
        <Link to="/" className="btn btn-outline-light mx-2">
          Início
        </Link>
        <Link to="/create" className="btn btn-outline-success mx-2">
          Criar
        </Link>
        <Link to="/update" className="btn btn-outline-light mx-2">
          Editar
        </Link>
        <Link to="/delete" className="btn btn-outline-danger mx-2">
          Remover
        </Link>
      </div>
    </div>
  );
};

export default Menu;
