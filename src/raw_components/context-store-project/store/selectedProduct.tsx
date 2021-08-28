import * as React from "react";
import { useReducer } from "react";

type ActionType = "SELECT PRODUCTS";

type Action<T> = {
  type: T;
  paylaod: any;
};

type SelectedContextType = {
  value: any;
  dispatch: (action: Action<ActionType>) => void;
};

const initialState: SelectedContextType = {
  value: {
    selectedProduct: 0,
  },
  dispatch: (action: Action<ActionType>) => {},
};

const SelectedProdcutContext =
  React.createContext<SelectedContextType>(initialState);

function reducer(state: SelectedContextType, action: Action<ActionType>) {
  switch (action.type) {
    case "SELECT PRODUCTS":
      return {
        ...state,
        value: {
          ...state.value,
          selectedProduct: state.value.selectedProduct + action.paylaod,
        },
      };

    default:
      return state;
  }
}

function SelecredProdcutProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SelectedProdcutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SelectedProdcutContext.Provider>
  );
}

export { SelecredProdcutProvider, SelectedProdcutContext };
