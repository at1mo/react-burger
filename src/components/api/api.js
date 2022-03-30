import { config } from "../../utils/constants";

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
};

export const getDataBurgersFromServer = () => {
  return fetch(`${config.baseUrl}/ingredients`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const getNumberOrder = (listId) => {
  return fetch(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      "ingredients": listId,
    }),
  }).then(checkResponse);
};


