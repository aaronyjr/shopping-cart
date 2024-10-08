import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductPage } from "./ProductPage.jsx";
import { Homepage } from "./Homepage.jsx";
import { Cart } from "./Cart.jsx";
import { ProductDetails } from "./components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "women",
        element: <ProductPage gender="women" />,
      },
      {
        path: "men",
        element: <ProductPage gender="men"/>,
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
