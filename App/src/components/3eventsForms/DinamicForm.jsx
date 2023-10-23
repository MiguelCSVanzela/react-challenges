import { useState } from "react";

const DinamicForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [extras, setExtras] = useState([""]);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleChangeExtra = (i, event) => {
    const values = [...extras];
    values[i] = event.target.value;
    setExtras(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Inputs: ${inputs.email}`, `Extras: ${extras}`);
  };

  const handleAdd = () => {
    // const input = document.createElement("input");
    // input.setAttribute("type", "text");
    // input.setAttribute("name", `newElement${Math.random()}`);
    // input.addEventListener("change", handleChange);
    // document.querySelector("#lastInput").appendChild(input);
    const values = [...extras];
    values.push("");
    setExtras(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      {extras.map((field, i) => (
        <div key={i}>
          <input
            type="text"
            value={field}
            onChange={(event) => handleChangeExtra(i, event)}
          />
        </div>
      ))}
      <div>
        <input type="submit" value="Submit Form" />
        <button onClick={handleAdd}>Add Input</button>
      </div>
    </form>
  );
};

export default DinamicForm;
