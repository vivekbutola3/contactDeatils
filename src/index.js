import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/configureStore"; // Import your Redux store

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
