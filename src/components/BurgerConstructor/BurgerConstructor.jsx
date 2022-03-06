import React from "react";

import PriceSubtract from "../PriceSubtract/PriceSubtract";

import styleBurgerConstructor from "./BurgerConstructor.module.css";

const BurgerConstructor = () => {
  return (
    <section className={styleBurgerConstructor.section}>
      <h1 className="pl-10">Соберите бургер</h1>
      <nav> {/* Меню */}
        <ul style={{listStyle: "none", display: "flex", justifyContent: "space-around", padding: 0, margin: 0}}>
          <li>
            Булки
          </li>
          <li>
            Соусы
          </li>
          <li>
            Начинки
          </li>
        </ul>
      </nav>
      <section> {/* Секция меню */}
        <h2 className="pl-4">Булки</h2>
        <ul style={{listStyle: "none"}}>
          <li style={{margin: 0}}> {/* itemCard */}
            <div style={{width: 240, height: 120, backgroundColor: "red", margin: 0}} />

            <p>
              Краторная булка N-200i
            </p>
          </li>
          <li style={{margin: 0}}> {/* itemCard */}
            <div style={{width: 240, height: 120, backgroundColor: "red", margin: 0}} />
            <div style={{display: "flex"}}>
              <span>20</span>
              <div style={{width: 22, height: 22, backgroundColor: "yellow"}} />
            </div>
            <p>
              Краторная булка N-200i
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default BurgerConstructor;
