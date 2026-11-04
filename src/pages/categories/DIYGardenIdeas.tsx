
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { GardenPlanner } from '../../components/GardenPlanner';
import { articles } from '../../data/articles';
import {
  Hammer,
  Scissors,
  Pencil,
  Ruler,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

export const DIYGardenIdeas = () => {
  const pageUrl =
    'https://bloomora-gules.vercel.app/diy-garden-ideas';

  const diyArticles = articles.filter(
    (article) =>
      article.category === 'DIY Garden Ideas' ||
      article.slug === 'homemade-organic-fertilizer'
  );

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'DIY Garden Ideas & Visual Planner',
        description:
          'Explore creative DIY garden ideas and use an interactive garden planner to design your balcony, terrace, or outdoor green space.',
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
            name: 'DIY Garden Ideas',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="DIY Garden Ideas – Creative Projects & Garden Planner"
        description="Explore practical DIY garden ideas and plan your balcony or terrace garden with our interactive visual garden planner. Discover creative ways to design your green space."
        schemaMarkup={schemaMarkup}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
              DIY Garden Workshop
            </span>

            <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
              Create <br />
              <span className="text-sage italic">Your Vision</span>.
            </h1>

            <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Turn your gardening ideas into reality. Explore creative DIY
              projects, plan your garden layout, and make the most of your
              balcony, terrace, or outdoor space.
            </p>
          </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold uppercase tracking-widest">
              Design Your Green Space
            </span>

            <h2 className="text-4xl font-serif font-bold text-forest mt-4 mb-4">
              Interactive Garden Planner
            </h2>

            <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Arrange garden elements to visualize your balcony or terrace
              layout. Experiment with placement before setting up your
              real garden.
            </p>
          </div>

          <GardenPlanner />

          <p className="text-xs text-stone-400 text-center mt-6">
            Planner layouts are for visual planning. Check actual space,
            sunlight, drainage, and load capacity before installing heavy
            planters or structures.
          </p>
        </Container>
      </section>

      <section className="py-32 bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sage text-xs font-bold uppercase tracking-widest">
                Plan Before You Build
              </span>

              <h2 className="text-4xl font-serif font-bold text-forest mb-8 mt-3">
                DIY Project Essentials
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Hammer className="h-6 w-6 text-sage" />

                  <h3 className="font-bold text-forest">Structure</h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    Choose durable, weather-resistant materials for outdoor
                    planters, shelves, and garden structures.
                  </p>
                </div>

                <div className="space-y-4">
                  <Scissors className="h-6 w-6 text-sage" />

                  <h3 className="font-bold text-forest">Tools</h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    Use suitable gardening tools such as pruning shears,
                    hand trowels, and gloves for safe plant care.
                  </p>
                </div>

                <div className="space-y-4">
                  <Ruler className="h-6 w-6 text-sage" />

                  <h3 className="font-bold text-forest">Measurements</h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    Measure your available space and leave enough room for
                    plant growth, movement, and drainage.
                  </p>
                </div>

                <div className="space-y-4">
                  <Pencil className="h-6 w-6 text-sage" />

                  <h3 className="font-bold text-forest">Design</h3>

                  <p className="text-sm text-stone-500 leading-relaxed">
                    Sketch your layout and consider plant height, sunlight,
                    colors, and spacing before arranging your garden.
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-stone-100 overflow-hidden shadow-2xl">
              <img
                src="/images/contact_us_hero_1793380690307.jpg"
                alt="DIY gardening tools and supplies for a home garden"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {diyArticles.length > 0 && (
        <section className="py-24 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-sage text-xs font-bold uppercase tracking-widest">
                  Learn Something New
                </span>

                <h2 className="text-4xl font-serif font-bold text-forest mt-3">
                  DIY Gardening Guides
                </h2>
              </div>

              <Link
                to="/blog"
                className="text-forest text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                Explore All Articles <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {diyArticles.map((article) => (
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
