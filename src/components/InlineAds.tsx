import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

export default function InlineAds() {
  const { language } = useLanguage();

  const ads = [
    {
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
      title: language === 'id' ? 'Kursus Digital Marketing' : 'Digital Marketing Course',
      description: language === 'id'
        ? 'Pelajari strategi marketing digital dari para ahli'
        : 'Learn digital marketing strategies from experts',
      url: '#'
    },
    {
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
      title: language === 'id' ? 'Template Website' : 'Website Templates',
      description: language === 'id'
        ? 'Koleksi template website premium untuk bisnis Anda'
        : 'Premium website templates for your business',
      url: '#'
    }
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ads.map((ad, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <a
              href={ad.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[21/9] relative overflow-hidden">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl dark:text-white mb-2">
                  {ad.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {ad.description}
                </p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}