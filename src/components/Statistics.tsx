import React from 'react';
import { Users, Download, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Statistics() {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: <Users className="text-blue-500" size={24} />,
      value: "1M+",
      label: t('stats.users')
    },
    {
      icon: <Download className="text-purple-500" size={24} />,
      value: "10M+",
      label: t('stats.downloads')
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      value: "4.9/5",
      label: t('stats.rating')
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: index * 0.2
            }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full"
              >
                {stat.icon}
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="text-gray-600 dark:text-gray-400 mt-1"
                >
                  {stat.label}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}