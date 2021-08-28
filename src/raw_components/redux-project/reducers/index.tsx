import { combineReducers } from "redux";
import { selectReducer, setReducer } from "./prodcut-reducer";

export const reducers = combineReducers({
  allProducts: setReducer,
  selectedProduct: selectReducer,
});
