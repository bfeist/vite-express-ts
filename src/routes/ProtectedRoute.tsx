import React from "react";
import { Navigate } from "react-router-dom";
import { hasToken } from "@/utils/token";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) =>
  !hasToken() ? <Navigate to="/" replace /> : children;

export default ProtectedRoute;
