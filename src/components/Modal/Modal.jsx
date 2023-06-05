import React from "react";
import styles from "./Modal.module.scss";

export const Modal = ({ modalStatus, setModalStatus, children }) => {
  return (
    <div
      className={
        modalStatus ? `${styles.modal} ${styles.active}` : styles.modal
      }
      onMouseDown={() => setModalStatus(false)}
    >
      <div
        className={
          modalStatus
            ? `${styles.modal__content} ${styles.active}`
            : styles.modal__content
        }
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
