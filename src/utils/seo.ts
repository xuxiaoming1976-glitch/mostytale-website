import { siteConfig } from '../data/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: Record<string, unknown>;
  canonicalURL?: string;
  noindex?: boolean;
}

const defaultImage = siteConfig.ogImage;
const siteName = siteConfig.name;
const baseUrl = siteConfig.url;

export function generateSEOMeta({
  title,
  description,
  image,
  type = 'website',
  canonicalURL,
  noindex = false,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${siteName}` : `${siteName} — ${siteConfig.tagline}`;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || defaultImage;
  const canonical = canonicalURL ? `${baseUrl}${canonicalURL}` : baseUrl;

  return {
    title: pageTitle,
    description: pageDescription,
    canonical,
    og: {
      title: pageTitle,
      description: pageDescription,
      image: pageImage,
      type,
      siteName,
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      image: pageImage,
    },
    noindex,
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  images: string[];
  amazonUrl: string;
  rating: number;
  reviewCount: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `${baseUrl}${img}`),
    brand: {
      '@type': 'Brand',
      name: siteName,
    },
    offers: {
      '@type': 'Offer',
      url: product.amazonUrl,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
    },
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? `${baseUrl}${article.image}` : undefined,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
    },
  };
}
