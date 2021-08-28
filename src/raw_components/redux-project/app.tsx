import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ProductListing } from "./product";
import ProductDetail from "./productDetail";

function Child1(props) {
  console.log("child1");
  return <div>child1</div>;
}
function Child2(props) {
  console.log("child2");
  return <div>child2</div>;
}
function App() {
  return (
    <div>
      <ProductListing />
      <ProductDetail />
      <Child1></Child1>
      <Child2></Child2>
    </div>
  );
}

export default App;
