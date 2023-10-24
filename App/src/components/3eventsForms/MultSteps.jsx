import { useState } from "react";

const MultSteps = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step === 1 && formValues.nome === "") {
      alert("Preencha todos os campos");
    } else if (step === 2 && formValues.email === "") {
      alert("Preencha todos os campos");
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3 && formValues.senha === "") {
      alert("Preencha todos os campos");
    } else {
      console.log(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label>
            <h2>Nome:</h2>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      {step === 2 && (
        <div>
          <label>
            <h2>Email:</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      {step === 3 && (
        <div>
          <label>
            <h2>Senha:</h2>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      <div>
        {step > 1 && (
          <button onClick={prevStep} type="button">
            Anterior
          </button>
        )}
        {step < 3 && (
          <button onClick={nextStep} type="button">
            Proximo
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default MultSteps;
