export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  product: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Michael T.',
    rating: 5,
    title: 'Best cleaning accessory I\'ve ever used',
    body: 'This cleaner bag is so convenient. I used to waste time wiping clubs with a towel, but this keeps everything much cleaner and it\'s way faster. Highly recommend!',
    date: '2026-05-12',
    product: 'Golf Club & Ball Cleaner Bag',
    verified: true,
  },
  {
    id: 'r2',
    author: 'James R.',
    rating: 5,
    title: 'My clubs have never been cleaner',
    body: 'I was skeptical at first but wow — after 18 holes my clubs still look brand new. The waterproof liner actually works and doesn\'t leak into my bag.',
    date: '2026-04-28',
    product: 'Golf Club & Ball Cleaner Bag',
    verified: true,
  },
  {
    id: 'r3',
    author: 'David K.',
    rating: 4,
    title: 'Great product for the price',
    body: 'Simple to use and very effective. I clip it to my push cart and clean after every shot. Only wish it came in more color options.',
    date: '2026-05-01',
    product: 'Golf Club & Ball Cleaner Bag',
    verified: true,
  },
  {
    id: 'r4',
    author: 'Robert S.',
    rating: 5,
    title: 'This towel is amazing!',
    body: 'Super absorbent and the tri-fold design is genius. I get three clean surfaces per round. The clip is sturdy and doesn\'t fall off like cheaper towels.',
    date: '2026-04-15',
    product: 'Premium Golf Cleaning Towel',
    verified: true,
  },
  {
    id: 'r5',
    author: 'Thomas H.',
    rating: 5,
    title: 'Travel bag saved my clubs!',
    body: 'Flew cross-country with this travel bag and my clubs arrived without a scratch. The padding is substantial and the wheels make airport navigation a breeze.',
    date: '2026-03-20',
    product: 'Golf Travel Bag',
    verified: true,
  },
  {
    id: 'r6',
    author: 'Chris M.',
    rating: 5,
    title: 'A must-have for serious golfers',
    body: 'I bought this as a gift for my golf buddy and ended up getting one for myself. The convenience factor is off the charts. Perfect addition to any golf bag.',
    date: '2026-05-08',
    product: 'Golf Club & Ball Cleaner Bag',
    verified: true,
  },
  {
    id: 'r7',
    author: 'William P.',
    rating: 4,
    title: 'Solid towel, great quality',
    body: 'Well-made towel that does exactly what it promises. The waffle pattern really helps with scrubbing. Much better than the standard golf towels out there.',
    date: '2026-04-02',
    product: 'Premium Golf Cleaning Towel',
    verified: true,
  },
  {
    id: 'r8',
    author: 'Daniel L.',
    rating: 5,
    title: 'Light and sturdy stand bag',
    body: 'At under 5 pounds this is incredibly light yet feels well-built. The stand mechanism is smooth and stable. Plenty of storage for everything I need on the course.',
    date: '2026-02-14',
    product: 'Golf Stand Bag',
    verified: true,
  },
];
