import React, { useRef } from "react";
import PropsTypes from "prop-types";

import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

import { deleteFillingAction } from "../../services/actions/constructor";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleItemBurgerConstructors from "./item-burger-constructor.module.css";

const ItemBurgerConstructor = ({ item, index, moveItem }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{ isDrag }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? 0.5 : 1;

  const [, dropRef] = useDrop({
    accept: "item",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const onDelete = () => {
    dispatch(deleteFillingAction(index));
  };

  const dndRef = dragRef(dropRef(ref));

  return (
    <div
      ref={dndRef}
      className={`${styleItemBurgerConstructors.item} pt-4`}
      style={{ opacity }}
    >
      <div className={styleItemBurgerConstructors.drag__item}>
        <DragIcon />
      </div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={onDelete}
      />
    </div>
  );
};

ItemBurgerConstructor.propsTypes = {
  item: PropsTypes.object.isRequired,
  index: PropsTypes.number.isRequired,
  moveItem: PropsTypes.func,
};

export default ItemBurgerConstructor;
