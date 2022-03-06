import React from "react";
import styleBurgerIngredients from "./BurgerIngredients.module.css";

const BurgerIngredients = () => {
  return (
    <section className={styleBurgerIngredients.section}>
      <ul style={{listStyle: "none"}}>
        <li style={{width: 536, height: 80, backgroundColor: "green", display: "flex"}}>
          <div style={{width: 80, height: 40, backgroundColor: "teal"}} />
          <p>Краторная булка N-200i (верх)</p>
          <div style={{display: "flex"}}>
              <span>20</span>
              <div style={{width: 22, height: 22, backgroundColor: "yellow"}} />
          </div>
          <div style={{width: 20, height: 22, backgroundColor: "teal"}} />
        </li>

        <li style={{width: 536, height: 80, backgroundColor: "green", display: "flex"}}>
          <div style={{width: 80, height: 40, backgroundColor: "teal"}} />
          <p>Краторная булка N-200i (верх)</p>
          <div style={{display: "flex"}}>
              <span>20</span>
              <div style={{width: 22, height: 22, backgroundColor: "yellow"}} />
          </div>
          <div style={{width: 20, height: 22, backgroundColor: "teal"}} />
        </li>
      </ul>
    </section>
  );
};

export default BurgerIngredients;
