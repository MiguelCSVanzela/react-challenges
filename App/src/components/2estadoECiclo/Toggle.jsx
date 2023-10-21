// Componente 7 - Alterando estado com click

import { useState } from "react";

export default function Toggle() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    state === 0 ? setState(1) : setState(0);
  };

  return (
    <>
      <button
        // onClick={() => setState(!state)}
        onClick={handleClick}
        style={{ color: state ? "blue" : "red" }}
      >
        {state ? "ON" : "OFF"}
      </button>
    </>
  );
}
