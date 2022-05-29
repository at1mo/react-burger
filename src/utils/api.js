import { config } from "./constants";

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
      ingredients: listId,
    }),
  }).then(checkResponse);
};

export const forgotPasswordRequest = (email) => {
  return fetch(`${config.baseUrl}/password-reset`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email: email,
    }),
  }).then(checkResponse);
};

export const resetPasswordRequest = ({ password, code }) => {
  return fetch(`${config.baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  }).then(checkResponse);
};
