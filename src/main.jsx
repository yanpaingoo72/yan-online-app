import "./index.css";
import { createRoot } from "react-dom/client";

import App from "./App";
import {  RouterProvider } from "react-router-dom";
import router from "./routes/router";

const root = document.getElementById("root");


createRoot(root).render(<RouterProvider router={router} />);
