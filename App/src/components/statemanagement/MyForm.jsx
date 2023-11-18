import { Form, Field } from "react-final-form";

const required = (value) => (value ? undefined : "Campo obrigatório");

const mustBeANumber = (value) =>
  isNaN(value) ? "Precisa ser um número" : undefined;

const minAge = (min) => (value, allValues) => {
  if (allValues.parentName) {
    return undefined;
  }

  return isNaN(value) || value >= min
    ? undefined
    : `Valor deve ser maior que ${min}`;
};

const MyForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const composeValidators = (...validators) => {
    return (...args) =>
      validators.reduce(
        (error, validator) => error || validator(...args),
        undefined //para que a função não interfira no comportamento padrão do react
      );
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome: </label>
            <Field name="firstname" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Seu nome: " />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
          </div>

          <div>
            <label>Sobrenome: </label>
            <Field name=" lastname" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Seu sobrenome: " />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
          </div>

          <div>
            <label>E-mail: </label>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="email" placeholder="Seu e-mail: " />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
          </div>

          <div>
            <label>Idade: </label>
            <Field
              name="age"
              validate={composeValidators(required, mustBeANumber, minAge(18))}
            >
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Sua Idade: " />
                  {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
              )}
            </Field>
          </div>

          {values.age && values.age < 18 && (
            <div>
              <label>Nome do Responsável: </label>
              <Field name="parentName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Nome do seu responsável: "
                    />
                    {meta.error && meta.touched && <p>{meta.error}</p>}
                  </div>
                )}
              </Field>
            </div>
          )}
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Enviar
            </button>
            <button type="button" onClick={form.reset}>
              Resetar
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default MyForm;
