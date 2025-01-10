import React from 'react';
import { Download } from 'lucide-react';
import { MediaInfo } from '../types';
import { downloadMedia } from '../utils/download';

interface MediaPreviewProps {
  mediaInfo: MediaInfo;
}

export default function MediaPreview({ mediaInfo }: MediaPreviewProps) {
  const handleDownload = (url: string, quality: string, format: string) => {
    const filename = `${mediaInfo.title.slice(0, 30)}_${quality}.${format.toLowerCase()}`;
    downloadMedia(url, filename);
  };

  return (
    <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={mediaInfo.thumbnail}
          alt={mediaInfo.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{mediaInfo.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">By {mediaInfo.author}</p>
        
        <div className="space-y-3">
          {mediaInfo.downloadOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleDownload(option.url, option.quality, option.format)}
              className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="dark:text-white">
                {option.format} - {option.quality}
              </span>
              <Download size={20} className="text-blue-500" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}