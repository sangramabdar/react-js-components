export type ActionForSET = "SET PRODUCTS";

export type ActionForSELECT = "SELECTED PRODUCT";

export type Action<T> = {
  type: T;
  payload: any;
};
