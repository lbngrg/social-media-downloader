import React from 'react';
import { adData } from './data';
import AdCard from './AdCard';

export default function HeaderAd() {
  return (
    <div className="w-full mb-8">
      {adData.header.ads.map((ad, index) => (
        <AdCard
          key={index}
          ad={ad}
          variant="banner"
          className="max-w-4xl mx-auto"
        />
      ))}
    </div>
  );
}