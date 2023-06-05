import React from "react";
import logo from "../../img/logo.svg";
import { getDate } from "../../utils/getDate";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="lunch logo" />
      <div className={styles.title}>Что сегодня на обед?</div>
      <div className={styles.date}>{getDate()}</div>
    </div>
  );
};
