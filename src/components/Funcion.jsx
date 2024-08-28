import React from "react";

export const Funcion = () => {
  function createGreeting(greeting) {
    return (name) => {
      return `${greeting}, ${name}!`;
    };
  }

  const sayHello = createGreeting("Hello");
  console.log(sayHello("Alice")); // Salida: "Hello, Alice!"

  return <div>Funcion</div>;
};
