export type TStatusText = {
  name: string;
  style: {
    color: string;
  };
};

export type TConfig = {
  baseUrl?: string;
  method?: "POST" | "GET" | "PATCH";
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
  body?: string;
};

export type TIngredient = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
};

export interface IDataBurgers {
  readonly success: boolean;
  data: ReadonlyArray<TIngredient>;
}

export type TResponsePasswordSuccess = {
  success: boolean;
  message: string;
};

type TUser = {
  email: string;
  name: string;
};

export type TResponseLoginSuccess = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: TUser;
};
