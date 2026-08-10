// src/features/landing/components/LandingPage.tsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PATHS from '@/routes/paths';

export const LandingPage = () => {
  const { t } = useTranslation(); 

  return (
    <div className="flex-1 w-full min-h-full flex flex-col items-center justify-center px-6 py-20 bg-slate-50">
      <div className="max-w-2xl space-y-6">        
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100">
          🚀 Feature-Driven Template
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Construye aplicaciones modernas más <span className="text-indigo-600">rápido</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Una plantilla optimizada con arquitectura modular, TypeScript, Tailwind CSS y soporte multiidioma integrado.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to={PATHS.auth.login}
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Iniciar Sesión
          </Link>
          
          <a
            href="https://github.com/fericell2909"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
          >
            Ver en GitHub
          </a>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;