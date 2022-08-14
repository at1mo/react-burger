export type TStatusText = {
  name: "Выполнен" | "Готовится" | "Создан" | "Отменен" | "Неизвестный статус";
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
  readonly data: ReadonlyArray<TIngredient>;
}

export type TResponsePasswordSuccess = {
  readonly success: boolean;
  readonly message: string;
};

type TUser = {
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
  readonly createdAt: string | Date;
  readonly updatedAt: string | Date;
};

type TOrder = {
  readonly createdAt: string | Date;
  readonly ingredients: Array<TIngredient>;
  readonly name: string;
  readonly number: number;
  readonly owner: TOwner;
  readonly price: number;
  readonly status: string;
  readonly updatedAt: string | Date;
  readonly _id: string;
};

export type TResponseOrder = {
  readonly name: string;
  readonly order: TOrder;
  readonly success: boolean;
};
