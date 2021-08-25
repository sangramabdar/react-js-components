import React, { useContext, useEffect } from "react";
import { StoreContext } from "./store/storecontext";
import style from "./index.module.css";
import { Product } from "./product";
import axios from "axios";
import { selectedProduct } from "./store/reducers/selectReducer";

function ProductDetail(props) {
  console.log("product detail");

  const storeContext = useContext(StoreContext);
  const { productId } = props.match.params;
  const { value, dispatch } = storeContext;

  const fetchingProduct = async (id: number) => {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(result);
    dispatch({
      reducer: "SELECT",
      action: selectedProduct(result.data),
    });
  };

  useEffect(() => {
    if (value.selectedProduct == null) {
      fetchingProduct(productId);
    } else {
      return;
    }
  }, []);

  const Success = () => {
    let { id, title, price, description, category, image } =
      value.selectedProduct;
    return (
      <Product
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        key={id}
      />
    );
  };

  return (
    <div className={style.container}>
      {value.selectedProduct ? <Success></Success> : "...loading"}
    </div>
  );
}

export default ProductDetail;
