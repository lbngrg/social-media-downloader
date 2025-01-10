import React from 'react';
import { adData } from './data';
import AdCard from './AdCard';

export default function InlineAds() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adData.inline.ads.map((ad, index) => (
          <AdCard key={index} ad={ad} variant="full" />
        ))}
      </div>
    </div>
  );
}