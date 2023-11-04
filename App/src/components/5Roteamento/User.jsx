import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  let { userId } = useParams();

  return (
    <div>
      <h2>Usuário em o id: {userId}</h2>
    </div>
  );
};

export default User;
