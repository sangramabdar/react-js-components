import { ACtionTypeForSelect } from "../../project_store/store/reducers/selectReducer";
import { ActionTypeForSet } from "../../project_store/store/reducers/setReducer";
import { Action } from "../actions/action-types";

export function setReducer(state = {}, action: Action<ActionTypeForSet>) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return {
        ...state,
        products: [],
      };
  }
}

export function selectReducer(state = {}, action: Action<ACtionTypeForSelect>) {
  switch (action.type) {
    case "SELECTED_PRODUCT":
      return {
        ...state,
        selectProduct: [...action.payload],
      };

    default:
      return {
        ...state,
      };
  }
}
