import React, { useState } from "react";

const FectchingPost = () => {
  const [products, setProducts] = useState([]);

  console.log("products", products);

  const handSubmit = async () => {
    const res = await fetch("https://fakestoreapi.com/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Product",
        price: 29.99,
        description: "A great new product",
        image: "https://i.pravatar.cc",
        category: "electronics",
      }),
    });
    const response = await res.json();
    setProducts(response);
  };

  return (
    <div>
      <button onClick={handSubmit}>hola</button>
      <div>{products.title}</div>
    </div>
  );
};

export default FectchingPost;
