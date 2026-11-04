
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
    name: 'Snake Plant',
    commonName: 'Snake Plant',
    scientificName: 'Dracaena trifasciata',
    category: 'indoor',
    light: 'low',
    water: 'low',
    difficulty: 'beginner',
    description: 'Discover the Snake Plant, a low-maintenance indoor plant with upright architectural leaves. It tolerates low light and needs infrequent watering.',
    image: '/images/plant_snake_plant_luxury_1793379117019.jpg',
    slug: 'snake-plant',
    care: {
      sunlight: 'Grows in low to bright indirect light. Can tolerate some direct sunlight.',
      watering: 'Water when the soil has dried out completely. Avoid overwatering.',
      soil: 'Use a well-draining succulent or cactus potting mix.',
      temperature: 'Prefers temperatures between 15°C and 30°C. Protect from cold drafts.',
      propagation: 'Propagate through leaf cuttings or division of rhizomes.'
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
    description: 'Monstera deliciosa is a popular tropical indoor plant known for its large split leaves. It adds a lush tropical look to homes and indoor gardens.',
    image: '/images/plant_monstera_deliciosa_1793380569079.jpg',
    slug: 'monstera-deliciosa',
    care: {
      sunlight: 'Bright indirect light is ideal. Avoid prolonged harsh direct sunlight.',
      watering: 'Water when the top 2 inches of soil feel dry.',
      soil: 'Use an airy, well-draining potting mix with perlite.',
      temperature: 'Prefers warm conditions between 18°C and 30°C.',
      propagation: 'Propagate using stem cuttings containing at least one node.'
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
    description: 'Bougainvillea is a colorful flowering shrub with papery bracts. It is popular in Indian gardens, sunny balconies and terraces.',
    image: '/images/plant_bougainvillea_1793380565116.jpg',
    slug: 'bougainvillea',
    care: {
      sunlight: 'Needs at least 6 hours of direct sunlight for good flowering.',
      watering: 'Water deeply when the soil begins to dry. Avoid waterlogging.',
      soil: 'Use well-draining soil.',
      temperature: 'Thrives in warm weather and needs protection from frost.',
      propagation: 'Can be propagated through stem cuttings.'
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
    description: 'Aloe Vera is a popular succulent with fleshy leaves. It is easy to maintain and grows well in bright spaces with minimal watering.',
    image: '/images/plant_aloe_vera_1793380565672.jpg',
    slug: 'aloe-vera',
    care: {
      sunlight: 'Prefers bright light and can tolerate some direct sunlight.',
      watering: 'Water only when the soil has dried completely. Reduce watering during cooler months.',
      soil: 'Use a fast-draining cactus or succulent potting mix.',
      temperature: 'Generally grows well in temperatures between 13°C and 27°C.',
      propagation: 'Propagate by separating offsets, commonly called pups.'
    }
  },
  {
    id: '5',
    name: 'Pothos',
    commonName: 'Money Plant',
    scientificName: 'Epipremnum aureum',
    category: 'indoor',
    light: 'low',
    water: 'medium',
    difficulty: 'beginner',
    description: 'Money Plant, also known as Pothos, is a popular indoor climbing vine in Indian homes. It is adaptable, easy to grow and suitable for pots or hanging baskets.',
    image: '/images/plant_pothos_1793380565764.jpg',
    slug: 'pothos',
    care: {
      sunlight: 'Grows in low to bright indirect light.',
      watering: 'Water when the top inch of soil feels dry. Avoid keeping the soil constantly wet.',
      soil: 'Use a general-purpose, well-draining potting mix.',
      temperature: 'Prefers temperatures between 15°C and 30°C.',
      propagation: 'Propagate through stem cuttings in water or soil.'
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
    description: 'Peace Lily is a beautiful indoor plant with dark green foliage and elegant white flowers. Its leaves may droop when it needs water.',
    image: '/images/plant_peace_lily_1793380566704.jpg',
    slug: 'peace-lily',
    care: {
      sunlight: 'Prefers low to medium indirect light.',
      watering: 'Keep the soil lightly moist but never waterlogged.',
      soil: 'Use rich, well-draining potting soil.',
      temperature: 'Prefers temperatures between 18°C and 27°C.',
      propagation: 'Propagate through division when repotting.'
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
    description: 'Areca Palm is a tropical indoor palm with soft, feathery leaves. It brings a fresh green look to living rooms and bright indoor spaces.',
    image: '/images/plant_areca_palm_1793380567326.jpg',
    slug: 'areca-palm',
    care: {
      sunlight: 'Prefers bright indirect light. Avoid harsh afternoon sunlight.',
      watering: 'Water when the upper layer of soil begins to dry. Avoid waterlogging.',
      soil: 'Use a well-draining, peat-based potting mix.',
      temperature: 'Prefers warm conditions, generally around 18°C to 24°C.',
      propagation: 'Can be propagated through division or seeds.'
    }
  },
  {
    id: '8',
    name: 'Jade Plant',
    commonName: 'Jade Plant',
    scientificName: 'Crassula ovata',
    category: 'indoor',
    light: 'high',
    water: 'low',
    difficulty: 'beginner',
    description: 'Jade Plant is a tree-like succulent with thick leaves and sturdy stems. It is popular as a decorative indoor plant and is associated with good luck.',
    image: '/images/plant_jade_plant_1793380566814.jpg',
    slug: 'jade-plant',
    care: {
      sunlight: 'Prefers bright light and can tolerate direct morning sunlight.',
      watering: 'Water when the soil has dried out completely.',
      soil: 'Use a well-draining cactus or succulent mix.',
      temperature: 'Grows well in moderate to warm temperatures.',
      propagation: 'Propagate through leaf or stem cuttings.'
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
    description: 'Hibiscus, commonly called Gudhal in India, is a popular flowering garden plant with large, colorful blooms. It grows best in sunny outdoor spaces.',
    image: '/images/plant_hibiscus_1793380567170.jpg',
    slug: 'hibiscus',
    care: {
      sunlight: 'Needs plenty of direct sunlight for healthy growth and flowering.',
      watering: 'Water regularly and keep the soil evenly moist without waterlogging.',
      soil: 'Use fertile, well-draining soil.',
      temperature: 'Prefers warm conditions and protection from cold weather.',
      propagation: 'Can be propagated through stem cuttings.'
    }
  },
  {
    id: '10',
    name: 'ZZ Plant',
    commonName: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    category: 'indoor',
    light: 'low',
    water: 'low',
    difficulty: 'beginner',
    description: 'ZZ Plant is a hardy indoor plant with glossy, dark green leaves. It tolerates low-light conditions and requires relatively little watering.',
    image: '/images/plant_zz_plant_1793380567970.jpg',
    slug: 'zz-plant',
    care: {
      sunlight: 'Grows in low to bright indirect light.',
      watering: 'Allow the soil to dry before watering again.',
      soil: 'Use a well-draining potting mix.',
      temperature: 'Prefers warm indoor temperatures.',
      propagation: 'Can be propagated through leaf cuttings or division.'
    }
  },
  {
    id: '11',
    name: 'Curry Leaf Plant',
    commonName: 'Kadi Patta',
    scientificName: 'Murraya koenigii',
    category: 'outdoor',
    light: 'high',
    water: 'medium',
    difficulty: 'intermediate',
    description: 'Curry Leaf Plant is an aromatic small tree commonly grown in Indian homes. Its fresh leaves are widely used in everyday cooking.',
    image: '/images/plant_curry_leaf_1793380568112.jpg',
    slug: 'curry-leaf',
    care: {
      sunlight: 'Prefers full sunlight to partial shade.',
      watering: 'Water regularly while allowing excess water to drain.',
      soil: 'Use fertile, well-draining soil.',
      temperature: 'Grows best in warm weather. Protect from frost.',
      propagation: 'Can be propagated through seeds or stem cuttings.'
    }
  },
  {
    id: '12',
    name: 'Tomato Plant',
    commonName: 'Tamatar',
    scientificName: 'Solanum lycopersicum',
    category: 'outdoor',
    light: 'high',
    water: 'high',
    difficulty: 'beginner',
    description: 'Tomato is a rewarding vegetable plant for home gardens and containers. Grow it in a sunny spot to enjoy fresh tomatoes at home.',
    image: '/images/blog_tomato_gardening_1793379117970.jpg',
    slug: 'tomato',
    care: {
      sunlight: 'Needs around 6 to 8 hours of direct sunlight daily.',
      watering: 'Water consistently at the base of the plant. Avoid irregular watering.',
      soil: 'Use fertile, well-draining soil enriched with compost.',
      temperature: 'Grows well in moderate to warm conditions.',
      propagation: 'Usually grown from seeds.'
    }
  }
];
