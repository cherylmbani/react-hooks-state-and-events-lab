import React, {useState} from "react";

function Item({ name, category}) {
  const[isInCart, setIsInCart]=useState(false);
  function toggleAddRemove(){
    setIsInCart(!isInCart);
  }
  const liClass=isInCart?"in-cart":"";
  const buttonText=isInCart?"Remove From Cart":"Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleAddRemove}>{buttonText}</button>
    </li>
  );
}

export default Item;
