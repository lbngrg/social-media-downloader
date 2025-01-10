import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ComparisonTable() {
  const { t } = useLanguage();
  
  const features = [
    { name: t('comparison.speed'), snapdown: true, others: false },
    { name: t('comparison.quality'), snapdown: true, others: false },
    { name: t('comparison.formats'), snapdown: true, others: false },
    { name: t('comparison.noAds'), snapdown: true, others: false },
    { name: t('comparison.secure'), snapdown: true, others: false },
    { name: t('comparison.batch'), snapdown: true, others: false },
  ];

  return (
    <div className="hidden lg:block w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
        {t('comparison.title')}
      </h2>
      
      <div className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-6 py-4 text-left text-gray-500 dark:text-gray-300">{t('comparison.feature')}</th>
              <th className="px-6 py-4 text-center text-blue-500 font-bold">Social Media Downloader</th>
              <th className="px-6 py-4 text-center text-gray-500 dark:text-gray-300">{t('comparison.others')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {features.map((feature, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{feature.name}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    {feature.snapdown ? (
                      <Check className="text-green-500" size={24} />
                    ) : (
                      <X className="text-red-500" size={24} />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    {feature.others ? (
                      <Check className="text-green-500" size={24} />
                    ) : (
                      <X className="text-red-500" size={24} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}