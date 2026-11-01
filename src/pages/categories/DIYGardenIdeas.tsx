
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { GardenPlanner } from '../../components/GardenPlanner';
import { Hammer, Scissors, Pencil, Ruler } from 'lucide-react';

export const DIYGardenIdeas = () => {
  const pageUrl =
    'https://bloomora-gules.vercel.app/diy-garden-ideas';

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
        title="DIY Garden Ideas & Visual Planner"
        description="Discover creative DIY garden ideas and plan your dream balcony or terrace garden with our interactive visual garden planner."
        schemaMarkup={schemaMarkup}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
              Workshop
            </span>

            <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
              Create <br />
              <span className="text-sage italic">Your Vision</span>.
            </h1>

            <p className="text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
              From hand-crafted planters to structural layout planning. Our
              interactive tools and guides help you build a garden that is
              uniquely yours.
            </p>
          </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-forest mb-4">
              Interactive Garden Planner
            </h2>
            <p className="text-stone-400">
              Drag and drop elements to visualize your balcony or terrace
              arrangement.
            </p>
          </div>

          <GardenPlanner />
        </Container>
      </section>

      <section className="py-32 bg-stone-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-forest mb-8">
                DIY Project Essentials
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Hammer className="h-6 w-6 text-sage" />
                  <h4 className="font-bold text-forest">Structure</h4>
                  <p className="text-sm text-stone-500">
                    Always prioritize durability and weather resistance in
                    your outdoor builds.
                  </p>
                </div>

                <div className="space-y-4">
                  <Scissors className="h-6 w-6 text-sage" />
                  <h4 className="font-bold text-forest">Tools</h4>
                  <p className="text-sm text-stone-500">
                    Invest in high-quality pruning shears and precision
                    trowels for better results.
                  </p>
                </div>

                <div className="space-y-4">
                  <Ruler className="h-6 w-6 text-sage" />
                  <h4 className="font-bold text-forest">Scale</h4>
                  <p className="text-sm text-stone-500">
                    Measure your space twice to ensure your planters don't
                    overcrowd the area.
                  </p>
                </div>

                <div className="space-y-4">
                  <Pencil className="h-6 w-6 text-sage" />
                  <h4 className="font-bold text-forest">Design</h4>
                  <p className="text-sm text-stone-500">
                    Sketch your ideas first to visualize the balance of height
                    and color.
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-stone-100 overflow-hidden shadow-2xl">
              <img
                src="/images/contact_us_hero_1793380690307.jpg"
                alt="Gardening tools and DIY supplies for creating a home garden"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
