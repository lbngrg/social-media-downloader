import React, { useState } from 'react';
import { Clipboard, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../contexts/LanguageContext';

interface SearchInputProps {
  onSubmit: (url: string) => void;
  onClear: () => void;
  loading?: boolean;
}

export default function SearchInput({ onSubmit, onClear, loading = false }: SearchInputProps) {
  const [url, setUrl] = useState('');
  const { t } = useLanguage();

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (error) {
      toast.error('Failed to paste from clipboard');
    }
  };

  const handleClear = () => {
    setUrl('');
    onClear();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error('Please enter a valid URL');
      return;
    }
    onSubmit(url.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-4">
      <div className="relative w-full">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={t('input.placeholder')}
          className="w-full px-4 py-3 pr-12 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {url ? (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              disabled={loading}
            >
              <X size={20} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePaste}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              disabled={loading}
            >
              <Clipboard size={20} />
            </button>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? t('button.loading') : t('button.download')}
      </button>
    </form>
  );
}