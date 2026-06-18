export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products/',
    children: [
      { label: 'All Products', href: '/products/' },
      { label: 'Cleaning', href: '/products/cleaning/' },
      { label: 'Golf Bags', href: '/products/golf-bags/' },
      { label: 'Accessories', href: '/products/accessories/' },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNavigation = {
  products: [
    { label: 'Cleaning Series', href: '/products/cleaning/' },
    { label: 'Golf Bags', href: '/products/golf-bags/' },
    { label: 'Accessories', href: '/products/accessories/' },
    { label: 'All Products', href: '/products/' },
  ],
  company: [
    { label: 'About Us', href: '/about/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'FAQ', href: '/faq/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
};
