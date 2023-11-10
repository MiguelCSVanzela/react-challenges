import { useState } from "react";

const HelloWorld = () => {
  const style = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "white",
  };
  return (
    <div style={style}>
      <h2>Hello, World!</h2>
    </div>
  );
};

export default HelloWorld;
