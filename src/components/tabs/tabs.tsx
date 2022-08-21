import React, { FC } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styleTabs from "./tabs.module.css";

interface ITabs {
  statusTab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: FC<ITabs> = ({ statusTab, setTab }) => {
  const handleClickTab = (e: string) => {
    setTab(e);
    const sectionScroll = document.querySelector(`#${e}`);
    sectionScroll?.scrollIntoView({ block: "start", behavior: "smooth" });
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

export default Tabs;
