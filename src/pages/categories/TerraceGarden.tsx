
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { articles } from '../../data/articles';
import {
  Umbrella,
  Waves,
  Wind,
  Layers,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

export const TerraceGarden = () => {
  const pageUrl = 'https://bloomora-gules.vercel.app/terrace-garden';

  const terracePlants = plants
    .filter((plant) => plant.light === 'high')
    .slice(0, 4);

  const terraceArticles = articles.filter(
    (article) =>
      article.category === 'Seasonal Gardening' ||
      article.category === 'Plant Care' ||
      article.slug === 'seasonal-gardening-india'
  );

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Terrace Garden & Rooftop Gardening Ideas',
        description:
          'Learn how to create a safe and beautiful terrace garden with waterproofing, weight management, wind protection, and suitable plants.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Bloomora',
          url: 'https://bloomora-gules.vercel.app/',
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
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
            name: 'Terrace Garden',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Terrace Garden Ideas – Rooftop Plants & Gardening Guide"
        description="Discover terrace garden ideas, rooftop plants, waterproofing precautions, wind protection, and sunlight management tips to create a beautiful rooftop garden with Bloomora."
        schemaMarkup={schemaMarkup}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/terrace_garden_hero_1793379948690.jpg"
                alt="Beautiful rooftop terrace garden with plants and greenery"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Rooftop Living
              </span>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Rooftop <br />
                <span className="text-sage italic">Escape</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Transform unused rooftop space into a green retreat.
                Learn about waterproofing, weight distribution, wind
                protection, and sunlight management for a healthier
                terrace garden.
              </p>
            </div>
          </div>
        </Container>
      </header>

      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sage text-xs font-bold uppercase tracking-widest">
                Plan your rooftop garden
              </span>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
                Terrace Garden Essentials
              </h2>

              <p className="text-stone-500 mt-4 max-w-2xl mx-auto">
                Prepare your rooftop space carefully before adding
                containers, raised beds, or permanent garden structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex gap-6 p-7 md:p-10 bg-stone-50 border border-stone-100">
                <Waves
                  className="h-10 w-10 text-sage shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-serif font-bold text-xl text-forest mb-4">
                    Waterproofing
                  </h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    Check the roof's waterproofing and drainage before
                    installing garden structures. Consult a qualified
                    professional about suitable waterproofing measures.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-7 md:p-10 bg-stone-50 border border-stone-100">
                <Layers
                  className="h-10 w-10 text-sage shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-serif font-bold text-xl text-forest mb-4">
                    Weight Management
                  </h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    Consult a structural engineer to understand the
                    roof slab's safe load capacity. Account for wet soil,
                    containers, water, and garden structures.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-7 md:p-10 bg-stone-50 border border-stone-100">
                <Wind
                  className="h-10 w-10 text-sage shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-serif font-bold text-xl text-forest mb-4">
                    Wind Protection
                  </h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    Rooftops can experience strong winds. Secure pots,
                    use stable supports, and choose plants suited to
                    exposed rooftop conditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-7 md:p-10 bg-stone-50 border border-stone-100">
                <Umbrella
                  className="h-10 w-10 text-sage shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-serif font-bold text-xl text-forest mb-4">
                    Sunlight Management
                  </h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    Rooftops may receive intense direct sunlight.
                    Use suitable shade nets or protective covers for
                    plants that cannot tolerate strong midday heat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <Container>
          <div className="text-center mb-12">
            <span className="text-sage text-xs font-bold uppercase tracking-widest">
              Explore suitable varieties
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
              Plants for Sunny Terraces
            </h2>

            <p className="text-stone-500 mt-4 max-w-2xl mx-auto">
              Explore plants listed with high sunlight requirements.
              Check individual care needs before placing them on your rooftop.
            </p>
          </div>

          {terracePlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {terracePlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <p className="text-center py-12 text-stone-500">
              Plant recommendations are being updated. Explore our{' '}
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

      {terraceArticles.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sage text-xs font-bold uppercase tracking-widest">
                  Bloomora gardening journal
                </span>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mt-3">
                  Terrace & Seasonal Gardening Guides
                </h2>

                <p className="text-stone-500 mt-4">
                  Explore useful articles about seasonal gardening
                  and practical plant care.
                </p>
              </div>

              <div className="space-y-4">
                {terraceArticles.slice(0, 4).map((article) => (
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
