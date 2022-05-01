import React from "react";
import PropsTypes from "prop-types";

import Modal from "../modal/modal";

import styleIngredientDetails from "./ingredient-details.module.css";

const IngredientDetails = ({
  modalIngredient,
  closeModalIngredient
}) => {

  return (
    <Modal name="Детали ингредиента" closeModalIngredient={closeModalIngredient}>
      <img className={styleIngredientDetails.image} src={modalIngredient.image} />
      <p className="text text_type_main-medium pt-4">{modalIngredient.name}</p>
      <div className={`${styleIngredientDetails.container} pt-8`}>
        {/* Сделать потом компонентом */}
        <div
          className="text text_type_main-default text_color_inactive"
        >
          <p className={`${styleIngredientDetails.item}pb-2`}>Калории,ккал</p>
          <span className="text text_type_digits-default">{modalIngredient.calories}</span>
        </div>
        <div
          className="text text_type_main-default text_color_inactive"
        >
          <p className={`${styleIngredientDetails.item}pb-2`}>Белки, г</p>
          <span className="text text_type_digits-default">{modalIngredient.proteins}</span>
        </div>
        <div
          className="text text_type_main-default text_color_inactive"
        >
          <p className={`${styleIngredientDetails.item}pb-2`}>Жиры, г</p>
          <span className="text text_type_digits-default">{modalIngredient.fat}</span>
        </div>
        <div
          className="text text_type_main-default text_color_inactive"
        >
          <p className={`${styleIngredientDetails.item}pb-2`}>Углеводы, г</p>
          <span className="text text_type_digits-default">{modalIngredient.carbohydrates}</span>
        </div>
      </div>
    </Modal>
  );
};

IngredientDetails.propsTypes = {
  modalIngredient: PropsTypes.arrayOf.isRequired,
  closeModalIngredient: PropsTypes.func,
};

export default IngredientDetails;
