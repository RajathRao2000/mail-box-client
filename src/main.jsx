import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./components/store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
