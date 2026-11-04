
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { BlogCard } from '../../components/BlogCard';
import { articles } from '../../data/articles';
import { Sun, CloudRain, Snowflake } from 'lucide-react';

export const SeasonalGardening = () => {
  const pageUrl =
    'https://bloomora-gules.vercel.app/seasonal-gardening';

  const seasonalArticles = articles.filter(
    (article) => article.category === 'Seasonal Gardening'
  );

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Seasonal Gardening Guides for India',
        description:
          'Explore seasonal gardening guides for India, including summer, monsoon, and winter planting tips and plant care advice.',
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
            name: 'Seasonal Gardening',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Seasonal Gardening in India – Summer, Monsoon & Winter Tips"
        description="Explore seasonal gardening tips for India. Learn about summer plant care, monsoon gardening, winter planting, watering, and seasonal garden maintenance."
        schemaMarkup={schemaMarkup}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                The Garden Calendar
              </span>

              <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Nature's <br />
                <span className="text-sage italic">Rhythm</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Discover what to grow and how to care for your plants through
                India's changing seasons. Explore practical tips for summer,
                monsoon, and winter gardening.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/seasonal_gardening_hero_1793379948110.jpg"
                alt="Seasonal garden with healthy plants growing throughout the year"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sage text-xs font-bold uppercase tracking-widest">
                Grow With Every Season
              </span>
              <h2 className="text-4xl font-serif font-bold text-forest mt-4">
                Indian Garden Cycles
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto mt-5 leading-relaxed">
                Understand how seasonal weather affects your plants and adjust
                your gardening routine accordingly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 border border-stone-100 bg-stone-50 text-center">
                <Sun className="h-10 w-10 text-amber-500 mx-auto mb-6" />

                <h3 className="font-serif font-bold text-2xl text-forest mb-4">
                  Summer
                </h3>

                <p className="text-xs uppercase font-bold tracking-widest text-stone-400 mb-6">
                  Approximately March – June
                </p>

                <p className="text-sm text-stone-600 leading-relaxed">
                  Protect plants from intense afternoon heat, check soil
                  moisture regularly, and use mulch to help retain moisture.
                  Choose heat-tolerant plants suited to your region.
                </p>
              </div>

              <div className="p-10 border border-stone-100 bg-stone-50 text-center">
                <CloudRain className="h-10 w-10 text-blue-500 mx-auto mb-6" />

                <h3 className="font-serif font-bold text-2xl text-forest mb-4">
                  Monsoon
                </h3>

                <p className="text-xs uppercase font-bold tracking-widest text-stone-400 mb-6">
                  Approximately July – September
                </p>

                <p className="text-sm text-stone-600 leading-relaxed">
                  Check drainage after heavy rainfall, avoid overwatering, and
                  watch for fungal diseases. The season can also be suitable
                  for propagation and planting many species.
                </p>
              </div>

              <div className="p-10 border border-stone-100 bg-stone-50 text-center">
                <Snowflake className="h-10 w-10 text-sage mx-auto mb-6" />

                <h3 className="font-serif font-bold text-2xl text-forest mb-4">
                  Winter
                </h3>

                <p className="text-xs uppercase font-bold tracking-widest text-stone-400 mb-6">
                  Approximately October – February
                </p>

                <p className="text-sm text-stone-600 leading-relaxed">
                  Grow suitable cool-season flowers and vegetables, protect
                  sensitive plants from frost where needed, and adjust
                  watering according to soil moisture and temperature.
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 text-center mt-8">
              Seasonal month ranges are approximate and may vary across
              different regions of India.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-sage text-xs font-bold uppercase tracking-widest">
                Gardening Knowledge
              </span>
              <h2 className="text-4xl font-serif font-bold text-forest mt-3">
                Seasonal Gardening Reads
              </h2>
            </div>

            <Link
              to="/blog"
              className="link-premium text-xs font-bold uppercase tracking-widest text-forest"
            >
              Explore All Articles
            </Link>
          </div>

          {seasonalArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {seasonalArticles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-500 py-12">
              Seasonal gardening guides will be added here soon.
              <Link
                to="/blog"
                className="text-forest font-semibold ml-1 underline"
              >
                Explore our blog.
              </Link>
            </p>
          )}
        </Container>
      </section>
    </>
  );
};
