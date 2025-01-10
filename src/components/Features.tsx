import React from 'react';
import { Zap, Shield, Download, Smile } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScaleIn from './animations/ScaleIn';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: t('features.fast.title'),
      description: t('features.fast.desc')
    },
    {
      icon: <Shield className="text-green-500" size={24} />,
      title: t('features.secure.title'),
      description: t('features.secure.desc')
    },
    {
      icon: <Download className="text-blue-500" size={24} />,
      title: t('features.formats.title'),
      description: t('features.formats.desc')
    },
    {
      icon: <Smile className="text-purple-500" size={24} />,
      title: t('features.friendly.title'),
      description: t('features.friendly.desc')
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <ScaleIn>
        <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
          {t('features.title')}
        </h2>
      </ScaleIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <ScaleIn key={index} delay={index * 0.1}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </ScaleIn>
        ))}
      </div>
    </div>
  );
}