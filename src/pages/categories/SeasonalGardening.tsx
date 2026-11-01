
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { BlogCard } from '../../components/BlogCard';
import { articles } from '../../data/articles';
import { Sun, CloudRain, Snowflake } from 'lucide-react';

export const SeasonalGardening = () => {
  const pageUrl =
    'https://bloomora-gules.vercel.app/seasonal-gardening';

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
        title="Seasonal Gardening Guides for India"
        description="Discover month-by-month gardening tips for Indian summers, monsoons, and winters. Learn what to sow, prune, and harvest in every season."
        schemaMarkup={schemaMarkup}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                The Calendar
              </span>

              <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Nature's <br />
                <span className="text-sage italic">Rhythm</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Understand what to sow, prune, and harvest during monsoon,
                winter, and summer to keep your garden thriving all year round.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/seasonal_gardening_hero_1793379948110.jpg"
                alt="Seasonal garden with plants growing throughout the year"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-forest mb-16 text-center">
              Indian Garden Cycles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 border border-stone-100 bg-stone-50 text-center">
                <Sun className="h-10 w-10 text-amber-500 mx-auto mb-6" />
                <h4 className="font-serif font-bold text-2xl text-forest mb-4">
                  Summer
                </h4>
                <p className="text-xs uppercase font-bold tracking-widest text-stone-400 mb-6">
                  March - June
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Focus on drought-tolerant species. Increase watering
                  frequency and use mulch to protect roots from high heat.
                </p>
              </div>

              <div className="p-10 border border-stone-100 bg-stone-50 text-center">
                <CloudRain className="h-10 w-10 text-blue-500 mx-auto mb-6" />
                <h4 className="font-serif font-bold text-2xl text-forest mb-4">
                  Monsoon
                </h4>
                <p className="text-xs uppercase font-bold tracking-widest text-stone-400 mb-6">
                  July - September
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  The ideal time for propagation and new plantings. Ensure
                  excellent drainage to prevent root rot during heavy rains.
                </p>
              </div>

              <div className="p-10 border border-stone-100 bg-stone-50 text-center">
                <Snowflake className="h-10 w-10 text-sage mx-auto mb-6" />
                <h4 className="font-serif font-bold text-2xl text-forest mb-4">
                  Winter
                </h4>
                <p className="text-xs uppercase font-bold tracking-widest text-stone-400 mb-6">
                  October - February
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Perfect for exotic flowers and leafy vegetables. Reduce
                  watering as evaporation rates drop significantly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-serif font-bold text-forest">
              Seasonal Reads
            </h2>

            <Link
              to="/blog"
              className="link-premium text-xs font-bold uppercase tracking-widest text-forest"
            >
              All Articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {articles.slice(0, 3).map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
