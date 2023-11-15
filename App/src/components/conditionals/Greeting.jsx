import React from "react";

const Greeting = () => {
  let hour = new Date().getHours();
  let message;
  if (hour > 18) {
    message = "Boa noite";
  } else if (hour > 12) {
    message = "Boa Tarde";
  } else {
    message = "Bom dia";
  }
  return <h2>{message}</h2>;
};

export default Greeting;
