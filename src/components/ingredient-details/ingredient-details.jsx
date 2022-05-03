import React from "react";
import PropsTypes from "prop-types";

import ItemDetails from "../item-details/item-details";
import Modal from "../modal/modal";

import styleIngredientDetails from "./ingredient-details.module.css";

const IngredientDetails = ({ modalIngredient, closeModalIngredient }) => {
  return (
    <Modal name="Детали ингредиента" closeModal={closeModalIngredient}>
      <img
        className={styleIngredientDetails.image}
        src={modalIngredient.image}
      />
      <p className="text text_type_main-medium pt-4">{modalIngredient.name}</p>
      <div className={`${styleIngredientDetails.container} pt-8`}>
        <ItemDetails name={"Калории,ккал"} weight={modalIngredient.calories} />
        <ItemDetails name={"Белки, г"} weight={modalIngredient.proteins} />
        <ItemDetails name={"Жиры, г"} weight={modalIngredient.fat} />
        <ItemDetails name={"Углеводы, г"} weight={modalIngredient.carbohydrates} />
      </div>
    </Modal>
  );
};

IngredientDetails.propsTypes = {
  modalIngredient: PropsTypes.arrayOf.isRequired,
  closeModalIngredient: PropsTypes.func,
};

export default IngredientDetails;
