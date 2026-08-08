import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Language } from '@/components/language/Language'

interface PublicLayoutProps {
  children?: ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="w-full bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-xs">
        <Language />
      </header>
      <main className="flex-1 flex flex-col">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default PublicLayout;