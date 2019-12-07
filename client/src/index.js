import  "materialize-css/dist/css/materialize.min.css"; // or import materializeCSS from "materialize-css/dist/css/materialize.min.css";


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from './reducers'
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


console.log(process.env)
console.log(process.env.NODE_ENV + " node env")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
