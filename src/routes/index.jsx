import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home/Index";
import ErrorPage from "../components/ErrorPage";
import CategoryPage from "../pages/CategoryPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import { NewsLoading } from "../components/Loading";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import PrivateRoute from "../components/PrivateRoute";
import AuthRoute from "../components/AuthRoute";

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
        hydrateFallbackElement: <NewsLoading></NewsLoading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <AuthRoute>
            <Login />
          </AuthRoute>
        ),
      },
      {
        path: "/auth/login",
        element: (
          <AuthRoute>
            <Login />
          </AuthRoute>
        ),
      },
      {
        path: "/auth/register",
        element: (
          <AuthRoute>
            <Register />
          </AuthRoute>
        ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetailsPage />
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <NewsLoading></NewsLoading>,
  },
]);
