import { StoreContextType, Action, Actions } from "../storecontext";
import { ActionTypeForSet } from "./setReducer";

type ACtionTypeForSelect = "SELECTED_PRODUCT";

function select(state: StoreContextType<any>, action: Action<Actions>) {
  switch (action.type) {
    case "SELECTED_PRODUCT":
      return {
        ...state,
        value: {
          ...state.value,
          selectedProduct: action.payload,
        },
      };
  }
}

const selectedProduct = (product): Action<ACtionTypeForSelect> => {
  return {
    type: "SELECTED_PRODUCT",
    payload: product,
  };
};

export { select, ACtionTypeForSelect, selectedProduct };
