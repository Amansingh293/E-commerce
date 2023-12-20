import React from "react";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Slices/cart";
import Card from "./Card";

export default function Home() {
  const [products, setProducts] = useState([]);

  let dispatch = useDispatch();
  // console.log(dispatch);
  const addHandler = (product) => {
    dispatch(add(product));
  };

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <div className="cardContainer">
      {products.length === 0 ? (
        <div style={{ fontSize: "29px" }}>Loading....</div>
      ) : (
        products.map((product) => (
          <Card product={product} addHandler={addHandler} />
        ))
      )}
    </div>
  );
}
