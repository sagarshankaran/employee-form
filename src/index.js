import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import EmployeeForm from "./EmployeeForm";
import App from './App';
import Emp from './emp';

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div>
  <App />
    </div>
  </Provider>,
  rootEl
);
