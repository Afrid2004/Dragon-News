import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { NewsLoading } from "./Loading";

const AuthRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <NewsLoading />;
  }
  if (user) {
    return <Navigate to={location.state?.from?.pathname || "/"} replace />;
  }
  return children;
};
export default AuthRoute;
