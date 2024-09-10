// src/components/ProtectedRoute.tsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const authContext = useContext(AuthContext);

  // Check for token in localStorage as a fallback
  const token = localStorage.getItem("authToken");
  console.log("Token", token);

  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
