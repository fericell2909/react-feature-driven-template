import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom'; // <-- 1. Importante para renderizar las rutas hijas

interface AuthenticatedLayoutProps {
  children?: ReactNode; // <-- 2. Hacemos que children sea opcional ya que React Router los pasa dinámicamente
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold">Mi Aplicación</h1>
      </header>
      
      <main className="flex-grow p-4">
        {/* Renderiza los hijos manuales (si los hubiera) O el Outlet de React Router */}
        {children || <Outlet />} 
      </main>
    </div>
  );
};

export default AuthenticatedLayout;