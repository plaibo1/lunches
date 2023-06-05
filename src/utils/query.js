import { getDate } from "./getDate";

export const sendMenu = async (data) => {
  const resultData = { ...data, date: getDate() };

  const rawResponse = await fetch(
    `${process.env.REACT_APP_BASE_URL}/menu/add`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resultData),
    }
  );

  return rawResponse;
};
