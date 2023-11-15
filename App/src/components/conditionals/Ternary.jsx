import React from "react";

const Ternary = ({ condition }) => {
  return <div>{condition ? <h1>Olá</h1> : <h2>Não olá</h2>}</div>;
};

export default Ternary;
