
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { articles } from '../../data/articles';
import { Leaf, Sun, Droplets, ArrowRight } from 'lucide-react';

export const IndoorPlants = () => {
  const indoorPlants = plants.filter(p => p.category === 'indoor');

  const indoorArticles = articles.filter(
    a => a.category === 'Indoor Plants' || a.category === 'Plant Care'
  );

  const pageUrl = 'https://bloomora-gules.vercel.app/indoor-plants';

  const categorySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Indoor Plants & Home Sanctuary',
        description:
          'Bring nature indoors with our curated collection of low-light, air-purifying, and beginner-friendly indoor plants.',
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
        title="Indoor Plants & Home Sanctuary"
        description="Bring nature indoors with our curated collection of low-light, air-purifying, and beginner-friendly indoor plants."
        schemaMarkup={categorySchema}
      />

      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Interior Living
              </span>

              <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                Indoor <br />
                <span className="text-sage italic">Sanctuary</span>.
              </h1>

              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Transform your living spaces into lush retreats. Indoor plants
                adapt gracefully to lower light conditions and bring vitality
                to any room.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <img
                src="/images/blog_indoor_care_guide_1793379117819.jpg"
                alt="Indoor plants adding greenery to a home interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-serif font-bold text-forest">
              Recommended Species
            </h2>

            <Link
              to="/plants"
              className="link-premium text-xs font-bold uppercase tracking-widest text-forest"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {indoorPlants.slice(0, 4).map(p => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32 bg-stone-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-serif font-bold text-forest mb-6">
                Essential Indoor Care
              </h2>

              <p className="text-stone-500">
                Master the basics of indoor gardening with our quick reference
                guide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 border border-stone-100 text-center">
                <Sun className="h-8 w-8 text-sage mx-auto mb-6" />

                <h4 className="font-bold text-forest mb-4">
                  Lighting Zones
                </h4>

                <p className="text-sm text-stone-500 leading-relaxed text-left">
                  Most indoor plants prefer bright indirect light. Avoid direct
                  midday sun which can scorch delicate leaves.
                </p>
              </div>

              <div className="bg-white p-10 border border-stone-100 text-center">
                <Droplets className="h-8 w-8 text-sage mx-auto mb-6" />

                <h4 className="font-bold text-forest mb-4">
                  The Water Rule
                </h4>

                <p className="text-sm text-stone-500 leading-relaxed text-left">
                  Overwatering is the #1 killer. Always check the top 2 inches
                  of soil. If it's dry, it's time to water.
                </p>
              </div>

              <div className="bg-white p-10 border border-stone-100 text-center">
                <Leaf className="h-8 w-8 text-sage mx-auto mb-6" />

                <h4 className="font-bold text-forest mb-4">
                  Clean Leaves
                </h4>

                <p className="text-sm text-stone-500 leading-relaxed text-left">
                  Dust buildup prevents photosynthesis. Wipe leaves weekly
                  with a damp soft cloth.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
