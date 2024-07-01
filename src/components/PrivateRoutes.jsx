import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// this is a wrapper component
const PrivateRoutes = (props) => {
  const { children } = props;
  const { isAuthenticated } = useSelector((state) => state.user);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
