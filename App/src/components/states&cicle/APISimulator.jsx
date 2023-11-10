import { useState, useEffect } from "react";

const APISimulator = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Os dados já chegaram baby!" });
    }, 2000);
  }, []);

  if (!data) {
    return "Carregando...";
  }

  return <h2>{data.message}</h2>;
};

export default APISimulator;
