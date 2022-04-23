import React, { useRef } from "react";
import PropsTypes from "prop-types";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styleTabs from "./tabs.module.css";

const Tabs = () => {
  const [current, setCurrent] = React.useState("bun");

  const handleClickTab = (e) => {
    setCurrent(e);
    const sectionScroll = document.querySelector(`#${e}`);
    sectionScroll.scrollIntoView({block: "start", behavior: 'smooth'});
  };

  return (
    <div className={styleTabs.container}>
      <Tab value="bun" active={current === "bun"} onClick={handleClickTab}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={handleClickTab}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={handleClickTab}>
        Начинки
      </Tab>
    </div>
  );
};

export default Tabs;
