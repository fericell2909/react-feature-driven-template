import { useTranslation } from 'react-i18next';
import type { ChangeEvent } from 'react';
import { Select } from '@/components/ui/Select';

export const Language = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.split('-')[0] : 'es';

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const languageOptions = [
    { value: 'es', label: '🇪🇸 Español' },
    { value: 'en', label: '🇺🇸 English' },
  ];

  return (
    <div className="relative inline-block ml-auto">
      <Select
        value={currentLang}
        onChange={handleLanguageChange}
        options={languageOptions}
        className="appearance-none border-slate-200 text-slate-700 pr-8 shadow-xs cursor-pointer hover:bg-slate-50 py-2"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Language;