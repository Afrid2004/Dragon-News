import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home/Index";
import ErrorPage from "../components/ErrorPage";
import CategoryPage from "../pages/CategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryPage,
      },
    ],
  },
]);
