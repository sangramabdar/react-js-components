import { createStore } from "redux";
import { reducers } from "./reducers";

export type State = {
  allProducts: any;
  selectedProduct: any;
};

const storeOfRedux = createStore(reducers, {});

export default storeOfRedux;
