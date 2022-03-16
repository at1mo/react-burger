import React from "react";

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

export default AppFooter;
