import { useSendMenu } from "../../hooks/useSendMenu";
import { Alert } from "../Alert/Alert";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import styles from "./AgreeBanner.module.scss";

export const AgreeBanner = ({ closeModal }) => {
  const { sendData, isSuccess, isError, isLoading, setIsError, setIsSuccess } =
    useSendMenu();

  const cancelLunch = async () => {
    const data = {
      first: 0,
      second: 0,
      salad: 0,
    };

    await sendData(data);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <span className={styles.title}>Вы уверенны?</span>

        <div className={styles.buttonsRow}>
          <button onClick={cancelLunch}>
            {isLoading ? <LoadingIcon /> : "Да"}
          </button>
          <button onClick={closeModal}>Нет</button>
        </div>
      </div>

      {isError && <Alert setStatus={setIsError} type="error" />}
      {isSuccess && (
        <Alert
          setStatus={setIsSuccess}
          type="success"
          message="Доставлено! Спасибо, что предупредили"
        />
      )}
    </div>
  );
};
