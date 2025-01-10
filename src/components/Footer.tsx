import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 shadow-lg mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Created with ❤️ by Rafly Azwar
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Social Media Downloader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}