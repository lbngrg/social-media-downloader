import React from 'react';
import { Download } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
        <Download size={24} className="text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Social Media Downloader
      </span>
    </div>
  );
}