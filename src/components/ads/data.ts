import { AdData } from './types';

export const adData: Record<string, AdData> = {
  sidebar: {
    id: 'sidebar',
    ads: [
      {
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&q=80",
        title: 'Hosting Premium',
        description: 'Hosting cepat dan aman untuk website Anda',
        url: '#',
        badge: 'Premium'
      },
      {
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=300&q=80",
        title: 'Domain Murah',
        description: 'Dapatkan domain impian Anda',
        url: '#'
      }
    ]
  },
  inline: {
    id: 'inline',
    ads: [
      {
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
        title: 'Kursus Digital Marketing',
        description: 'Pelajari strategi marketing digital dari para ahli',
        url: '#'
      },
      {
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
        title: 'Template Website',
        description: 'Koleksi template website premium untuk bisnis Anda',
        url: '#'
      }
    ]
  },
  header: {
    id: 'header',
    ads: [
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        title: 'Website Builder',
        description: 'Buat website profesional tanpa coding',
        url: '#',
        badge: 'New'
      }
    ]
  },
  footer: {
    id: 'footer',
    ads: [
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        title: 'VPS Server',
        description: 'Server performa tinggi dengan harga terjangkau',
        url: '#'
      },
      {
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
        title: 'SSL Certificate',
        description: 'Amankan website Anda dengan SSL Premium',
        url: '#'
      },
      {
        video: "https://your-video-url.mp4",
        title: 'Website Security',
        description: 'Lindungi website Anda dari serangan cyber',
        url: '#',
        badge: 'Featured'
      }
    ]
  }
};