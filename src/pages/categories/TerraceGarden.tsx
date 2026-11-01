
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { Umbrella, Waves, Wind, Layers } from 'lucide-react';

export const TerraceGarden = () => {
  const pageUrl = 'https://bloomora-gules.vercel.app/terrace-garden';

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Terrace Garden & Rooftop Oasis',
        description:
          'Learn how to create a safe and beautiful terrace garden with waterproofing, weight management, wind protection, and sun-loving plants.',
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
        title="Terrace Garden & Rooftop Oasis"
        description="Create a beautiful terrace garden with rooftop plants, waterproofing tips, wind protection, and smart sunlight management."
        schemaMarkup={schemaMarkup}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/terrace_garden_hero_1793379948690.jpg"
                alt="Beautiful rooftop terrace garden with plants and greenery"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Rooftop Living
              </span>

              <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Rooftop <br />
                <span className="text-sage italic">Escape</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Terrace gardens offer ample sunlight and fresh breezes. Learn
                how to set up waterproof raised beds, manage weight distribution,
                and install windbreaks for a successful rooftop oasis.
              </p>
            </div>
          </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-forest mb-16 text-center">
              Structural Essentials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-8 p-10 bg-stone-50 border border-stone-100">
                <Waves className="h-10 w-10 text-sage shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-xl text-forest mb-4">
                    Waterproofing
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Professional-grade waterproofing is essential before
                    installing permanent garden structures or heavy pots on
                    your roof.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 p-10 bg-stone-50 border border-stone-100">
                <Layers className="h-10 w-10 text-sage shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-xl text-forest mb-4">
                    Weight Loading
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Consult a structural engineer to understand your roof
                    slab's weight limits. Distribute weight evenly using
                    lightweight potting mixes.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 p-10 bg-stone-50 border border-stone-100">
                <Wind className="h-10 w-10 text-sage shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-xl text-forest mb-4">
                    Wind Protection
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Rooftops can be very windy. Install sturdy trellises or
                    windbreaks and secure pots to prevent them from tipping
                    over.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 p-10 bg-stone-50 border border-stone-100">
                <Umbrella className="h-10 w-10 text-sage shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-xl text-forest mb-4">
                    Sun Management
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Intense rooftop sunlight can be harsh. Use shade nets or
                    strategically placed pergolas to protect delicate plants
                    from midday heat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-forest">
              Plants for Full Sun
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plants
              .filter((plant) => plant.light === 'high')
              .slice(0, 4)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </Container>
      </section>
    </>
  );
};
