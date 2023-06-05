import React, { useEffect } from "react";
import styles from "./Alert.module.scss";

export const Alert = ({ setStatus, type = "success", message = null }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const closeAlert = () => {
    setStatus(false);
  };

  const alertTypes = {
    success: {
      styles: styles.alert,
      text: "Меню успешно отправлено!",
    },
    error: {
      styles: `${styles.alert} ${styles.alertError}`,
      text: "Ошибка! Что то пошло не так :(",
    },
  };

  return (
    <div onClick={closeAlert} className={alertTypes[type].styles}>
      {message || alertTypes[type].text}
    </div>
  );
};
