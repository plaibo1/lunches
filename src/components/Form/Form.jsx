import { useForm } from "react-hook-form";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
import { Alert } from "../Alert/Alert";
import { useSendMenu } from "../../hooks/useSendMenu";
import styles from "./Form.module.scss";

export const Form = () => {
  const { sendData, isSuccess, isError, isLoading, setIsSuccess, setIsError } =
    useSendMenu();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await sendData(data);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <span>Первое</span>
          <input
            className={errors.first ? styles.errorInput : ""}
            placeholder={errors.first ? "Введите первое" : ""}
            {...register("first", {
              required: true,
              maxLength: { value: 50, message: "Максимум 50 символов" },
            })}
            type="text"
          />
          {errors.first && (
            <div className={styles.errorText}>{errors.first.message}</div>
          )}
        </label>
        <label className={styles.label}>
          <span>Второе</span>
          <input
            className={errors.second ? styles.errorInput : ""}
            placeholder={errors.second ? "Введите второе" : ""}
            {...register("second", {
              required: true,
              maxLength: { value: 50, message: "Максимум 50 символов" },
            })}
            type="text"
          />

          {errors.second && (
            <div className={styles.errorText}>{errors.second.message}</div>
          )}
        </label>
        <label className={styles.label}>
          <span>Салат</span>
          <input
            className={errors.salad ? styles.errorInput : ""}
            placeholder={errors.salad ? "Введите салат" : ""}
            {...register("salad", {
              required: true,
              maxLength: { value: 50, message: "Максимум 50 символов" },
            })}
            type="text"
          />

          {errors.salad && (
            <div className={styles.errorText}>{errors.salad.message}</div>
          )}
        </label>

        {errors.exampleRequired && <span>This field is required</span>}

        <button
          disabled={isLoading}
          className={styles.submitButton}
          type="submit"
        >
          {isLoading ? <LoadingIcon /> : "Отправить"}
        </button>
      </form>

      {isError && <Alert setStatus={setIsError} type="error" />}
      {isSuccess && <Alert setStatus={setIsSuccess} type="success" />}
    </>
  );
};
