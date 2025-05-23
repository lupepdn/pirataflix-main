import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UpdateForm({ filme }) {
  const [values, setValues] = useState({
    name: "",
    genero: "",
    ano: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (filme) {
      setValues({
        name: filme.name,
        genero: filme.genero,
        ano: filme.ano,
      });
    }
  }, [filme]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!values.name || !values.genero || !values.ano) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      await axios.put(
        `https://671a3195acf9aa94f6a98dcc.mockapi.io/films/${filme.id}`,
        values
      );
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      setError("Ocorreu um erro ao atualizar o filme.");
      console.error(err);
    }
  };

  return (
    <div
      className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-light position-relative"
      style={{ marginTop: "20px" }}
    >
      <div className="w-50 border border-secondary bg-dark text-light shadow-lg px-5 pt-3 pb-5 rounded">
        <h1 className="text-danger fw-bold text-center mb-4">Editar Filme</h1>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && (
          <div className="alert alert-success">
            Filme atualizado com sucesso!
          </div>
        )}

        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome:
            </label>
            <input
              type="text"
              name="name"
              className="form-control bg-dark text-light border-secondary main-content"
              placeholder="Digite o nome"
              value={values.name}
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
              placeholder="Digite o gênero"
              value={values.genero}
              onChange={(e) => setValues({ ...values, genero: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ano" className="form-label">
              Ano:
            </label>
            <input
              type="text"
              name="ano"
              className="form-control bg-dark text-light border-secondary"
              placeholder="Digite o ano"
              value={values.ano}
              onChange={(e) => setValues({ ...values, ano: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success me-3">Atualizar</button>
            <Link to="/" className="btn btn-outline-light mx-2">
              Voltar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
