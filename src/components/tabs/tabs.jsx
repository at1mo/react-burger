import React from "react";
import PropsTypes from "prop-types";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styleTabs from "./tabs.module.css";

const Tabs = ({ statusTab, setTab }) => {
  const handleClickTab = (e) => {
    setTab(e);
    const sectionScroll = document.querySelector(`#${e}`);
    sectionScroll.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className={styleTabs.container}>
      <Tab value="bun" active={statusTab === "bun"} onClick={handleClickTab}>
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={statusTab === "sauce"}
        onClick={handleClickTab}
      >
        Соусы
      </Tab>
      <Tab value="main" active={statusTab === "main"} onClick={handleClickTab}>
        Начинки
      </Tab>
    </div>
  );
};

Tabs.propsTypes = {
  statusTab: PropsTypes.string.isRequired,
  setTab: PropsTypes.func,
};

export default Tabs;
