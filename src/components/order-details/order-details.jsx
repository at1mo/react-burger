import React from "react";
import PropsTypes from "prop-types";

import Modal from "../modal/modal";
import doneImagePath from "../../images/done.svg";

import styleOrderDetails from "./order-details.module.css";

const OrderDetails = ({ closeModalOrderDetails, numOrder }) => {
  return (
    <Modal closeModal={closeModalOrderDetails}>
      <h2
        className={`${styleOrderDetails.title} text text_type_digits-large pb-8 pt-4`}
      >
        {numOrder}
      </h2>
      <p className="text text_type_main-medium pb-15">идентификатор заказа</p>
      <img
        className={styleOrderDetails.image}
        src={doneImagePath}
        alt="Готовность"
      />
      <p className="text text_type_main-default pt-15 pb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive pb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </Modal>
  );
};

OrderDetails.propsTypes = {
  closeModalOrderDetails: PropsTypes.func.isRequired,
  numOrder: PropsTypes.number.isRequired,
};

export default OrderDetails;
