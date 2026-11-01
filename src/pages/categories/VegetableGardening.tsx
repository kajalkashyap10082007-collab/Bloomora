
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { Sprout, Shovel, Sun, Droplets } from 'lucide-react';

export const VegetableGardening = () => {
  const vegPlants = plants.filter(
    (p) =>
      p.slug === 'tomato' ||
      p.slug === 'curry-leaf' ||
      p.slug === 'aloe-vera'
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
          'Learn how to grow fresh vegetables and kitchen greens at home with container gardening, soil preparation, sunlight, and harvesting tips.',
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
        title="Vegetable Gardening & Kitchen Greens"
        description="Grow fresh vegetables and kitchen greens at home. Explore container gardening, soil preparation, sunlight, and harvesting tips."
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
                Experience the joy of harvesting fresh, chemical-free produce
                from your own pots and raised beds. From herbs to hearty
                vegetables.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/vegetable_gardening_hero_1793379947727.jpg"
                alt="Home vegetable garden with fresh edible plants growing in containers"
                className="w-full h-full object-cover"
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
                The Path to Self-Sufficiency
              </h2>

              <p className="text-stone-400 max-w-2xl mx-auto">
                Growing your own food is a journey of patience, care, and
                immense reward. Follow these steps to ensure a bountiful
                harvest.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shovel />,
                  title: 'Soil Prep',
                  desc: 'Use rich organic compost and well-draining soil mixes.',
                },
                {
                  icon: <Sprout />,
                  title: 'Sowing',
                  desc: 'Start with high-quality heirloom seeds for better yields.',
                },
                {
                  icon: <Sun />,
                  title: 'Sunlight',
                  desc: 'Most edibles need at least 6 hours of direct sun.',
                },
                {
                  icon: <Droplets />,
                  title: 'Harvesting',
                  desc: 'Pick vegetables at their peak for maximum flavor.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 border border-stone-100 hover:shadow-xl transition-all"
                >
                  <div className="text-sage mb-6">{item.icon}</div>
                  <h4 className="font-bold text-forest mb-4">
                    {item.title}
                  </h4>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <h2 className="text-4xl font-serif font-bold text-forest">
              Edible Species
            </h2>

            <Link
              to="/plants"
              className="link-premium text-xs font-bold uppercase tracking-widest text-forest"
            >
              Full Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {vegPlants.map((p) => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
