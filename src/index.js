import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";
import Offline from "./components/Offline/offline";

ReactDOM.render(
  <Offline>
    <App />
  </Offline>,

  // <React.StrictMode>

  // </React.StrictMode>,
  document.getElementById("root")
);
