import { useRoutes } from "react-router";

import { Layout } from "@/routes/Layout";

import { SignInPage } from "@/pages/SignIn";
import { ProfilePage } from "@/pages/Profile";
import { SignUpPage } from "@/pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import AnonymousRoute from "./AnonymousRoute";
import { NotFoundPage } from "../pages/NotFound";

const AppRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <AnonymousRoute>
              <SignInPage />
            </AnonymousRoute>
          ),
        },
        {
          path: "/signin",
          element: (
            <AnonymousRoute>
              <SignInPage />
            </AnonymousRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <AnonymousRoute>
              <SignUpPage />
            </AnonymousRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

export default AppRoutes;
