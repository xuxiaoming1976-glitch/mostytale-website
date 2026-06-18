// Site-wide configuration
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  email: string;
  amazonStoreUrl: string;
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  stats: {
    customersServed: number;
    productsSold: number;
    averageRating: number;
    reviewCount: number;
  };
}

export const siteConfig: SiteConfig = {
  name: 'MOSTY',
  tagline: 'Clean Clubs. Play Better.',
  description:
    'MOSTY offers professional-grade golf club & ball cleaners, towels, and accessories. Keep your clubs in championship condition. Shop on Amazon.',
  url: 'https://mostytale.com',
  ogImage: '/images/og-default.png',
  email: 'cs@mostytale.com',
  amazonStoreUrl: 'https://www.amazon.com/stores/MOSTY',
  social: {
    instagram: 'https://instagram.com/mosty',
    facebook: 'https://facebook.com/mosty',
    twitter: 'https://twitter.com/mosty',
    youtube: 'https://youtube.com/@mosty',
  },
  stats: {
    customersServed: 5000,
    productsSold: 10000,
    averageRating: 4.5,
    reviewCount: 1200,
  },
};
