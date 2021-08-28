import axios from "axios";
import React, { useContext, useEffect } from "react";
import { ProductContext } from "./store/products";
import {
  SelecredProdcutProvider,
  SelectedProdcutContext,
} from "./store/selectedProduct";

function Products(props) {
  console.log("products");
  const context = useContext(ProductContext);
  const { value, dispatch } = context;
  const onClickhandler = async () => {
    const result = await axios.get("https://fakestoreapi.com/products/");

    if (value.products) {
      dispatch({
        type: "DEFAULT",
        paylaod: result.data,
      });
    } else {
      dispatch({
        type: "SET PRODUCTS",
        paylaod: result.data,
      });
    }
  };
  return (
    <div>
      <div>
        {value.products
          ? value.products.map((element, index) => {
              return <div key={index}>sam</div>;
            })
          : "...loading"}
      </div>
      <div>prodcuts</div>
      <button onClick={onClickhandler}>click here</button>
    </div>
  );
}

function SelectedProcut(props) {
  console.log("selected product");
  const context = useContext(SelectedProdcutContext);
  const { value, dispatch } = context;
  useEffect(() => {
    console.log("mounted and updated");
  }, [context]);
  const onClickhandler = () => {
    dispatch({
      type: "SELECT PRODUCTS",
      paylaod: 1,
    });
  };
  return (
    <div>
      <div>select product</div>
      <button onClick={onClickhandler}>click here</button>
      <p>{value.selectedProduct ? value.selectedProduct : ""}</p>
    </div>
  );
}

function Child1(props) {
  console.log("child 1");
  return (
    <div>
      <div>child1</div>
    </div>
  );
}
function Child2(props) {
  console.log("child 2");
  return <div>child2</div>;
}

function Child3(props) {
  console.log("child 3");
  const onClickhandler = () => {
    dispatch({
      type: "SELECT PRODUCTS",
      paylaod: 1,
    });
  };
  const context = useContext(SelectedProdcutContext);
  const { value, dispatch } = context;
  return (
    <div>
      <button onClick={onClickhandler}>click here</button>
      <p>{value.selectedProduct ? value.selectedProduct : ""}</p>
    </div>
  );
}

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("mounted");
  }

  componentDidUpdate() {
    console.log("updated");
  }
  render() {
    console.log("class");

    return (
      <SelectedProdcutContext.Consumer>
        {value => <div>{value.value.selectedProduct}</div>}
      </SelectedProdcutContext.Consumer>
    );
  }
}

function App(props) {
  console.log("app");
  return (
    <div>
      <Products />
      <SelectedProcut />
      <Child1 />
      <Child2 />
      <Child3 />
      <ChildClass />
    </div>
  );
}

export default App;
