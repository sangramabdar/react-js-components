import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import style from "./index.custom.css";
import { Link, RouteChildrenProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, setProducts } from "./actions/productActions";
import { CallMergeSharp } from "@material-ui/icons";
import { State } from "./store";

function Product({ id, title, price, description, category, image }) {
  return (
    <div className={style.product}>
      <Link to={`/${id}`}>
        <div>{title}</div>
        <div>{price}</div>
        <div>{description}</div>
        <div>{category}</div>
        <img className={style.product_image} src={image} />
      </Link>
    </div>
  );
}

function ProductListing(props) {
  console.log("product listing");

  const state = useSelector<State>(state => state.allProducts);
  const dispatch = useDispatch();

  console.log(state);

  const onClickhandler = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        dispatch(setProducts(json));
      });
  };
  return (
    <div>
      <div>productlisting</div>
      <button onClick={onClickhandler}>click here</button>
    </div>
  );
}

export { ProductListing, Product };
