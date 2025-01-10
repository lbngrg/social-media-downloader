import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="w-full px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
      <div className="flex items-center justify-between mb-2">
        <span>{t('sidebar.language')}</span>
        <Languages size={20} />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setLanguage('en')}
          className={`flex-1 px-2 py-1 rounded flex items-center justify-center gap-2 ${
            language === 'en'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-600'
          }`}
        >
          <img
            src="https://flagcdn.com/w20/gb.png"
            srcSet="https://flagcdn.com/w40/gb.png 2x"
            width="20"
            height="15"
            alt="English"
            className="rounded"
          />
          <span>EN</span>
        </button>
        <button
          onClick={() => setLanguage('id')}
          className={`flex-1 px-2 py-1 rounded flex items-center justify-center gap-2 ${
            language === 'id'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-600'
          }`}
        >
          <img
            src="https://flagcdn.com/w20/id.png"
            srcSet="https://flagcdn.com/w40/id.png 2x"
            width="20"
            height="15"
            alt="Indonesia"
            className="rounded"
          />
          <span>ID</span>
        </button>
      </div>
    </div>
  );
}