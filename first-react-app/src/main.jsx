import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
