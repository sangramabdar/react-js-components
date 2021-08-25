import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "./store/storecontext";
import style from "./index.module.css";
import { Link, RouteChildrenProps } from "react-router-dom";
import { setProducts } from "./store/reducers/setReducer";
import { select, selectedProduct } from "./store/reducers/selectReducer";

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

type ProductListingProps = RouteChildrenProps;

function ProductListing(props) {
  console.log("product listing");
  const storeContext = useContext(StoreContext);
  const [error, setError] = useState("");
  const { value, dispatch } = storeContext;

  const fetchingProducts = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");

      dispatch({
        reducer: "SET",
        action: setProducts(result.data),
      });
    } catch (e) {
      console.dir(e);
      setError(e.message);
    }
  };

  useEffect(() => {
    if (value.products == null) {
      fetchingProducts();
    } else {
      return;
    }
  }, []);

  const Success = () => {
    return value.products.map(element => {
      return (
        <Product
          id={element.id}
          title={element.title}
          price={element.price}
          description={element.desciption}
          category={element.category}
          image={element.image}
          key={element.id}
        />
      );
    });
  };

  return (
    <div className={style.container}>
      {error ? error : value.products ? <Success></Success> : "...loading"}
    </div>
  );
}

export { ProductListing, Product };
