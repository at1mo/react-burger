import React from "react";
import PriceSubtract from "../PriceSubtract/PriceSubtract";

import styleItemBurger from "./ItemBurger.module.css";

const ItemBurger = (props) => {
  return (
    <div className={styleItemBurger.container}>
      <img className={styleItemBurger.image} src="http://via.placeholder.com/240x120" alt={props.image} />
      <PriceSubtract price="20" space="pt-1 pb-1" />
      <p className={styleItemBurger.text}>Краторная булка N-200i</p>
    </div>
  );
};

export default ItemBurger;
