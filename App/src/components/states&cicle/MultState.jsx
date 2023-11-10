// Componente 8 - Multiplos estados

import { useState } from "react";

export default function MultState() {
  const [state, setState] = useState({
    internalState: 0,
    clickCounter: 0,
  });

  const handleClick = () => {
    if (state.internalState === 0) {
      setState((prev) => ({
        ...prev,
        internalState: 1,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        internalState: 0,
      }));
    }
    setState((prev) => ({
      ...prev,
      clickCounter: state.clickCounter + 1,
    }));
  };

  return (
    <>
      <button onClick={handleClick}>
        {state.internalState ? "ON" : "OFF"} - {state.clickCounter}
      </button>
    </>
  );
}
