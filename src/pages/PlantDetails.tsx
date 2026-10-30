import { useParams, Navigate, Link } from 'react-router-dom';
import { Sun, Droplets, Thermometer, Sprout, ShieldAlert, Share2, Bookmark, ArrowLeft, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container, Button } from '../components/ui/Base';
import { PlantCard } from '../components/PlantCard';
import { plants } from '../data/plants';

export const PlantDetails = () => {
  const { slug } = useParams();
  const plant = plants.find(p => p.slug === slug);

  if (!plant) return <Navigate to="/404" />;

  const relatedPlants = plants.filter(p => p.category === plant.category && p.id !== plant.id).slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Bloomora: ${plant.commonName}`,
          text: `Learn how to care for ${plant.commonName} on Bloomora.`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEO 
        title={`${plant.commonName} Care Guide`} 
        description={`Master the art of growing ${plant.commonName} (${plant.scientificName}). Detailed sunlight, watering, and soil requirements.`}
        image={plant.image}
      />
      
      {/* Editorial Header */}
      <section className="pt-20 pb-32 bg-cream">
        <Container>
          <div className="mb-12">
            <Link to="/plants" className="group inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-stone-400 hover:text-forest transition-colors">
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" /> Back to Directory
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-[10px] mb-6">
                Species Guide · {plant.category}
              </span>
              <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-4 leading-[0.9]">
                {plant.commonName}
              </h1>
              <p className="text-2xl text-sage italic font-serif mb-8">{plant.scientificName}</p>
              
              <div className="flex gap-4 mb-12">
                <button onClick={handleShare} className="p-3 bg-white text-stone-400 hover:text-forest transition-colors shadow-sm rounded-full">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-3 bg-white text-stone-400 hover:text-forest transition-colors shadow-sm rounded-full">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>

              <div className="prose prose-stone max-w-none">
                <p className="text-xl text-stone-600 leading-relaxed mb-8">
                  {plant.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-stone-200">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Light</span>
                  <span className="font-serif font-bold text-forest text-lg capitalize">{plant.light} Indirect</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Difficulty</span>
                  <span className="font-serif font-bold text-forest text-lg capitalize">{plant.difficulty}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-square overflow-hidden shadow-2xl">
                <img 
                  src={plant.image} 
                  alt={plant.commonName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-forest/5" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Care Grid */}
      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-100 border border-stone-100 overflow-hidden mb-24">
            {[
              { icon: <Sun />, label: 'Sunlight', value: plant.care.sunlight },
              { icon: <Droplets />, label: 'Watering', value: plant.care.watering },
              { icon: <Sprout />, label: 'Soil Type', value: plant.care.soil },
              { icon: <Thermometer />, label: 'Temperature', value: plant.care.temperature },
              { icon: <CheckCircle2 />, label: 'Propagation', value: plant.care.propagation },
              { icon: <ShieldAlert />, label: 'Alerts', value: 'Watch for yellow leaves and root rot.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 hover:bg-stone-50 transition-colors">
                <div className="h-10 w-10 text-sage mb-6">{item.icon}</div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-4">{item.label}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-forest mb-12 text-center underline decoration-sage/30 underline-offset-8">Growing Instructions</h2>
            <div className="prose prose-stone max-w-none space-y-12">
              <section>
                <h3 className="text-2xl font-serif font-bold text-forest mb-4">Finding the Perfect Spot</h3>
                <p>Placement is everything for the {plant.commonName}. Ensure you place it in a location that matches its need for {plant.light} light. Avoid placing it directly in the path of air conditioning drafts or heating vents.</p>
              </section>
              <section>
                <h3 className="text-2xl font-serif font-bold text-forest mb-4">Watering Wisely</h3>
                <p>{plant.care.watering} Remember that environmental factors like humidity and pot size will affect how quickly the soil dries out. Always perform the "finger test" before adding more water.</p>
              </section>
              <section>
                <h3 className="text-2xl font-serif font-bold text-forest mb-4">Nutrition & Feed</h3>
                <p>During the growing season (spring and summer), feed your {plant.commonName} with a balanced liquid fertilizer every 4-6 weeks. Reduce feeding in the winter months when growth naturally slows down.</p>
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Plants */}
      <section className="py-32 bg-stone-50 border-t border-stone-200">
        <Container>
          <div className="flex items-end justify-between mb-16">
             <h2 className="text-4xl font-serif font-bold text-forest underline decoration-sage/30 underline-offset-8">Keep Exploring</h2>
             <Link to="/plants" className="link-premium text-xs font-bold uppercase tracking-widest text-forest">View Full Directory</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {relatedPlants.map(p => <PlantCard key={p.id} plant={p} />)}
          </div>
        </Container>
      </section>
    </>
  );
};
