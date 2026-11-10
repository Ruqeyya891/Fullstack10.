import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from "react-dom/client";
import { ROOT } from "./routes";

const router = createBrowserRouter(ROOT);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
