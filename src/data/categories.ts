export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'indoor',
    name: 'Indoor Plants',
    slug: 'indoor-plants',
    description: 'Transform your living spaces with greenery that thrives indoors.',
    image: '/src/assets/images/blog_indoor_care_guide_1793379117819.jpg'
  },
  {
    id: 'outdoor',
    name: 'Outdoor Plants',
    slug: 'outdoor-plants',
    description: 'Beautiful plants for your garden, patio, or driveway.',
    image: '/src/assets/images/outdoor_plants_hero_1793379949011.jpg'
  },
  {
    id: 'balcony',
    name: 'Balcony Garden',
    slug: 'balcony-garden',
    description: 'Small space gardening ideas for apartment living.',
    image: '/src/assets/images/garden_balcony_inspiration_1793379117661.jpg'
  },
  {
    id: 'terrace',
    name: 'Terrace Garden',
    slug: 'terrace-garden',
    description: 'Turn your roof into a thriving ecosystem.',
    image: '/src/assets/images/terrace_garden_hero_1793379948690.jpg'
  },
  {
    id: 'vegetable',
    name: 'Vegetable Gardening',
    slug: 'vegetable-gardening',
    description: 'Grow your own fresh, organic food at home.',
    image: '/src/assets/images/vegetable_gardening_hero_1793379947727.jpg'
  },
  {
    id: 'flower',
    name: 'Flower Gardening',
    slug: 'flower-gardening',
    description: 'Add color and fragrance to your home with beautiful blooms.',
    image: '/src/assets/images/flower_gardening_hero_1793379948427.jpg'
  }
];
