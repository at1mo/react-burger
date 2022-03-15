import React from "react";

import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

import styleApp from "./App.module.css";

const App = () => {
  return (
    <>
      <ModalOverlay>
        <Modal>
          <h2 style={{textShadow: "0 0 6px #4C4CFF,0 0 12px #4C4CFF"}} className="text text_type_digits-large pb-8">034536</h2>
          <p className="text text_type_main-medium pb-15">идентификатор заказа</p>
          <img style={{maxWidth: 120, maxHeight: 120, margin: "0 auto"}} src="https://dummyimage.com/120x120/fff/aaa" />
          <p className="text text_type_main-default pt-15 pb-2">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive pb-15">Дождитесь готовности на орбитальной станции</p>
        </Modal>
      </ModalOverlay>

{/*       <ModalOverlay>
        <Modal name="Детали ингредиента">
          <img style={{maxWidth: 480, maxHeight: 240, margin: "0 auto"}} src="https://dummyimage.com/480x240/fff/aaa" />
          <p className="text text_type_main-medium pt-4">Биокотлета из марсианской Магнолии</p>
          <div className="pt-8" style={{display: "grid", columnGap: 20, gridTemplateColumns: "repeat(4, 1fr)"}}>
            <div className="text text_type_main-default text_color_inactive" item="">
              <p className="pb-2" style={{margin: 0}}>Калории,ккал</p>
              <span className="text text_type_digits-default">244,4</span>
            </div>
            <div className="text text_type_main-default text_color_inactive" item="">
              <p className="pb-2" style={{margin: 0}}>Калории,ккал</p>
              <span className="text text_type_digits-default">244,4</span>
            </div>
            <div className="text text_type_main-default text_color_inactive" item="">
              <p className="pb-2" style={{margin: 0}}>Калории,ккал</p>
              <span className="text text_type_digits-default">244,4</span>
            </div>
            <div className="text text_type_main-default text_color_inactive" item="">
              <p className="pb-2" style={{margin: 0}}>Калории,ккал</p>
              <span className="text text_type_digits-default">244,4</span>
            </div>
          </div>
        </Modal>
      </ModalOverlay> */}

      <AppHeader />

      <main className={styleApp.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>

      <footer>
        <p className="text_type_main-default" style={{ textAlign: "left" }}>
          &copy; 2022. A. Timokhin
        </p>
      </footer>
    </>
  );
};

export default App;
