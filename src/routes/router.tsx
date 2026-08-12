import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/components/layout/PublicLayout";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { authRoutes } from "@/features/auth/routes";
import { dashboardRoutes } from "@/features/dashboard/routes";
import { userRoutes } from "@/features/users/routes/index.tsx";
import { NotFoundPage } from "@/pages/NotFoundPage";
import LandingPage from "@/pages/LandingPage";
import { PublicRoute } from "@/routes/PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <PublicRoute />,
    children: [
      {
        element: <PublicLayout />,
        children: [authRoutes],
      },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <AuthenticatedLayout />
      </ProtectedRoute>
    ),
    children: [dashboardRoutes, userRoutes],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
