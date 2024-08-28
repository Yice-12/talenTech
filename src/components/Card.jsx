import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt="..."
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">
          {product.description.substring(0, 200) + "..."}
        </p>
        {/* <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{ background: product.disponible ? "green" : "red" }}
            >
              {product.disponible ? "Disponible" : "No disponible"}
            </button>
            <button disabled={!product.disponible}>Comprar</button>
          </div> */}
      </div>
      <button> $ {product.price}</button>
    </div>
  );
};

export default Card;
