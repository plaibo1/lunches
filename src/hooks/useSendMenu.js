import { useState } from "react";
import { sendMenu } from "../utils/query";

export const useSendMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendData = async (data) => {
    setIsLoading(true);
    try {
      const res = await sendMenu(data);
      if (res.status === 201) {
        setIsSuccess(true);
      }
    } catch (err) {
      setIsError(true);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendData,
    isLoading,
    setIsLoading,
    isSuccess,
    setIsSuccess,
    isError,
    setIsError,
  };
};
