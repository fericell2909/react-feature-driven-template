import { useState, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Language } from '@/components/language/Language';
import { SidebarMenu } from '@/components/layout/SidebarMenu';
import { useAuth } from '@/app/hooks/useAuth';

interface AuthenticatedLayoutProps {
  children?: ReactNode; 
}

export const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { displayName } = useAuth();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <header className="bg-blue-600 text-white h-16 px-6 flex justify-between items-center shadow-md sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            type='button'
            onClick={toggleMenu} 
            className="p-2 text-white hover:bg-blue-700 rounded-lg focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <h1 className="text-xl font-bold tracking-wide">Hola, {displayName()}</h1>
        </div>

        <div>
          <Language />
        </div>
      </header>

      <div className="flex flex-1 relative overflow-hidden">
        
        {isMenuOpen && (
          <div 
            onClick={toggleMenu} 
            className="fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity"
          />
        )}
        <aside className={`
          fixed md:relative z-40 inset-y-0 left-0
          bg-white border-r border-gray-200 p-4 flex flex-col shrink-0
          transition-all duration-300 ease-in-out
          top-16 md:top-0 h-[calc(100vh-4rem)] md:h-auto
          ${isMenuOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:w-0 md:translate-x-0 md:opacity-0 md:overflow-hidden md:p-0 md:border-none'}
        `}>
          <SidebarMenu onItemClick={() => {
            if (window.innerWidth < 768) setIsMenuOpen(false);
          }} />
        </aside>

        <main className="flex-1 p-6 overflow-y-auto bg-gray-50 min-w-0 transition-all duration-300">
          {children || <Outlet />} 
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;