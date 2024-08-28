import React, { useState } from "react";

const Eventos = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleRestar = () => {
    setCount(count - 1);
  };
  const handleResetear = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me </button>
      <button onClick={handleRestar}>Restar </button>
      <button onClick={handleResetear}>Resetear </button>
    </div>
  );
};

export default Eventos;
