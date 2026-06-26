export interface NavItem {
  label: string;
  href: string;
  image?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products/',
    image: '/images/products/cleaner-bag-menu.png',
    children: [
      { label: 'All Products', href: '/products/' },
      { label: 'Golf Cleaner Bag', href: '/products/cleaning/club-ball-cleaner-bag/' },
      { label: 'Golf Towel', href: '/products/cleaning/golf-towel/' },
      { label: 'Hair Removal Gloves', href: '/products/accessories/hair-removal-gloves/' },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNavigation = {
  products: [
    { label: 'Golf Cleaner Bag', href: '/products/cleaning/club-ball-cleaner-bag/' },
    { label: 'Golf Towel', href: '/products/cleaning/golf-towel/' },
    { label: 'Hair Removal Gloves', href: '/products/accessories/hair-removal-gloves/' },
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
