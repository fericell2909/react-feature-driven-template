import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {

  const { t } = useTranslation('auth');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="space-y-4 max-w-md">
        <span className="text-6xl font-ext500 font-black text-indigo-600 tracking-wider">
          404
        </span>
        
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {t('pageNotFounTitle')}
        </h1>
        
        <p className="text-base text-slate-600">
          {t('pageNotFoundDescription')}
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            {t('goBackHome')}
          </Link>
        </div>
      </div>
    </main>
  );
};