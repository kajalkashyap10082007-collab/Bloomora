
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { articles } from '../../data/articles';
import { Sprout, Shovel, Sun, Droplets, BookOpen, ArrowRight } from 'lucide-react';

export const VegetableGardening = () => {
  const vegPlants = plants.filter(
    (p) => p.slug === 'tomato' || p.slug === 'curry-leaf'
  );

  const relatedArticles = articles.filter(
    (article) =>
      article.category === 'Vegetable Gardening' ||
      article.slug === 'grow-tomatoes-in-pots'
  );

  const pageUrl =
    'https://bloomora-gules.vercel.app/vegetable-gardening';

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Vegetable Gardening & Kitchen Greens',
        description:
          'Learn how to grow vegetables and kitchen greens at home with container gardening, soil preparation, sunlight, watering, and harvesting tips.',
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
            name: 'Vegetable Gardening',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Vegetable Gardening at Home – Grow Your Own Food"
        description="Learn how to grow vegetables and kitchen greens at home. Explore container gardening, soil preparation, sunlight, watering, and harvesting tips."
        schemaMarkup={schemaMarkup}
      />

      <header className="relative pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Home Harvest
              </span>

              <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Grown at <br />
                <span className="text-sage italic">Home</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Enjoy growing fresh vegetables and kitchen greens in your own
                garden. Learn how to prepare containers, care for edible plants,
                and harvest home-grown produce.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/vegetable_gardening_hero_1793379947727.jpg"
                alt="Home vegetable garden with fresh edible plants growing in containers"
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
            <div className="text-center mb-20">
              <h2 className="text-5xl font-serif font-bold text-forest mb-6">
                The Path to Homegrown Food
              </h2>

              <p className="text-stone-400 max-w-2xl mx-auto">
                A healthy harvest starts with the right growing conditions.
                Follow these practical steps to help your edible plants thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shovel />,
                  title: 'Soil Preparation',
                  desc: 'Use nutrient-rich compost and a loose, well-draining growing medium.',
                },
                {
                  icon: <Sprout />,
                  title: 'Planting',
                  desc: 'Choose suitable seeds or healthy seedlings for your season and space.',
                },
                {
                  icon: <Sun />,
                  title: 'Sunlight',
                  desc: 'Many fruiting vegetables grow best with around 6–8 hours of direct sunlight.',
                },
                {
                  icon: <Droplets />,
                  title: 'Watering & Harvest',
                  desc: 'Water according to soil moisture and harvest vegetables when ready.',
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-8 border border-stone-100 hover:shadow-xl transition-all"
                >
                  <div className="text-sage mb-6">{item.icon}</div>
                  <h3 className="font-bold text-forest mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-sage text-xs font-bold uppercase tracking-widest">
                Grow at Home
              </span>
              <h2 className="text-4xl font-serif font-bold text-forest mt-3">
                Edible Plants
              </h2>
            </div>

            <Link
              to="/plants"
              className="link-premium text-xs font-bold uppercase tracking-widest text-forest"
            >
              Explore Full Catalog
            </Link>
          </div>

          {vegPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {vegPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-500 py-12">
              Vegetable plants will be added to this collection soon.
            </p>
          )}
        </Container>
      </section>

      {relatedArticles.length > 0 && (
        <section className="py-24 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-sage text-xs font-bold uppercase tracking-widest">
                  Learn & Grow
                </span>
                <h2 className="text-4xl font-serif font-bold text-forest mt-3">
                  Vegetable Gardening Guides
                </h2>
              </div>

              <Link
                to="/blog"
                className="text-forest text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                View All Articles <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group border border-stone-100 p-8 hover:shadow-lg transition-all"
                >
                  <BookOpen className="text-sage mb-5" size={24} />
                  <h3 className="text-xl font-serif font-bold text-forest mb-3 group-hover:text-sage transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-widest text-forest">
                    Read Guide <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
