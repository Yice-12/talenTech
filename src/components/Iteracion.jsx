import React from "react";

const Iteracion = () => {
  const numeros = [1, 2, 3, 4, 5, 6];
  const listItems = numeros.map((number) => <li>{number}</li>);

  return (
    <div>
      {numeros.map((numero, i) => (
        <li>{numero}</li>
      ))}
      {listItems}
    </div>
  );
};

export default Iteracion;
