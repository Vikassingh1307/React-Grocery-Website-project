import React from "react";
import Home from "./Component/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./Component/Fruits/Fruits";
import Dairy from "./Component/Dairy/Dairy";
import SeaFood from "./Component/SeaFood/SeaFood";
import AllProducts from "./Component/AllProdtucts/AllProducts";
import Layout from "./Component/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <SeaFood />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
