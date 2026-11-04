
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { articles } from '../../data/articles';
import {
  MapPin,
  Thermometer,
  Wind,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

export const BalconyGarden = () => {
  const balconyPlantIds = ['3', '4', '5', '9'];

  const balconyPlants = plants.filter((plant) =>
    balconyPlantIds.includes(plant.id)
  );

  const balconyArticles = articles.filter(
    (article) =>
      article.category === 'Balcony Garden' ||
      article.slug === 'small-balcony-garden-ideas'
  );

  const pageUrl = 'https://bloomora-gules.vercel.app/balcony-garden';

  const categorySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Balcony Garden Ideas & Small Space Gardening',
        description:
          'Discover balcony garden ideas, vertical planters, container gardening, and plants for small outdoor spaces.',
        url: pageUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Bloomora',
          url: 'https://bloomora-gules.vercel.app/',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://bloomora-gules.vercel.app/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Balcony Garden',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Balcony Garden Ideas – Plants & Small Space Gardening"
        description="Explore beautiful balcony garden ideas, space-saving planters, vertical gardening tips, and suitable plants for apartment balconies with Bloomora."
        schemaMarkup={categorySchema}
      />

      <header className="relative pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-video overflow-hidden shadow-2xl">
              <img
                src="/images/garden_balcony_inspiration_1793379117661.jpg"
                alt="Balcony garden with greenery and space-saving plant arrangements"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Urban Retreats
              </span>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Balcony <br />
                <span className="text-sage italic">Oasis</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Transform your apartment balcony into a green retreat.
                Discover space-saving container ideas, hanging baskets,
                vertical planters, and plants suited to small spaces.
              </p>
            </div>
          </div>
        </Container>
      </header>

      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-8">
                Small Space, Big Impact
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-10 w-10 bg-sage/10 text-sage rounded-full flex items-center justify-center shrink-0">
                    <Wind className="h-4 w-4" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-forest mb-2">
                      Wind Protection
                    </h3>

                    <p className="text-sm text-stone-500 leading-relaxed">
                      Balconies can experience strong winds. Use stable
                      containers, secure hanging pots, and choose plants
                      suited to your balcony's exposure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-10 w-10 bg-sage/10 text-sage rounded-full flex items-center justify-center shrink-0">
                    <Thermometer className="h-4 w-4" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-forest mb-2">
                      Temperature & Watering
                    </h3>

                    <p className="text-sm text-stone-500 leading-relaxed">
                      Balcony containers may heat up and dry out quickly.
                      Check soil moisture regularly and adjust watering
                      according to weather and plant requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-10 w-10 bg-sage/10 text-sage rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-forest mb-2">
                      Vertical Gardening
                    </h3>

                    <p className="text-sm text-stone-500 leading-relaxed">
                      Make use of wall space with suitable vertical
                      planters and trellises. Secure installations safely
                      and avoid overloading balcony railings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-stone-100 overflow-hidden shadow-xl">
                <img
                  src="/images/plant_bougainvillea_1793380565116.jpg"
                  alt="Bougainvillea flowering plant for balcony gardening"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="aspect-[3/4] bg-stone-100 overflow-hidden shadow-xl mt-12">
                <img
                  src="/images/plant_hibiscus_1793380567170.jpg"
                  alt="Hibiscus flowering plant suitable for balcony gardens"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <Container>
          <div className="text-center mb-12">
            <span className="text-sage text-xs font-bold uppercase tracking-widest">
              Small space favourites
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
              Plants for Balcony Gardens
            </h2>

            <p className="text-stone-500 mt-4 max-w-2xl mx-auto">
              Explore plants from our collection that can help bring
              greenery and colour to your balcony.
            </p>
          </div>

          {balconyPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {balconyPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <p className="text-center py-12 text-stone-500">
              Balcony plant recommendations are being updated. Explore our{' '}
              <Link to="/plants" className="text-forest underline">
                complete plant collection
              </Link>.
            </p>
          )}

          <div className="text-center mt-10">
            <Link
              to="/plants"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-sage"
            >
              Explore All Plants
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {balconyArticles.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sage text-xs font-bold uppercase tracking-widest">
                  Gardening inspiration
                </span>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
                  Balcony Gardening Guides
                </h2>

                <p className="text-stone-500 mt-4">
                  Learn practical ways to plan and maintain a beautiful
                  garden in a limited space.
                </p>
              </div>

              <div className="space-y-4">
                {balconyArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="flex items-center justify-between gap-4 p-5 border border-stone-100 hover:border-sage transition-colors group focus:outline-none focus:ring-2 focus:ring-forest"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <BookOpen
                        className="h-5 w-5 text-sage shrink-0"
                        aria-hidden="true"
                      />

                      <span className="font-medium text-forest">
                        {article.title}
                      </span>
                    </div>

                    <ArrowRight
                      className="h-5 w-5 text-sage shrink-0 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-sage"
                >
                  Read All Gardening Articles
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
