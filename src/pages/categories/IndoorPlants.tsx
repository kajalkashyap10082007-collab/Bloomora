
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { articles } from '../../data/articles';
import { Leaf, Sun, Droplets, BookOpen, ArrowRight } from 'lucide-react';

export const IndoorPlants = () => {
  const indoorPlants = plants.filter(
    (plant) => plant.category === 'indoor'
  );

  const indoorArticles = articles.filter(
    (article) =>
      article.category === 'Indoor Plants' ||
      article.category === 'Plant Care'
  );

  const pageUrl = 'https://bloomora-gules.vercel.app/indoor-plants';

  const categorySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Indoor Plants & Home Sanctuary',
        description:
          'Explore indoor plants, beginner-friendly plant care advice, lighting tips, and watering guidance for a greener home.',
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
            name: 'Indoor Plants',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Indoor Plants – Best Houseplants & Indoor Plant Care"
        description="Explore beginner-friendly indoor plants and learn about sunlight, watering, and plant care. Find inspiration for a greener and healthier home with Bloomora."
        schemaMarkup={categorySchema}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Interior Living
              </span>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Indoor <br />
                <span className="text-sage italic">Sanctuary</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Transform your living spaces into lush green retreats.
                Discover indoor plants for different lighting conditions
                and learn how to care for them with confidence.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/blog_indoor_care_guide_1793379117819.jpg"
                alt="Indoor houseplants bringing natural greenery into a home"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </header>

      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-sage text-xs font-bold uppercase tracking-widest">
                Explore our collection
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
                Recommended Indoor Plants
              </h2>
            </div>

            <Link
              to="/plants"
              className="link-premium text-xs font-bold uppercase tracking-widest text-forest inline-flex items-center gap-2"
            >
              View All Plants
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {indoorPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {indoorPlants.slice(0, 4).map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <p className="text-center py-12 text-stone-500">
              Indoor plant recommendations are being updated. Explore our{' '}
              <Link to="/plants" className="text-forest underline">
                complete plant collection
              </Link>.
            </p>
          )}
        </Container>
      </section>

      <section className="py-20 md:py-32 bg-stone-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sage text-xs font-bold uppercase tracking-widest">
                Plant care essentials
              </span>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-6 mt-3">
                Essential Indoor Plant Care
              </h2>

              <p className="text-stone-500">
                Learn the basics of indoor gardening to keep your plants
                healthy and thriving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 md:p-10 border border-stone-100 text-center">
                <Sun
                  className="h-8 w-8 text-sage mx-auto mb-6"
                  aria-hidden="true"
                />

                <h3 className="font-bold text-forest mb-4">
                  Lighting Requirements
                </h3>

                <p className="text-sm text-stone-500 leading-relaxed text-left">
                  Many indoor plants grow well in bright, indirect light.
                  However, sunlight requirements vary by species. Check
                  your plant's individual lighting needs.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 border border-stone-100 text-center">
                <Droplets
                  className="h-8 w-8 text-sage mx-auto mb-6"
                  aria-hidden="true"
                />

                <h3 className="font-bold text-forest mb-4">
                  Smart Watering
                </h3>

                <p className="text-sm text-stone-500 leading-relaxed text-left">
                  Avoid watering on a fixed schedule. Check the soil
                  moisture and consider your plant species, pot drainage,
                  temperature, and season before watering.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 border border-stone-100 text-center">
                <Leaf
                  className="h-8 w-8 text-sage mx-auto mb-6"
                  aria-hidden="true"
                />

                <h3 className="font-bold text-forest mb-4">
                  Clean Leaves
                </h3>

                <p className="text-sm text-stone-500 leading-relaxed text-left">
                  Gently remove dust from suitable plant leaves using a
                  soft, damp cloth. Clean foliage helps leaves receive
                  light effectively.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {indoorArticles.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sage text-xs font-bold uppercase tracking-widest">
                  Bloomora gardening journal
                </span>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
                  Indoor Plant Care Guides
                </h2>

                <p className="text-stone-500 mt-4">
                  Read practical guides to understand indoor plants
                  and improve your gardening skills.
                </p>
              </div>

              <div className="space-y-4">
                {indoorArticles.slice(0, 4).map((article) => (
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
                  Explore All Gardening Articles
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
