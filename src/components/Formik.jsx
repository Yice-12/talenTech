import React, { useState } from "react";

export const Formik = () => {
  const [valueInputs, setvalueInputs] = useState({ input1: "", input2: "" });

  const onChangeInputs = (e) => {
    const { name, value } = e.target;

    setvalueInputs({
      ...valueInputs,
      [name]: value,
    });
  };

  const hanldeSubmit = (e) => {
    console.log("se envio el formulario");
  };

  return (
    <form className="form" onSubmit={hanldeSubmit}>
      <div className="form-group">
        <input
          name="input1"
          label="Digita tu nombre"
          onChange={onChangeInputs}
          value={valueInputs.input1}
        />
        <input
          name="input2"
          label="Digita tu correo"
          onChange={onChangeInputs}
          value={valueInputs.input2}
        />
        <button type="submit" label="Enviar">
          Enviar
        </button>
      </div>
    </form>
  );
};
