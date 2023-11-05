import React from "react";
import { Link } from "react-router-dom";
import BuscaForm from "./BuscaForm";

const Home = () => {
  return (
    <div>
      <h2>Pagina inicial</h2>
      <ul>
        <li>
          <Link to="/Historia">Historia</Link>{" "}
        </li>
        <li>
          <Link to="/Amigos">Amigos</Link>
        </li>
      </ul>
      <BuscaForm />
    </div>
  );
};

export default Home;
