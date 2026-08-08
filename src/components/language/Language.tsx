import { useTranslation } from 'react-i18next';
import type { ChangeEvent } from 'react';

export const Language = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  
  return (
    <div className="relative inline-block ml-auto">
      <select
        value={currentLang}
        onChange={handleLanguageChange}
        className="appearance-none bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 pr-8 shadow-xs cursor-pointer hover:bg-slate-50 transition-colors"
      >
        <option value="es">🇪🇸 Español</option>
        <option value="en">🇺🇸 English</option>
      </select>
      
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};
