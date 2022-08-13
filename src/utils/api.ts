import { config } from "./constants";
import { getCookie, setCookie } from "./cookie";
import {
  IDataBurgers,
  TConfig,
  TResponseLoginSuccess,
  TResponsePasswordSuccess,
} from "./types";

const checkResponse = <T>(response: Response): Promise<T> => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

export const getDataBurgersFromServer = async () => {
  return await fetch(`${config.baseUrl}/ingredients`, {
    headers: config.headers,
  }).then((res) => checkResponse<IDataBurgers>(res));
};

export const getNumberOrder = async (listId: string) => {
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

export const forgotPasswordRequest = async (email: string) => {
  return await fetch(`${config.baseUrl}/password-reset`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email: email,
    }),
  }).then((res) => checkResponse<TResponsePasswordSuccess>(res));
};

export const resetPasswordRequest = async ({
  password,
  code,
}: {
  password: string;
  code: string;
}) => {
  return await fetch(`${config.baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  }).then((res) => checkResponse<TResponsePasswordSuccess>(res));
};

export const loginRequest = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await fetch(`${config.baseUrl}/auth/login`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => checkResponse<TResponseLoginSuccess>(res));
};

export const registerRequest = async ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  return await fetch(`${config.baseUrl}/auth/register`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  }).then((res) => checkResponse<TResponseLoginSuccess>(res));
};

export const logoutRequest = async () => {
  return await fetch(`${config.baseUrl}/auth/logout`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      token: localStorage.refreshToken,
    }),
  }).then((res) => checkResponse<TResponsePasswordSuccess>(res));
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
    .then((refreshData: any) => {
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

export const updateDataUserRequest = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
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

export async function fetchWithRefresh<T>(
  url: string,
  options: TConfig
): Promise<T> {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err: any) {
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
