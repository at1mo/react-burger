import React from "react";
import PropsTypes from "prop-types";

import Modal from "../modal/modal";

import styleIngredientDetails from "./ingredient-details.module.css";

const IngredientDetails = ({
  modalIngredient,
  setModalIngredient
}) => {
  return (
    <Modal name="Детали ингредиента" modalActive={modalIngredient.status} setModalActive={setModalIngredient}>
      <img className={styleIngredientDetails.image} src={modalIngredient.item.image} />
      <p className="text text_type_main-medium pt-4">{modalIngredient.item.name}</p>
      <div className={`${styleIngredientDetails.container} pt-8`}>
        {/* Сделать потом компонентом */}
        <div
          className="text text_type_main-default text_color_inactive"
        >
          <p className={`${styleIngredientDetails.item}pb-2`}>Калории,ккал</p>
          <span className="text text_type_digits-default">{modalIngredient.item.calories}</span>
        </div>
        <div
          className="text text_type_main-default text_color_inactive"
        >
          <p className={`${styleIngredientDetails.item}pb-2`}>Белки, г</p>
          <span className="text text_type_digits-default">{modalIngredient.item.proteins}</span>
        </div>
        <div
          className="text text_type_main-default text_color_inactive"
        >
          <p className={`${styleIngredientDetails.item}pb-2`}>Жиры, г</p>
          <span className="text text_type_digits-default">{modalIngredient.item.fat}</span>
        </div>
        <div
          className="text text_type_main-default text_color_inactive"
        >
          <p className={`${styleIngredientDetails.item}pb-2`}>Углеводы, г</p>
          <span className="text text_type_digits-default">{modalIngredient.item.carbohydrates}</span>
        </div>
      </div>
    </Modal>
  );
};

IngredientDetails.propsTypes = {
  modalIngredient: PropsTypes.arrayOf.isRequired,
  setModalIngredient: PropsTypes.func,
};

export default IngredientDetails;
