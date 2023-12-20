import React from "react";


const Card = ({product , addHandler}) => {
  return (
    <div key={product.id} className="card">
      <img src={product.image} className="cardImage" alt=""></img>
      <p className="cardTitle">{product.title}</p>
      <p className="cardPrice">Rs: {product.price * 100}</p>
      <button className="addBtn" onClick={()=>addHandler(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default Card;
