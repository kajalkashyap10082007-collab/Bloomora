export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  publishedAt: string;
  author: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Best Indoor Plants for Beginners in India',
    slug: 'best-indoor-plants-beginners-india',
    excerpt: 'Starting your green journey? Here are the most resilient indoor plants that thrive in Indian climates.',
    category: 'Indoor Plants',
    image: '/src/assets/images/blog_indoor_care_guide_1793379117819.jpg',
    publishedAt: '2023-10-15',
    author: 'Bloomora Editorial',
    readTime: '6 min read',
    content: `
      <h2>Why Start with Indoor Plants?</h2>
      <p>Indoor plants are more than just decor; they bring a piece of nature into our urban lives. For beginners, the key is to choose plants that are forgiving and adapt well to the varied light and humidity conditions of Indian homes.</p>
      
      <h2>Top Picks for Indian Homes</h2>
      <h3>1. Snake Plant (Sansevieria)</h3>
      <p>Almost indestructible. It thrives on neglect and can handle low light levels found in many apartments.</p>
      
      <h3>2. Money Plant (Pothos)</h3>
      <p>A classic choice. Whether you grow it in soil or water, it's a fast grower that looks beautiful trailing from shelves.</p>
      
      <h3>3. ZZ Plant</h3>
      <p>With its waxy leaves and drought tolerance, it's perfect for busy professionals.</p>
      
      <h2>Basic Care Tips</h2>
      <ul>
        <li>Don't overwater: Most indoor plants die from too much love.</li>
        <li>Light is key: Match your plant to the light available in your room.</li>
        <li>Clean the leaves: Dust can block sunlight and hinder photosynthesis.</li>
      </ul>
    `
  },
  {
    id: '2',
    title: 'How to Create a Beautiful Small Balcony Garden',
    slug: 'small-balcony-garden-ideas',
    excerpt: 'Transform your tiny balcony into a lush green retreat with these simple design tips.',
    category: 'Balcony Garden',
    image: '/src/assets/images/garden_balcony_inspiration_1793379117661.jpg',
    publishedAt: '2023-10-20',
    author: 'Bloomora Editorial',
    readTime: '8 min read',
    content: `
      <h2>Maximize Your Vertical Space</h2>
      <p>When floor space is limited, look up! Vertical gardening is the secret to a lush balcony.</p>
      
      <h2>Choose the Right Containers</h2>
      <p>Use lightweight pots to avoid putting too much stress on the balcony structure. Railing planters are excellent for saving space.</p>
      
      <h2>Select Plants Based on Sunlight</h2>
      <p>If your balcony gets afternoon sun, choose heat-loving plants like Bougainvillea or Hibiscus. For shady balconies, go with ferns and Pothos.</p>
    `
  },
  {
    id: '3',
    title: 'How to Grow Tomatoes in Pots at Home',
    slug: 'grow-tomatoes-in-pots',
    excerpt: 'Nothing beats the taste of homegrown tomatoes. Learn the step-by-step process of container tomato gardening.',
    category: 'Vegetable Gardening',
    image: '/src/assets/images/blog_tomato_gardening_1793379117970.jpg',
    publishedAt: '2023-10-25',
    author: 'Bloomora Editorial',
    readTime: '10 min read',
    content: `
      <h2>Getting Started with Tomatoes</h2>
      <p>Tomatoes are one of the most popular vegetables for home gardeners. They grow exceptionally well in large pots.</p>
      
      <h2>Step 1: Choose the Right Pot</h2>
      <p>A 12-inch deep pot is the minimum for most tomato varieties.</p>
      
      <h2>Step 2: Soil and Fertilizer</h2>
      <p>Use a rich potting mix with plenty of compost. Tomatoes are heavy feeders.</p>
    `
  },
  {
    id: '4',
    title: 'Low-Maintenance Plants for Indian Homes',
    slug: 'low-maintenance-plants-india',
    excerpt: 'Busy schedule? These plants will stay green even if you forget about them for a week.',
    category: 'Plant Care',
    image: '/src/assets/images/blog_low_maintenance_1793380609815.jpg',
    publishedAt: '2023-11-01',
    author: 'Bloomora Editorial',
    readTime: '5 min read',
    content: '<p>Content for low maintenance plants...</p>'
  },
  {
    id: '5',
    title: 'How to Make Organic Fertilizer at Home',
    slug: 'homemade-organic-fertilizer',
    excerpt: 'Turn your kitchen waste into "black gold" for your plants with these easy composting methods.',
    category: 'DIY Garden Ideas',
    image: '/src/assets/images/blog_organic_fertilizer_1793380568479.jpg',
    publishedAt: '2023-11-05',
    author: 'Bloomora Editorial',
    readTime: '7 min read',
    content: '<p>Content for organic fertilizer...</p>'
  },
  {
    id: '6',
    title: 'Best Plants for Different Sunlight Conditions',
    slug: 'plants-sunlight-guide',
    excerpt: 'Understanding sunlight is the first step to a healthy garden. Here is a guide to help you choose.',
    category: 'Plant Care',
    image: '/src/assets/images/blog_sunlight_guide_1793380590304.jpg',
    publishedAt: '2023-11-10',
    author: 'Bloomora Editorial',
    readTime: '6 min read',
    content: '<p>Content for sunlight guide...</p>'
  },
  {
    id: '7',
    title: 'Common Indoor Plant Problems and Solutions',
    slug: 'indoor-plant-problems-solutions',
    excerpt: 'Yellow leaves? Brown tips? Don\'t panic. Here\'s how to diagnose and fix common plant issues.',
    category: 'Plant Care',
    image: '/src/assets/images/blog_plant_problems_1793380609716.jpg',
    publishedAt: '2023-11-15',
    author: 'Bloomora Editorial',
    readTime: '9 min read',
    content: '<p>Content for plant problems...</p>'
  },
  {
    id: '8',
    title: 'Seasonal Gardening Guide for Indian Homes',
    slug: 'seasonal-gardening-india',
    excerpt: 'What to plant when? A month-by-month guide for the Indian gardening calendar.',
    category: 'Seasonal Gardening',
    image: '/src/assets/images/blog_seasonal_guide_india_1793380609741.jpg',
    publishedAt: '2023-11-20',
    author: 'Bloomora Editorial',
    readTime: '12 min read',
    content: '<p>Content for seasonal guide...</p>'
  }
];
