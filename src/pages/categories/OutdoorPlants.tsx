
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { articles } from '../../data/articles';
import {
  Cloud,
  Sun,
  Droplets,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

export const OutdoorPlants = () => {
  const outdoorPlants = plants.filter(
    (plant) => plant.category === 'outdoor'
  );

  const outdoorArticles = articles.filter(
    (article) =>
      article.category === 'Plant Care' ||
      article.category === 'Seasonal Gardening'
  );

  const pageUrl = 'https://bloomora-gules.vercel.app/outdoor-plants';

  const categorySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Outdoor Plants & Garden Landscaping',
        description:
          'Explore outdoor plants and learn about sunlight, watering, and seasonal care for your garden.',
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
            name: 'Outdoor Plants',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Outdoor Plants – Garden Plants & Outdoor Care Guide"
        description="Discover outdoor plants for gardens and open spaces. Learn about sunlight requirements, watering, seasonal maintenance, and outdoor plant care with Bloomora."
        schemaMarkup={categorySchema}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Garden Landscapes
              </span>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Outdoor <br />
                <span className="text-sage italic">Elegance</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Create a beautiful outdoor sanctuary with plants suited
                to your garden's sunlight, soil, and local weather.
                Discover practical tips to help your outdoor garden thrive.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/outdoor_plants_hero_1793379949011.jpg"
                alt="Outdoor plants growing in a landscaped garden"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </header>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="flex gap-6">
              <Sun
                className="h-10 w-10 text-sage shrink-0"
                aria-hidden="true"
              />

              <div>
                <h2 className="font-serif font-bold text-xl text-forest mb-3">
                  Sunlight Requirements
                </h2>

                <p className="text-sm text-stone-500 leading-relaxed">
                  Choose plants according to their sunlight needs.
                  Some thrive in full sun, while others grow better
                  in partial shade or filtered light.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Droplets
                className="h-10 w-10 text-sage shrink-0"
                aria-hidden="true"
              />

              <div>
                <h2 className="font-serif font-bold text-xl text-forest mb-3">
                  Watering Practices
                </h2>

                <p className="text-sm text-stone-500 leading-relaxed">
                  Water according to soil moisture, plant type, weather,
                  and drainage. Outdoor plants may need more frequent
                  watering during hot, dry conditions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <Cloud
                className="h-10 w-10 text-sage shrink-0"
                aria-hidden="true"
              />

              <div>
                <h2 className="font-serif font-bold text-xl text-forest mb-3">
                  Seasonal Protection
                </h2>

                <p className="text-sm text-stone-500 leading-relaxed">
                  Select plants suited to your local climate and protect
                  sensitive varieties from extreme heat, heavy rain,
                  and winter cold.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <span className="text-sage text-xs font-bold uppercase tracking-widest">
              Explore our collection
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
              Recommended Outdoor Plants
            </h2>

            <p className="text-stone-500 mt-4 max-w-2xl">
              Explore plants for outdoor spaces and find varieties
              that suit your garden conditions.
            </p>
          </div>

          {outdoorPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {outdoorPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <p className="text-center py-12 text-stone-500">
              Outdoor plant recommendations are being updated.
              Explore our{' '}
              <Link to="/plants" className="text-forest underline">
                complete plant collection
              </Link>.
            </p>
          )}

          <div className="text-center mt-12">
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

      {outdoorArticles.length > 0 && (
        <section className="py-20 md:py-28 bg-stone-50">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sage text-xs font-bold uppercase tracking-widest">
                  Learn and grow
                </span>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
                  Outdoor Gardening Guides
                </h2>

                <p className="text-stone-500 mt-4">
                  Read practical gardening articles to improve your
                  plant care and seasonal gardening knowledge.
                </p>
              </div>

              <div className="space-y-4">
                {outdoorArticles.slice(0, 4).map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="flex items-center justify-between gap-4 p-5 bg-white border border-stone-100 hover:border-sage transition-colors group focus:outline-none focus:ring-2 focus:ring-forest"
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
