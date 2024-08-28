import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Principal = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const response = await res.json();
    setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Principal</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Principal;
