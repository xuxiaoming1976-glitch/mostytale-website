import { siteConfig } from '../data/site';

export function getAmazonUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}`;
}

export function getAmazonStoreUrl(): string {
  return siteConfig.amazonStoreUrl;
}

export function generateAmazonTag(tag: string = 'mostytale-20'): string {
  // Amazon affiliate tracking ID
  return tag;
}
