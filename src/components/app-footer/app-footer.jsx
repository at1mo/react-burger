import React from "react";
import PropsTypes from "prop-types";

import styleFooter from "./app-footer.module.css";

const AppFooter = ({ author }) => {
  const now = new Date();
  return (
    <footer className={styleFooter.footer}>
      <p className={`${styleFooter.text} text_type_main-default`}>
        &copy;{` ${now.getFullYear()} ${author}`}
      </p>
    </footer>
  );
};

AppFooter.propsTypes = {
  author: PropsTypes.string.isRequired,
};

export default AppFooter;
