import { config } from "./constants";
import { getCookie } from "./cookie";

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
};

export const getDataBurgersFromServer = async () => {
  return await fetch(`${config.baseUrl}/ingredients`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const getNumberOrder = async (listId) => {
  return await fetch(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify({
      ingredients: listId,
    }),
  }).then(checkResponse);
};

export const forgotPasswordRequest = async (email) => {
  return await fetch(`${config.baseUrl}/password-reset`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email: email,
    }),
  }).then(checkResponse);
};

export const resetPasswordRequest = async ({ password, code }) => {
  return await fetch(`${config.baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  }).then(checkResponse);
};

export const loginRequest = async ({ email, password }) => {
  return await fetch(`${config.baseUrl}/auth/login`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(checkResponse);
};

export const registerRequest = async ({ email, password, name }) => {
  return await fetch(`${config.baseUrl}/auth/register`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  }).then(checkResponse);
};

export const logoutRequest = async () => {
  return await fetch(`${config.baseUrl}/auth/logout`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      token: localStorage.refreshToken,
    }),
  }).then(checkResponse);
};

export const tokenRequest = async () => {
  return await fetch(`${config.baseUrl}/auth/token`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      token: localStorage.refreshToken,
    }),
  }).then(checkResponse);
};

export const getDataUserRequest = async () => {
  return await fetch(`${config.baseUrl}/auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then(checkResponse);
};

export const updateDataUserRequest = async ({ name, email, password }) => {
  return await fetch(`${config.baseUrl}/auth/user`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then(checkResponse);
};
