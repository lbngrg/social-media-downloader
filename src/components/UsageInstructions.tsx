import React from 'react';
import { Link, Clipboard, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

export default function UsageInstructions() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Link className="text-blue-500" size={32} />,
      title: t('usage.step1.title'),
      desc: t('usage.step1.desc'),
      gradient: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800'
    },
    {
      icon: <Clipboard className="text-purple-500" size={32} />,
      title: t('usage.step2.title'),
      desc: t('usage.step2.desc'),
      gradient: 'from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800'
    },
    {
      icon: <Download className="text-green-500" size={32} />,
      title: t('usage.step3.title'),
      desc: t('usage.step3.desc'),
      gradient: 'from-green-100 to-green-200 dark:from-green-900 dark:to-green-800'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-12 text-center dark:text-white">
          {t('usage.title')}
        </h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}