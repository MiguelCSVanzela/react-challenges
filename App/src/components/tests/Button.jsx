import React, { useState } from "react";

const Button = () => {
  const [text, setText] = useState("Initial Text");
  const handleClick = () => {
    setText("Text changed with your click");
  };
  return (
    <div>
      <p data-testid="text">{text}</p>
      <button onClick={handleClick}>BTN</button>
    </div>
  );
};

export default Button;
