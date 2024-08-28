import React, { useEffect } from "react";

export const Hof = () => {
  const sayHi = (name) => {
    console.log(`hola ${name}`);
  };

  const saludo = (action, params) => {
    action(params);
  };

  useEffect(() => {
    saludo(sayHi, "yicel");
  }, []);

  return <div>Hof</div>;
};
