import React from 'react';
import { adData } from './data';
import AdCard from './AdCard';

export default function SideAds() {
  return (
    <div className="hidden lg:block space-y-4 sticky top-24">
      {adData.sidebar.ads.map((ad, index) => (
        <AdCard key={index} ad={ad} variant="compact" />
      ))}
    </div>
  );
}