import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/MainLayout";
import Error from "../pages/Error";

import FaqPage from "../pages/FaqPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetail />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
    ],
  },
  //
]);

export default router;
