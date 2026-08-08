import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface AuthenticatedLayoutProps {
  children?: ReactNode; 
}

export const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold">My App</h1>
      </header>
      
      <main className="flex-grow p-4">
        {children || <Outlet />} 
      </main>
    </div>
  );
};

export default AuthenticatedLayout;