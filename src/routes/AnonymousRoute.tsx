import React from "react";
import { Navigate } from "react-router-dom";
import { hasToken } from "@/utils/token";

const AnonymousRoute = ({ children }: { children: React.ReactNode }) =>
  hasToken() ? <Navigate to="/profile" replace /> : children;

export default AnonymousRoute;
