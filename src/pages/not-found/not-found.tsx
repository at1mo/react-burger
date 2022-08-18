import React, { FC } from "react";

import styles from "./not-found.module.css";

export const NotFound404: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Упс! Ошибка 404</h1>
          <p>Запрашиваемая вами страница не существует</p>
        </div>
      </div>
    </div>
  );
};
