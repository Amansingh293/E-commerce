import React from "react";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Slices/cart";


export default function Home() {

  const [products, setProducts] = useState([]);

  let dispatch = useDispatch();
  // console.log(dispatch);
  const addHandler = (product)=>{
    dispatch(add(product));
  } 

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="cardContainer">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} className="cardImage" alt=""></img>
          <p className="cardTitle">{product.title}</p>
          <p className="cardPrice">Rs: {product.price*100}</p>
          <button className="addBtn" onClick={()=> addHandler(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
