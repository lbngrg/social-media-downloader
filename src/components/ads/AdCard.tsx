import React from 'react';
import { Ad } from './types';
import FadeIn from '../animations/FadeIn';

interface AdCardProps {
  ad: Ad;
  variant?: 'compact' | 'full' | 'banner';
  className?: string;
}

export default function AdCard({ ad, variant = 'full', className = '' }: AdCardProps) {
  const aspectRatio = variant === 'compact' ? 'aspect-[4/3]' : 'aspect-[21/9]';
  
  return (
    <FadeIn>
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
      >
        <div className={`${aspectRatio} relative overflow-hidden`}>
          {ad.video ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={ad.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {ad.badge && (
            <span className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
              {ad.badge}
            </span>
          )}
        </div>
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
  );
}