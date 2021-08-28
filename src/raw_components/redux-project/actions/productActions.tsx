import { ACtionTypeForSelect } from "../../project_store/store/reducers/selectReducer";
import { ActionTypeForSet } from "../../project_store/store/reducers/setReducer";
import { Action } from "./action-types";


export function setProducts(payload): Action<ActionTypeForSet> {
  return {
    type: "SET_PRODUCTS",
    payload: payload,
  };
}

export function selectedProduct(payload): Action<ACtionTypeForSelect> {
  return {
    type: "SELECTED_PRODUCT",
    payload: payload,
  };
}
