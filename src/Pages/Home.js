import axios from "axios";
import { FilmContext } from "Components/FilmContext";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const { films, setFilms } = useContext(FilmContext);

  useEffect(() => {
    axios
      .get("https://671a3195acf9aa94f6a98dcc.mockapi.io/films")
      .then((res) => setFilms(res.data))
      .catch((err) => console.log(err));
  }, [films, setFilms]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-light min-vh-100">
      <div className="rounded bg-dark text-light shadow-lg p-4 w-75">
        <div className="table-responsive">
          <table className="table table-striped table-dark table-bordered rounded">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {films.map((d, i) => (
                <tr key={i}>
                  <td>
                    <Link
                      to={`/read/${d.id}`}
                      className="text-danger text-decoration-none"
                    >
                      {d.id}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/read/${d.id}`}
                      className="text-danger text-decoration-none"
                    >
                      {d.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
