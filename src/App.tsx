import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import SearchInput from './components/SearchInput';
import MediaPreview from './components/MediaPreview';
import UsageInstructions from './components/UsageInstructions';
import Features from './components/Features';
import Statistics from './components/Statistics';
import ComparisonTable from './components/ComparisonTable';
import Footer from './components/Footer';
import { Platform } from './types';
import { useDarkMode } from './hooks/useDarkMode';
import { useMediaInfo } from './hooks/useMediaInfo';
import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('tiktok');
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { mediaInfo, loading, handleSubmit, clearMediaInfo } = useMediaInfo();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      <main className="lg:ml-64 min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-8 pt-20 lg:pt-8 max-w-7xl flex-grow">
          <div className="flex flex-col items-center space-y-12">
            <div className="text-center space-y-4 max-w-2xl">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                {t('main.title')} {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {t('main.subtitle')}
              </p>
            </div>
            
            <SearchInput 
              onSubmit={handleSubmit} 
              onClear={clearMediaInfo}
              loading={loading} 
            />
            
            {mediaInfo ? (
              <MediaPreview mediaInfo={mediaInfo} />
            ) : (
              <div className="w-full space-y-16">
                <UsageInstructions />
                <Statistics />
                <Features />
                <ComparisonTable />
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>

      <Toaster position="bottom-right" />
    </div>
  );
}