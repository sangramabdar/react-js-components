import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import { ProductListing } from "./product";
import ProductDetail from "./productDetail";

function Child1(props) {
  console.log("child");
  return <div>child1</div>;
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/product" exact component={ProductListing} />
          <Route path="/:productId" exact component={ProductDetail} />
        </Switch>
      </Router>
      <Child1 />
    </div>
  );
}

export default App;
