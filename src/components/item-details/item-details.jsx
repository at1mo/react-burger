import React from "react";
import PropsTypes from "prop-types";

import styleItemDetails from "./item-details.module.css";

const ItemDetails = ({ name, weight }) => {
  return (
    <div className="text text_type_main-default text_color_inactive">
      <p className={`${styleItemDetails.item}pb-2`}>{name}</p>
      <span className="text text_type_digits-default">{weight}</span>
    </div>
  );
};

ItemDetails.propsTypes = {
  name: PropsTypes.string.isRequired,
  weight: PropsTypes.number.isRequired,
};

export default ItemDetails;
