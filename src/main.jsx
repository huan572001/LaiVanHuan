import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.less";
// import 'antd/dist/antd.css';
import ReactGA from "react-ga";
import { Provider } from "react-redux";
import store from "./store";
import { TRACKING_ID } from "./constant/auth";
ReactGA.initialize(TRACKING_ID);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
