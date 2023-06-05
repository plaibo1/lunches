import { useState } from "react";
import { AgreeBanner } from "../AgreeBanner/AgreeBanner";
import { Modal } from "../Modal/Modal";
import styles from "./NothingToLunchBtn.module.scss";

export const NothingToLunchBtn = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <>
      <button onClick={openModal} className={styles.nothingToLunchBtn}>
        Обеда не будет 😭
      </button>
      <Modal modalStatus={modalStatus} setModalStatus={setModalStatus}>
        <AgreeBanner closeModal={closeModal} />
      </Modal>
    </>
  );
};
