import React, { useContext, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, setProducts } from "./actions/productActions";
import { State } from "./store";

function ProductDetail(props) {
  console.log("product detail");
  const state = useSelector<State>(state => state.selectedProduct);
  const dispatch = useDispatch();
  console.log(state);
  const onClickhandler = () => {
    fetch("https://fakestoreapi.com/products/1")
      .then(res => res.json())
      .then(json => {
        dispatch(selectedProduct([json]));
      });
  };

  return (
    <div>
      <div>productDetail</div>
      <button onClick={onClickhandler}>click here</button>
    </div>
  );
}

export default ProductDetail;
