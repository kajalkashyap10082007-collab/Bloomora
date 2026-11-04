
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { articles } from '../../data/articles';
import { Sparkles, Palette, Calendar, BookOpen, ArrowRight } from 'lucide-react';

export const FlowerGardening = () => {
  const flowerPlants = plants.filter(
    (p) =>
      p.slug === 'bougainvillea' ||
      p.slug === 'hibiscus' ||
      p.slug === 'peace-lily'
  );

  const relatedArticles = articles.filter(
    (article) =>
      article.category === 'Seasonal Gardening' ||
      article.category === 'Plant Care'
  );

  const pageUrl =
    'https://bloomora-gules.vercel.app/flower-gardening';

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Flower Gardening & Seasonal Blooms',
        description:
          'Discover flowering plants and learn about seasonal blooms, flower care, pruning, and garden design for a colorful home garden.',
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
            name: 'Flower Gardening',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Flower Gardening – Flower Plants & Seasonal Bloom Tips"
        description="Discover flowering plants and learn flower gardening at home. Explore seasonal blooms, pruning, deadheading, and practical flower care tips."
        schemaMarkup={schemaMarkup}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Floral Arts
              </span>

              <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Blooms <br />
                <span className="text-sage italic">In Season</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Bring vibrant colors and natural beauty to your home. Discover
                flowering plants and learn how to care for seasonal blooms
                with the right sunlight, watering, and pruning.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/flower_gardening_hero_1793379948427.jpg"
                alt="Colorful flower garden filled with blooming ornamental plants"
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
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-serif font-bold text-forest">
                  The Art of the Bloom
                </h2>

                <p className="text-stone-500 leading-relaxed">
                  Healthy flowering plants need suitable sunlight, balanced
                  nutrition, regular watering, and timely pruning. Understand
                  their growing needs to enjoy beautiful blooms throughout
                  their flowering seasons.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Palette className="h-6 w-6 text-sage shrink-0" />
                    <p className="text-sm text-stone-600">
                      <span className="font-bold text-forest">
                        Color Combinations:
                      </span>{' '}
                      Combine complementary flower colors to create an
                      attractive and balanced garden.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Calendar className="h-6 w-6 text-sage shrink-0" />
                    <p className="text-sm text-stone-600">
                      <span className="font-bold text-forest">
                        Seasonal Planning:
                      </span>{' '}
                      Choose flowering plants according to your local climate
                      and their natural blooming seasons.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Sparkles className="h-6 w-6 text-sage shrink-0" />
                    <p className="text-sm text-stone-600">
                      <span className="font-bold text-forest">
                        Deadheading:
                      </span>{' '}
                      Remove faded flowers from suitable plants to keep them
                      tidy and encourage further flowering where applicable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/5] bg-stone-100 overflow-hidden shadow-2xl">
                <img
                  src="/images/plant_hibiscus_1793380567170.jpg"
                  alt="Hibiscus flower blooming on a flowering garden plant"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-sage text-xs font-bold uppercase tracking-widest">
                Explore Plants
              </span>
              <h2 className="text-4xl font-serif font-bold text-forest mt-3">
                Our Favorite Blooms
              </h2>
            </div>

            <Link
              to="/plants"
              className="link-premium text-xs font-bold uppercase tracking-widest text-forest"
            >
              View All Plants
            </Link>
          </div>

          {flowerPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {flowerPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-500 py-12">
              Flowering plants will be added to this collection soon.
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
                  Gardening Knowledge
                </span>
                <h2 className="text-4xl font-serif font-bold text-forest mt-3">
                  Flower Care & Seasonal Guides
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
