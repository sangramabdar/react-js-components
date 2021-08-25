import { Action, Actions, StoreContextType } from "../storecontext";

type ActionTypeForSet = "SET_PRODUCTS";

function set(state: StoreContextType<any>, action: Action<Actions>) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        value: {
          ...state.value,
          products: action.payload,
        },
      };

    default:
      break;
  }
}

const setProducts = (products): Action<ActionTypeForSet> => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export { set, ActionTypeForSet, setProducts };
