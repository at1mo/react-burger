export type TStatusText = {
  name: "Выполнен" | "Готовится" | "Создан" | "Отменен" | "";
  style: {
    color: string;
  };
};

export type TConfig = {
  readonly baseUrl?: string;
  readonly method?: "POST" | "GET" | "PATCH";
  readonly headers: {
    "Content-Type": string;
    Authorization?: string;
  };
  readonly body?: string;
};

export type TIngredient = {
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: string;
  readonly __v: number;
  readonly _id: string;
};

export interface IDataBurgers {
  readonly success: boolean;
  readonly data: Array<TIngredient>;
}

export type TResponsePasswordSuccess = {
  readonly success: boolean;
  readonly message: string;
};

export type TUser = {
  readonly email: string;
  readonly name: string;
};

export type TResponseToken = {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly success: boolean;
};

export type TResponseLoginSuccess = TResponseToken & {
  user: TUser;
};

export type TResponseUser = {
  success: boolean;
  user: TUser;
};

type TOwner = TUser & {
  readonly createdAt: string;
  readonly updatedAt: string;
};

export type TOrder = {
  readonly createdAt: string;
  readonly ingredients: Array<TIngredient>;
  readonly name: string;
  readonly number: number;
  readonly owner: TOwner;
  readonly price: number;
  readonly status: string;
  readonly updatedAt: string;
  readonly _id: string;
};

export type TWsOrders = {
  readonly createdAt: string;
  readonly ingredients: Array<string>;
  readonly name: string;
  readonly number: number;
  readonly status: string;
  readonly updatedAt: string;
  readonly _id: string;
};

export type TResponseOrder = {
  readonly name: string;
  readonly order: TOrder;
  readonly success: boolean;
};

export type TRedirectHistory = () => void;

export type TResetPasswordForm = {
  password: string;
  code: string;
};

export type TLoginForm = {
  email: string;
  password: string;
};

export type TRegisterForm = TLoginForm & {
  name: string;
};

export interface IOdersData {
  orders: Array<TWsOrders>;
  total: number;
  totalToday: number;
}
