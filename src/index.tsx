import ReactDOM from "react-dom";
import * as React from "react";
import App from "./raw_components/project_store/App";
import "./index.custom.css";
import Store from "./raw_components/project_store/store/store";

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);
