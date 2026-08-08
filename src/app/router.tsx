import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/components/layout/PublicLayout";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";
import { ProtectedLayout } from "../routes/ProtectedLayout";
import { authRoutes } from "@/features/auth/routes";
import { dashboardRoutes } from "@/features/dashboard/routes";
import { NotFoundPage } from "@/pages/NotFoundPage";
import LandingPage from "@/pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <PublicLayout />,
    children: [authRoutes],
  },
  {
    element: (
      <ProtectedLayout>
        <AuthenticatedLayout />{" "}
        {/* El layout que solo ven los autenticados (sidebar, etc.) */}
      </ProtectedLayout>
    ),
    children: [dashboardRoutes],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
