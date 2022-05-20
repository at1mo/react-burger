import React from "react";

import stylePersonalCabiner from "./personal-cabinet.module.css";

import Profile from "../profile/profile";
import PersonalMenu from "../personal-menu/personal-menu";

const PersonalCabiner = () => {
  return (
    <div className={`${stylePersonalCabiner.container}`}>
      <PersonalMenu />
      <Profile />
    </div>
  );
};

export default PersonalCabiner;
