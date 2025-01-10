import React from 'react';
import { Menu, X, Sun, Moon, Youtube, Instagram, Music2 } from 'lucide-react';
import { Platform } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import Logo from './Logo';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  selectedPlatform: Platform;
  setSelectedPlatform: (platform: Platform) => void;
}

export default function Sidebar({
  isOpen,
  setIsOpen,
  darkMode,
  toggleDarkMode,
  selectedPlatform,
  setSelectedPlatform,
}: SidebarProps) {
  const { t } = useLanguage();

  const menuItems = [
    { icon: <Music2 size={20} />, label: 'TikTok', value: 'tiktok' as Platform },
    { icon: <Youtube size={20} />, label: 'YouTube', value: 'youtube' as Platform },
    { icon: <Instagram size={20} />, label: 'Instagram', value: 'instagram' as Platform },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl z-40 transition-transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
          <Logo />
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <X size={24} className="dark:text-white" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.value}>
                <button
                  onClick={() => setSelectedPlatform(item.value)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    selectedPlatform === item.value
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t dark:border-gray-700 space-y-2">
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
          >
            <span>{t('sidebar.darkMode')}</span>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <LanguageSelector />
        </div>
      </aside>
    </>
  );
}