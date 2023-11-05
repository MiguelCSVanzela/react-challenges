import { useState } from "react";
import { useNavigate } from "react-router-dom";
const BuscaForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/busca?query=${query}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          type="text"
          placeholder="Buscar"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuscaForm;
