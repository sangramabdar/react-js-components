import * as React from "react";
import { useReducer } from "react";

type ActionType = "SET PRODUCTS" | "DEFAULT";

type Action<T> = {
  type: T;
  paylaod: any;
};

type ProdcutContextType = {
  value: any;
  dispatch: (action: Action<ActionType>) => void;
};

const initialState: ProdcutContextType = {
  value: {
    products: null,
  },
  dispatch: (action: Action<ActionType>) => {},
};

const ProductContext = React.createContext<ProdcutContextType>(initialState);

function reducer(state: ProdcutContextType, action: Action<ActionType>) {
  switch (action.type) {
    case "SET PRODUCTS":
      return {
        ...state,
        value: {
          ...state.value,
          products: action.paylaod,
        },
      };

    default:
      return state;
  }
}

function ProductProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(<div></div>);
  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
