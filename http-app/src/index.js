import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import logservice from "./services/logservice";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

logservice.init();


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
