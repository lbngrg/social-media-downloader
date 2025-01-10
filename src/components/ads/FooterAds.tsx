import React from 'react';
import { adData } from './data';
import AdCard from './AdCard';

export default function FooterAds() {
  return (
    <div className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
          Layanan Lainnya
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adData.footer.ads.map((ad, index) => (
            <AdCard key={index} ad={ad} variant="full" />
          ))}
        </div>
      </div>
    </div>
  );
}