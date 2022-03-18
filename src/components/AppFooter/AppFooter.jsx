import React from "react";
import PropsTypes from "prop-types";

const AppFooter = ({ author }) => {
  const now = new Date();
  return (
    <footer>
      <p className="text_type_main-default" style={{ textAlign: "left" }}>
        &copy;{` ${now.getFullYear()} ${author}`}
      </p>
    </footer>
  );
};

AppFooter.propsTypes = {
  author: PropsTypes.string.isRequired,
};

export default AppFooter;
