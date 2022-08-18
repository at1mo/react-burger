import React, { FC, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "../../utils/hooks";

import { deleteFillingAction } from "../../services/actions/constructor";

import { TIngredient } from "../../utils/types";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styleItemBurgerConstructors from "./item-burger-constructor.module.css";

interface IItemBurgerConstructor {
  item: TIngredient;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

const ItemBurgerConstructor: FC<IItemBurgerConstructor> = ({
  item,
  index,
  moveItem,
}) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDrag }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? 0.5 : 1;

  const [, dropRef] = useDrop<
    { id: number | string; index: number },
    void,
    any
  >({
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
      if (!clientOffset) return;
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

  dragRef(dropRef(ref));

  return (
    <div
      ref={ref}
      className={`${styleItemBurgerConstructors.item} pt-4`}
      style={{ opacity }}
    >
      <div className={styleItemBurgerConstructors.drag__item}>
        <DragIcon type="primary" />
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

export default ItemBurgerConstructor;
