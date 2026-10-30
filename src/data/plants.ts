export interface Plant {
  id: string;
  name: string;
  commonName: string;
  scientificName: string;
  category: 'indoor' | 'outdoor';
  light: 'low' | 'medium' | 'high';
  water: 'low' | 'medium' | 'high';
  difficulty: 'beginner' | 'intermediate' | 'expert';
  description: string;
  image: string;
  slug: string;
  care: {
    sunlight: string;
    watering: string;
    soil: string;
    temperature: string;
    propagation: string;
  };
}

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Sansevieria',
    commonName: 'Snake Plant',
    scientificName: 'Dracaena trifasciata',
    category: 'indoor',
    light: 'low',
    water: 'low',
    difficulty: 'beginner',
    description: 'One of the most resilient indoor plants, known for its architectural leaves and ability to thrive in low light.',
    image: '/src/assets/images/plant_snake_plant_luxury_1793379117019.jpg',
    slug: 'snake-plant',
    care: {
      sunlight: 'Thrives in low to bright indirect light. Can even handle some direct sun.',
      watering: 'Water only when the soil is completely dry. Overwatering is the biggest enemy.',
      soil: 'Well-draining succulent or cactus mix.',
      temperature: 'Prefers 15°C to 30°C. Avoid cold drafts.',
      propagation: 'By leaf cuttings or dividing the rhizomes.'
    }
  },
  {
    id: '2',
    name: 'Monstera Deliciosa',
    commonName: 'Swiss Cheese Plant',
    scientificName: 'Monstera deliciosa',
    category: 'indoor',
    light: 'medium',
    water: 'medium',
    difficulty: 'beginner',
    description: 'A popular tropical plant with large, iconic fenestrated leaves that bring a jungle vibe to any space.',
    image: '/src/assets/images/plant_monstera_deliciosa_1793380569079.jpg',
    slug: 'monstera-deliciosa',
    care: {
      sunlight: 'Bright indirect light is best. Too much sun can burn the leaves.',
      watering: 'Water when the top 2 inches of soil feel dry.',
      soil: 'Peat-based potting mix with perlite for drainage.',
      temperature: 'Prefers humid environments and temperatures between 18°C and 30°C.',
      propagation: 'Stem cuttings with at least one node and an aerial root.'
    }
  },
  {
    id: '3',
    name: 'Bougainvillea',
    commonName: 'Paper Flower',
    scientificName: 'Bougainvillea spectabilis',
    category: 'outdoor',
    light: 'high',
    water: 'low',
    difficulty: 'intermediate',
    description: 'A vibrant climbing shrub known for its colorful papery bracts. Ideal for sunny balconies and terraces in India.',
    image: '/src/assets/images/plant_bougainvillea_1793380565116.jpg',
    slug: 'bougainvillea',
    care: {
      sunlight: 'Needs full sun (at least 6 hours) to bloom profusely.',
      watering: 'Water deeply when the top soil is dry. Drought-tolerant once established.',
      soil: 'Well-draining, slightly acidic soil.',
      temperature: 'Thrives in hot, tropical climates. Sensitive to frost.',
      propagation: 'Semi-hardwood cuttings.'
    }
  },
  {
    id: '4',
    name: 'Aloe Vera',
    commonName: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    category: 'indoor',
    light: 'high',
    water: 'low',
    difficulty: 'beginner',
    description: 'A succulent known for its medicinal properties and ease of care.',
    image: '/src/assets/images/plant_aloe_vera_1793380565672.jpg',
    slug: 'aloe-vera',
    care: {
      sunlight: 'Bright direct or indirect light.',
      watering: 'Water deeply every 2-3 weeks, allowing soil to dry completely.',
      soil: 'Cactus or succulent potting mix.',
      temperature: '13°C to 27°C.',
      propagation: 'By removing "pups" (offsets) from the base.'
    }
  },
  {
    id: '5',
    name: 'Money Plant',
    commonName: 'Pothos',
    scientificName: 'Epipremnum aureum',
    category: 'indoor',
    light: 'low',
    water: 'medium',
    difficulty: 'beginner',
    description: 'A fast-growing vine that is incredibly easy to grow and very popular in Indian households.',
    image: '/src/assets/images/plant_pothos_1793380565764.jpg',
    slug: 'pothos',
    care: {
      sunlight: 'Low to bright indirect light.',
      watering: 'Water when top inch of soil is dry. Can also grow in water.',
      soil: 'General purpose potting soil.',
      temperature: '15°C to 30°C.',
      propagation: 'Stem cuttings in water or soil.'
    }
  },
  {
    id: '6',
    name: 'Peace Lily',
    commonName: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    category: 'indoor',
    light: 'low',
    water: 'medium',
    difficulty: 'beginner',
    description: 'Elegant white blooms and dark green leaves. Known for "telling" you when it needs water by drooping.',
    image: '/src/assets/images/plant_peace_lily_1793380566704.jpg',
    slug: 'peace-lily',
    care: {
      sunlight: 'Low to medium indirect light.',
      watering: 'Keep soil moist but not soggy. Mist leaves occasionally.',
      soil: 'Rich, well-draining soil.',
      temperature: '18°C to 27°C.',
      propagation: 'Division during repotting.'
    }
  },
  {
    id: '7',
    name: 'Areca Palm',
    commonName: 'Golden Cane Palm',
    scientificName: 'Dypsis lutescens',
    category: 'indoor',
    light: 'high',
    water: 'medium',
    difficulty: 'intermediate',
    description: 'A beautiful feathery palm that adds a tropical touch and acts as a natural humidifier.',
    image: '/src/assets/images/plant_areca_palm_1793380567326.jpg',
    slug: 'areca-palm',
    care: {
      sunlight: 'Bright indirect light. Direct sun can yellow the leaves.',
      watering: 'Keep soil moist in spring/summer, allow to dry slightly in winter.',
      soil: 'Peat-based potting mix.',
      temperature: '18°C to 24°C.',
      propagation: 'By seeds or division.'
    }
  },
  {
    id: '8',
    name: 'Jade Plant',
    commonName: 'Money Tree',
    scientificName: 'Crassula ovata',
    category: 'indoor',
    light: 'high',
    water: 'low',
    difficulty: 'beginner',
    description: 'A miniature tree-like succulent that is said to bring good luck and prosperity.',
    image: '/src/assets/images/plant_jade_plant_1793380566814.jpg',
    slug: 'jade-plant',
    care: {
      sunlight: 'Full sun to bright indirect light.',
      watering: 'Water when soil is dry. Avoid getting water on leaves.',
      soil: 'Succulent or cactus mix.',
      temperature: '18°C to 24°C.',
      propagation: 'Leaf or stem cuttings.'
    }
  },
  {
    id: '9',
    name: 'Hibiscus',
    commonName: 'Gudhal',
    scientificName: 'Hibiscus rosa-sinensis',
    category: 'outdoor',
    light: 'high',
    water: 'high',
    difficulty: 'intermediate',
    description: 'Classic Indian garden plant with large, colorful trumpet-shaped flowers.',
    image: '/src/assets/images/plant_hibiscus_1793380567170.jpg',
    slug: 'hibiscus',
    care: {
      sunlight: 'Full sun is essential for blooming.',
      watering: 'Needs consistent watering. Do not let soil dry out completely.',
      soil: 'Well-draining, fertile soil.',
      temperature: 'Warm, tropical climates.',
      propagation: 'Stem cuttings.'
    }
  },
  {
    id: '10',
    name: 'Zamioculcas Zamiifolia',
    commonName: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    category: 'indoor',
    light: 'low',
    water: 'low',
    difficulty: 'beginner',
    description: 'Extremely tough plant with waxy, dark green leaves. Can survive months of neglect.',
    image: '/src/assets/images/plant_zz_plant_1793380567970.jpg',
    slug: 'zz-plant',
    care: {
      sunlight: 'Low to bright indirect light. Very adaptable.',
      watering: 'Water only when soil is dry. Drought-tolerant.',
      soil: 'Well-draining potting mix.',
      temperature: '15°C to 24°C.',
      propagation: 'Leaf cuttings or division.'
    }
  },
  {
    id: '11',
    name: 'Curry Leaf',
    commonName: 'Kadi Patta',
    scientificName: 'Murraya koenigii',
    category: 'outdoor',
    light: 'high',
    water: 'medium',
    difficulty: 'intermediate',
    description: 'A must-have for Indian kitchens. An aromatic small tree that thrives in warm climates.',
    image: '/src/assets/images/plant_curry_leaf_1793380568112.jpg',
    slug: 'curry-leaf',
    care: {
      sunlight: 'Full sun to partial shade.',
      watering: 'Regular watering, but do not allow soil to become waterlogged.',
      soil: 'Fertile, well-draining soil.',
      temperature: 'Thrives in warm weather. Protect from frost.',
      propagation: 'By seeds or stem cuttings.'
    }
  },
  {
    id: '12',
    name: 'Tomato',
    commonName: 'Tamatar',
    scientificName: 'Solanum lycopersicum',
    category: 'outdoor',
    light: 'high',
    water: 'high',
    difficulty: 'beginner',
    description: 'Rewarding to grow in pots. Provides fresh, organic tomatoes for your home.',
    image: '/src/assets/images/blog_tomato_gardening_1793379117970.jpg',
    slug: 'tomato',
    care: {
      sunlight: 'At least 6-8 hours of direct sun.',
      watering: 'Regular, consistent watering at the base of the plant.',
      soil: 'Rich, loamy soil with compost.',
      temperature: '18°C to 30°C.',
      propagation: 'By seeds.'
    }
  }
];
