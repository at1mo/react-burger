import React, { FC } from "react";

import styleItemDetails from "./item-details.module.css";

interface IItemDetails {
  name: string;
  weight?: number | string;
}

const ItemDetails: FC<IItemDetails> = ({ name, weight }) => {
  return (
    <div className="text text_type_main-default text_color_inactive">
      <p className={`${styleItemDetails.item}pb-2`}>{name}</p>
      <span className="text text_type_digits-default">{weight}</span>
    </div>
  );
};

export default ItemDetails;
