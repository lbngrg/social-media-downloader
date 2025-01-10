import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

export default function SideAds() {
  const { language } = useLanguage();

  const ads = [
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&q=80",
      title: language === 'id' ? 'Hosting Premium' : 'Premium Hosting',
      description: language === 'id' 
        ? 'Hosting cepat dan aman untuk website Anda' 
        : 'Fast and secure hosting for your website',
      url: '#'
    },
    {
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=300&q=80",
      title: language === 'id' ? 'Domain Murah' : 'Cheap Domains',
      description: language === 'id'
        ? 'Dapatkan domain impian Anda'
        : 'Get your dream domain name',
      url: '#'
    }
  ];

  return (
    <div className="hidden lg:block space-y-4 sticky top-24">
      {ads.map((ad, index) => (
        <FadeIn key={index} delay={index * 0.1}>
          <a
            href={ad.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg dark:text-white mb-1">
                {ad.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {ad.description}
              </p>
            </div>
          </a>
        </FadeIn>
      ))}
    </div>
  );
}