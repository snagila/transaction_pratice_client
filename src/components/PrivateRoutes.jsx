import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// this is a wrapper component
const PrivateRoutes = () => {
  const { isAunthenticated } = useSelector((state) => state.user);
  return isAunthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
