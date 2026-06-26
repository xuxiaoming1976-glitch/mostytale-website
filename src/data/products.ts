export interface ProductSpecs {
  dimensions: string;
  weight: string;
  material: string;
  color: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  category: 'cleaning' | 'golf-bags' | 'accessories';
  features: { icon: string; title: string; description: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  whatIsIncluded: string[];
  images: string[];
  amazonUrl: string;
  amazonAsin: string;
  specs: ProductSpecs;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
}

export const products: Product[] = [
  {
    slug: 'club-ball-cleaner-bag',
    name: 'Golf Club & Ball Cleaner Bag',
    tagline: '2-in-1 Portable Cleaning Solution',
    shortDescription:
      'Keep your clubs and balls spotless on every hole with this innovative 2-in-1 cleaning pouch.',
    description:
      'The MOSTY Golf Club & Ball Cleaner Bag is the ultimate on-course cleaning solution. Designed with a waterproof inner liner and a scratch-free microfiber interior, this compact pouch lets you clean both your club faces and golf balls in seconds. Just add 1/5 cup of water, attach it to your bag, and enjoy pristine clubs throughout your round.',
    category: 'cleaning',
    features: [
      {
        icon: 'droplet',
        title: 'Waterproof Inner Liner',
        description: 'Sealed interior prevents leaks, keeping your golf bag dry at all times.',
      },
      {
        icon: 'layers',
        title: '2-in-1 Club + Ball Cleaning',
        description: 'Dual-sided design cleans both club faces and golf balls with ease.',
      },
      {
        icon: 'shield',
        title: 'Scratch-Free Design',
        description: 'Premium microfiber material protects club faces from scratches.',
      },
      {
        icon: 'briefcase',
        title: 'Portable & Compact',
        description: 'Lightweight design clips easily onto any golf bag for quick access.',
      },
      {
        icon: 'zap',
        title: 'Easy to Use',
        description: 'Just 1/5 cup of water is all you need — clean in seconds.',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Add Water',
        description: 'Pour about 1/5 cup of water into the cleaner bag.',
      },
      {
        step: 2,
        title: 'Insert Club or Ball',
        description: 'Slide your club head or ball into the pouch.',
      },
      {
        step: 3,
        title: 'Gently Scrub & Play',
        description: 'A few gentle scrubs and your gear is clean and ready for the next shot.',
      },
    ],
    whatIsIncluded: [
      '1x MOSTY Cleaner Bag',
      '1x Carabiner Clip',
      '1x Quick Start Guide',
    ],
    images: [
      '/images/products/club-cleaner-main.jpg',
      '/images/products/club-cleaner-01.png',
      '/images/products/club-cleaner-02.jpg',
      '/images/products/club-cleaner-03.jpg',
      '/images/products/club-cleaner-04.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/dp/B0FHWLLC55',
    amazonAsin: 'B0FHWLLC55',
    specs: {
      dimensions: '8.5" x 5" x 2"',
      weight: '4.2 oz',
      material: 'Waterproof TPU + Microfiber',
      color: 'Green / Black',
    },
    rating: 4.5,
    reviewCount: 850,
    isFeatured: true,
  },
  {
    slug: 'golf-towel',
    name: 'Premium Golf Cleaning Towel',
    tagline: 'Ultra-Absorbent Microfiber Towel',
    shortDescription:
      'Tri-fold microfiber golf towel with waffle pattern for maximum absorption and a convenient carabiner clip.',
    description:
      'The MOSTY Premium Golf Cleaning Towel is your on-course companion for keeping clubs, balls, and hands clean. Made from ultra-absorbent microfiber with a textured waffle pattern, this tri-fold towel locks in moisture and scrubs away dirt effortlessly. The built-in carabiner clip attaches to any golf bag for easy access.',
    category: 'cleaning',
    features: [
      {
        icon: 'droplet',
        title: 'Ultra-Absorbent',
        description: 'Advanced waffle-weave microfiber holds water longer than standard towels.',
      },
      {
        icon: 'maximize',
        title: 'Tri-Fold Design',
        description: 'Compact folding design with 3 cleaning surfaces for extended use.',
      },
      {
        icon: 'link',
        title: 'Carabiner Clip',
        description: 'Sturdy clip attaches securely to any golf bag or push cart.',
      },
      {
        icon: 'rotate-cw',
        title: 'Machine Washable',
        description: 'Easy to clean and reuse — just toss in the washing machine.',
      },
    ],
    howItWorks: [
      { step: 1, title: 'Wet the Towel', description: 'Dampen one section of the towel with water.' },
      { step: 2, title: 'Wipe Club or Ball', description: 'Use the damp section to clean dirt and grass from club faces.' },
      { step: 3, title: 'Dry & Repeat', description: 'Use the dry section to wipe clean, then fold to a fresh surface.' },
    ],
    whatIsIncluded: [
      '1x MOSTY Golf Towel',
      '1x Carabiner Clip',
    ],
    images: [
      '/images/products/towel-main.jpg',
      '/images/products/towel-01.jpg',
      '/images/products/towel-02.jpg',
      '/images/products/towel-03.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/dp/MOSTYTOWEL',
    amazonAsin: 'MOSTYTOWEL',
    specs: {
      dimensions: '16" x 16" (unfolded)',
      weight: '3.5 oz',
      material: 'Microfiber (80% Polyester, 20% Polyamide)',
      color: 'Green / White',
    },
    rating: 4.7,
    reviewCount: 420,
    isFeatured: true,
  },
  {
    slug: 'travel-bag',
    name: 'Golf Travel Bag',
    tagline: 'Premium Padded Travel Protection',
    shortDescription:
      'Heavy-duty padded golf travel bag with reinforced wheel system and internal club protection straps.',
    description:
      'The MOSTY Golf Travel Bag provides maximum protection for your clubs during air travel and road trips. Featuring 180° padded protection, heavy-duty 600D polyester construction, smooth-rolling wheels, and internal compression straps, this travel bag ensures your clubs arrive safely at your destination.',
    category: 'golf-bags',
    features: [
      {
        icon: 'shield',
        title: '360° Padded Protection',
        description: 'Full-body foam padding protects clubs from impact during transit.',
      },
      {
        icon: 'truck',
        title: 'Heavy-Duty Wheels',
        description: 'Smooth-rolling inline skate wheels for effortless airport navigation.',
      },
      {
        icon: 'lock',
        title: 'Internal Straps',
        description: 'Compression straps secure your golf bag firmly inside the travel case.',
      },
      {
        icon: 'package',
        title: 'Durable 600D Polyester',
        description: 'Tear-resistant fabric built to withstand years of travel.',
      },
    ],
    howItWorks: [
      { step: 1, title: 'Place Bag Inside', description: 'Set your golf bag inside the padded travel case.' },
      { step: 2, title: 'Secure with Straps', description: 'Fasten the internal compression straps to hold everything in place.' },
      { step: 3, title: 'Zip & Roll', description: 'Zip up the heavy-duty zipper and roll smoothly to your gate.' },
    ],
    whatIsIncluded: [
      '1x MOSTY Travel Bag',
      '1x Internal Strap Set',
      '1x ID Tag',
    ],
    images: [
      '/images/products/travel-bag-01.webp',
      '/images/products/travel-bag-02.webp',
      '/images/products/travel-bag-03.webp',
      '/images/products/travel-bag-04.webp',
    ],
    amazonUrl: 'https://www.amazon.com/dp/MOSTYTRAVEL',
    amazonAsin: 'MOSTYTRAVEL',
    specs: {
      dimensions: '52" x 15" x 14"',
      weight: '8.5 lbs',
      material: '600D Polyester + Foam Padding',
      color: 'Black / Green',
    },
    rating: 4.4,
    reviewCount: 310,
    isFeatured: false,
  },
  {
    slug: 'stand-bag',
    name: 'Golf Stand Bag',
    tagline: 'Lightweight Carry Bag with Stand',
    shortDescription:
      'Ultra-lightweight stand bag with 4-way divider, dual strap system, and ample storage for all your gear.',
    description:
      'The MOSTY Golf Stand Bag combines lightweight design with premium features. At just 4.8 lbs, it features a 4-way full-length divider, ergonomic dual-strap carry system, 6 zippered pockets, and a durable stand mechanism. Perfect for walkers and riders alike.',
    category: 'golf-bags',
    features: [
      {
        icon: 'feather',
        title: 'Ultra-Lightweight',
        description: 'Only 4.8 lbs — easy to carry for 18 holes without fatigue.',
      },
      {
        icon: 'grid',
        title: '4-Way Divider',
        description: 'Full-length dividers keep clubs organized and prevent shaft damage.',
      },
      {
        icon: 'anchor',
        title: 'Stable Stand System',
        description: 'Auto-deploying legs with non-slip feet for stable placement on any terrain.',
      },
      {
        icon: 'folder',
        title: '6 Pockets',
        description: 'Multiple storage pockets including waterproof valuables pocket.',
      },
    ],
    howItWorks: [
      { step: 1, title: 'Load Clubs', description: 'Organize your clubs in the 4-way full-length divider.' },
      { step: 2, title: 'Strap On', description: 'Put on the dual-shoulder straps for balanced weight distribution.' },
      { step: 3, title: 'Set Down', description: 'Set the bag down and the stand legs deploy automatically.' },
    ],
    whatIsIncluded: [
      '1x MOSTY Stand Bag',
      '1x Rain Hood',
      '1x Dual Strap System',
    ],
    images: [
      '/images/products/stand-bag-01.webp',
      '/images/products/stand-bag-02.webp',
      '/images/products/stand-bag-03.webp',
    ],
    amazonUrl: 'https://www.amazon.com/dp/MOSTYSTAND',
    amazonAsin: 'MOSTYSTAND',
    specs: {
      dimensions: '36" x 10" x 9"',
      weight: '4.8 lbs',
      material: 'Nylon + Polyester',
      color: 'Black / Green / White',
    },
    rating: 4.3,
    reviewCount: 185,
    isFeatured: false,
  },
  {
    slug: 'hair-removal-gloves',
    name: 'Hair Removal Gloves',
    tagline: 'Gentle & Effective Hair Removal',
    shortDescription:
      'Soft, flexible hair removal gloves that gently buff away unwanted hair for smooth, radiant skin.',
    description:
      'MOSTY Hair Removal Gloves offer a gentle, chemical-free way to remove unwanted hair. Made from ultra-fine crystalline material, these gloves exfoliate while removing hair, leaving your skin silky smooth. Suitable for arms, legs, and body use — simply slip them on and buff in circular motions.',
    category: 'accessories',
    features: [
      {
        icon: 'heart',
        title: 'Gentle on Skin',
        description: 'Ultra-fine crystalline surface buffs hair away without irritation.',
      },
      {
        icon: 'droplet',
        title: 'Waterproof Design',
        description: 'Use wet or dry — gloves work effectively in the shower or bath.',
      },
      {
        icon: 'rotate-cw',
        title: 'Reusable & Durable',
        description: 'High-quality material lasts for months with proper care.',
      },
      {
        icon: 'maximize',
        title: 'One Size Fits Most',
        description: 'Flexible, stretchy material adapts to most hand sizes comfortably.',
      },
    ],
    howItWorks: [
      { step: 1, title: 'Slip On', description: 'Put on the gloves like regular household gloves.' },
      { step: 2, title: 'Buff Gently', description: 'Use circular motions on the target area for 2-3 minutes.' },
      { step: 3, title: 'Rinse & Moisturize', description: 'Rinse skin and apply moisturizer for best results.' },
    ],
    whatIsIncluded: [
      '1 Pair of MOSTY Hair Removal Gloves',
      '1x Instruction Card',
    ],
    images: [
      '/images/products/gloves-main.jpg',
      '/images/products/hair-removal-gloves-01.jpg',
      '/images/products/hair-removal-gloves-02.jpg',
      '/images/products/hair-removal-gloves-03.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/dp/MOSTYGLOVES',
    amazonAsin: 'MOSTYGLOVES',
    specs: {
      dimensions: '7.5" x 4.5" (per glove)',
      weight: '2.8 oz (pair)',
      material: 'Crystalline + Silicone Blend',
      color: 'Pink / White',
    },
    rating: 4.6,
    reviewCount: 520,
    isFeatured: true,
  },
];

export const categories = [
  {
    slug: 'cleaning',
    name: 'Golf Cleaning Series',
    description: 'Keep your clubs and balls spotless with our innovative cleaning solutions.',
    icon: 'droplet',
  },
  {
    slug: 'golf-bags',
    name: 'Golf Bags',
    description: 'Travel and stand bags designed for protection, convenience, and style.',
    icon: 'briefcase',
  },
  {
    slug: 'accessories',
    name: 'Golf Accessories & Beauty',
    description: 'Essential accessories and beauty tools to elevate your game and grooming routine.',
    icon: 'plus-circle',
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
