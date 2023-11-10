import { useState } from "react";

export default function FormRegister() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        type="text"
        value={dataForm.name}
        name="name"
        onChange={handleChange}
      />
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={dataForm.email}
        onChange={handleChange}
      />
      <input
        placeholder="Pass"
        type="password"
        name="pass"
        value={dataForm.pass}
        onChange={handleChange}
      />
      <button type="submit">Submit It</button>
    </form>
  );
}
