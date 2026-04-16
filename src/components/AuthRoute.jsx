import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router";
import { NewsLoading } from "./Loading";

const AuthRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <NewsLoading />;
  }
  if (user) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};
export default AuthRoute;
