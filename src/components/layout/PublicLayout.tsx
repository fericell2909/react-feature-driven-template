import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom'; // <-- 1. Importante para renderizar las rutas hijas

interface PublicLayoutProps {
  children?: ReactNode; // <-- 2. Hacemos que children sea opcional ya que React Router los pasa dinámicamente
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      {children || <Outlet />} 
    </>
  );
};

export default PublicLayout;