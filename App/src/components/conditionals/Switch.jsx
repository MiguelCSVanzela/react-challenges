import React from "react";

const Switch = ({ component }) => {
  switch (component) {
    case "title":
      return <h1>Titulo</h1>;
    case "text":
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          iusto culpa sapiente non dolor temporibus ipsum neque cum molestias
          ut, aliquid at ab sint? Labore, distinctio. Mollitia sint nemo
          perspiciatis.
        </p>
      );
    case "button":
      return <button>Click e saiba mais</button>;
    default:
      return <h2>No Idea, sorry</h2>;
  }
};

export default Switch;
