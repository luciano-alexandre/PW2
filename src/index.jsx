import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
