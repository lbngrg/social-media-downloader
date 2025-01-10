import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      name: "Sarah Chen",
      role: t('testimonials.role1'),
      content: t('testimonials.content1')
    },
    {
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
      name: "Michael Rodriguez",
      role: t('testimonials.role2'),
      content: t('testimonials.content2')
    },
    {
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      name: "Emily Parker",
      role: t('testimonials.role3'),
      content: t('testimonials.content3')
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-12 dark:text-white">
        {t('testimonials.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg dark:text-white">{testimonial.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}