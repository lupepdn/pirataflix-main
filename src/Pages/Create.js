import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({ name: "", genero: "", ano: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.name || !values.genero || !values.ano) {
      setError("Todos os campos são obrigatórios.");
      return;
    } else {
      setError(null);
    }

    axios
      .post("https://671a3195acf9aa94f6a98dcc.mockapi.io/films", values)
      .then((res) => {
        setSuccessMessage("Sucesso! Filme adicionado.");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-light">
      <div className="w-50 border bg-dark text-light shadow-lg px-5 pt-3 pb-5 rounded">
        <h1 className="text-center text-danger mb-4">Adicionar Filme</h1>
        {error && <div className="alert alert-danger">{error}</div>}

        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome:
            </label>
            <input
              type="text"
              name="name"
              className="form-control bg-dark text-light border-secondary"
              placeholder="Nome"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="genero" className="form-label">
              Gênero:
            </label>
            <input
              type="text"
              name="genero"
              className="form-control bg-dark text-light border-secondary"
              placeholder="Gênero"
              onChange={(e) => setValues({ ...values, genero: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ano" className="form-label">
              Ano:
            </label>
            <input
              type="text"
              name="ano"
              className="form-control bg-dark text-light border-secondary"
              placeholder="Ano"
              onChange={(e) => setValues({ ...values, ano: e.target.value })}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-success me-3">Enviar</button>
            <Link to="/" className="btn btn-outline-light mx-2">
              Voltar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
