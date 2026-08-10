import type { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth }  from '@/app/context/AuthContext'; 
import PATHS from '@/routes/paths';

interface ProtectedRouteProps {
  children?: ReactNode;
}

export const ProtectedRoute= ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={PATHS.auth.login} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};