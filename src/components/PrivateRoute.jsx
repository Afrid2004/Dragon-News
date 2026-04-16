import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { NewsLoading } from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <NewsLoading />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"} replace />;
};

export default PrivateRoute;
