import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home/Index";
import ErrorPage from "../components/ErrorPage";
import CategoryPage from "../pages/CategoryPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryPage />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
