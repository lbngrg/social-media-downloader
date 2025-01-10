import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import FadeIn from './animations/FadeIn';

export default function RelatedTools() {
  const { language } = useLanguage();

  const tools = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      title: language === 'id' ? 'Alat SEO Premium' : 'Premium SEO Tools',
      description: language === 'id' 
        ? 'Tingkatkan peringkat website Anda dengan alat SEO profesional' 
        : 'Boost your website ranking with professional SEO tools',
      url: '#'
    },
    {
      video: "https://your-video-url.mp4", // Ganti dengan URL video Anda
      title: language === 'id' ? 'Editor Video Online' : 'Online Video Editor',
      description: language === 'id'
        ? 'Edit video profesional langsung dari browser Anda'
        : 'Professional video editing right from your browser',
      url: '#'
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      title: language === 'id' ? 'Analisis Website' : 'Website Analytics',
      description: language === 'id'
        ? 'Pantau dan analisis performa website Anda secara real-time'
        : 'Monitor and analyze your website performance in real-time',
      url: '#'
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80",
      title: language === 'id' ? 'Pembuat Landing Page' : 'Landing Page Builder',
      description: language === 'id'
        ? 'Buat landing page yang menarik dalam hitungan menit'
        : 'Create stunning landing pages in minutes',
      url: '#'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <FadeIn>
        <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
          {language === 'id' ? 'Layanan Terkait Lainnya' : 'Other Related Services'}
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                {tool.video ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={tool.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-xl dark:text-white">
                    {tool.title}
                  </h3>
                  <ExternalLink size={18} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {tool.description}
                </p>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}