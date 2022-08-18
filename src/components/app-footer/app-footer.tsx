import React, { FC } from "react";

import styleFooter from "./app-footer.module.css";

interface IAppFooter {
  author: string;
}

const AppFooter: FC<IAppFooter> = ({ author }) => {
  const now = new Date();
  return (
    <footer className={styleFooter.footer}>
      <p className={`${styleFooter.text} text_type_main-default`}>
        &copy;{` ${now.getFullYear()} ${author}`}
      </p>
    </footer>
  );
};

export default AppFooter;
