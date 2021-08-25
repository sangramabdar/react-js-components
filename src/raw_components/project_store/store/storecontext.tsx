import React, { useReducer } from "react";
import { ACtionTypeForSelect, select } from "./reducers/selectReducer";
import { ActionTypeForSet, set } from "./reducers/setReducer";

type ReducerType = "SET" | "SELECT";

type Reducer<T, S> = {
  reducer: T;
  action: S;
};

type Action<T> = {
  type: T;
  payload: any;
};

type Actions = ActionTypeForSet | ACtionTypeForSelect;

type StoreContextType<T> = {
  value: T;
  dispatch: (action: Reducer<ReducerType, Action<Actions>>) => void;
};

let initialStore: StoreContextType<any> = {
  value: {
    products: null,
    selectedProduct: null,
  },
  dispatch: (action: Reducer<ReducerType, Action<Actions>>) => {},
};

let StoreContext = React.createContext<StoreContextType<any>>(initialStore);

function reducer(
  state: StoreContextType<any> = initialStore,
  config: Reducer<ReducerType, Action<Actions>>
): StoreContextType<any> {
  switch (config.reducer) {
    case "SET": {
      return set(state, config.action);
    }

    case "SELECT": {
      return select(state, config.action);
    }
  }
}

function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialStore);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext, StoreContextType, Actions, Action };
