import { config } from "./constants";
import { getCookie, setCookie } from "./cookie";

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

export const getDataBurgersFromServer = async () => {
  return await fetch(`${config.baseUrl}/ingredients`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const getNumberOrder = async (listId) => {
  return await fetchWithRefresh(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify({
      ingredients: listId,
    }),
  });
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
  })
    .then(checkResponse)
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      const accessToken = refreshData.accessToken.split("Bearer ")[1];
      const refreshToken = refreshData.refreshToken;
      setCookie("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return refreshData;
    });
};

export const getDataUserRequest = async () => {
  return await fetchWithRefresh(`${config.baseUrl}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updateDataUserRequest = async ({ name, email, password }) => {
  return await fetchWithRefresh(`${config.baseUrl}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  });
};

export async function fetchWithRefresh(url, options) {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (
      err.message === "jwt malformed" ||
      err.message === "jwt expired" ||
      err.message === "Token is invalid"
    ) {
      const refreshData = await tokenRequest();
      options.headers.Authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
}
