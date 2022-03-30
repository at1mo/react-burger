import React from "react";
import PropsTypes from "prop-types";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styleTabs from "./tabs.module.css"

const Tabs = () => {
  const [current, setCurrent] = React.useState("Булки");
  return (
    <div className={styleTabs.container}>
      <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

export default Tabs;
