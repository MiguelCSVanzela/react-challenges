import React from "react";
import { useSearchParams } from "react-router-dom";
const Busca = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  return <div>Busca retornou: {query}</div>;
};

export default Busca;
