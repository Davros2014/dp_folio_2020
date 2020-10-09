import React from "react";
import { render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "normalize.css";
import { GlobalStyles } from "./global-styles";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
