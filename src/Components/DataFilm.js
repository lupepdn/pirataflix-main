import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DataFilm({ filme }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://671a3195acf9aa94f6a98dcc.mockapi.io/films/${filme.id}`
      );
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setError("Ocorreu um erro ao apagar o filme.");
      console.error(err);
    }
  };

  return (
    <div
      className="d-flex flex-column w-100 vh-100 bg-dark text-light"
      style={{ marginTop: "20px" }}
    >
      <div className="d-flex w-100 justify-content-center align-items-center flex-grow-1">
        <div className="w-50 border border-secondary bg-dark text-light shadow-lg px-5 pt-3 pb-5 rounded">
          <h3 className="text-danger fw-bold text-center mb-4">
            Detalhes do Filme
          </h3>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">
              Filme deletado com sucesso!
            </div>
          )}
          <div className="mb-2">
            <strong>Nome: {filme.name}</strong>
          </div>
          <div className="mb-2">
            <strong>Gênero: {filme.genero}</strong>
          </div>
          <div className="mb-3">
            <strong>Ano: {filme.ano}</strong>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={() => {
                handleDelete();
              }}
              className="btn btn-danger me-3"
            >
              Apagar
            </button>
            <Link to="/" className="btn btn-outline-light mx-2">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataFilm;
