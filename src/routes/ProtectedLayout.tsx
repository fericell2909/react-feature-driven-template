import type { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth }  from '@/hooks/useAuth'; 

interface ProtectedLayoutProps {
  children?: ReactNode;
}

export const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  // Si envuelve a otro componente (como AuthenticatedLayout), lo renderiza. Si no, usa <Outlet />
  return children ? <>{children}</> : <Outlet />;
};