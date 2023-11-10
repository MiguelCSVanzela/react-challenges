import { useState } from "react";

const ValidationForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    validate(name, value);
    setDataForm({
      ...dataForm,
      [name]: value,
    });

    setErrorMessage({ ...errorMessage, [name]: validate(name, value) });
    // event.target.id === "name" && event.target.value.length < 3
    //   ? setErrorMessage({ ...errorMessage, name: "Pelo menos 3 caracteres" })
    //   : setErrorMessage({ ...errorMessage, name: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar cada um dos campos
    let validationErrors = {};
    Object.keys(dataForm).forEach((key) => {
      const errorMessage = validate(key, dataForm[key]);
      validationErrors = { ...validationErrors, [key]: errorMessage };
    });

    setErrorMessage(validationErrors);

    if (!Object.values(validationErrors).some((x) => x !== "")) {
      console.log("Formulário Inválido!");
    } else {
      console.log(dataForm);
    }
  };

  const validate = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        errorMessage = value ? "" : "Campo nome obrigatório";
        break;
      case "email":
        errorMessage = value.match(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i)
          ? ""
          : "Email Invalido";
        break;
      case "password":
        errorMessage =
          value.length >= 8
            ? ""
            : "A senha não pode ser vazia e ter menos de 8 caracteres";
        break;
      default:
        break;
    }

    return errorMessage;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="name"
          placeholder="Nome"
          type="text"
          value={dataForm.name}
          name="name"
          onChange={handleChange}
        />
        <div>{errorMessage.name && errorMessage.name}</div>
      </div>
      <div>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={dataForm.email}
          onChange={handleChange}
        />
        <div>{errorMessage.email && errorMessage.email}</div>
      </div>
      <div>
        <input
          placeholder="Pass"
          type="password"
          name="password"
          value={dataForm.password}
          onChange={handleChange}
        />
        <div>{errorMessage.password && errorMessage.password}</div>
      </div>
      <button type="submit">Submit It</button>
    </form>
  );
};

export default ValidationForm;
