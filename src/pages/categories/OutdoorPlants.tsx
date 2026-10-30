import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { Cloud, Sun, Droplets, Map } from 'lucide-react';

export const OutdoorPlants = () => {
  const outdoorPlants = plants.filter(p => p.category === 'outdoor');

  return (
    <>
      <SEO title="Outdoor Plants & Landscapes" description="Create a breathtaking outdoor sanctuary with plants designed to thrive in natural sunlight and open gardens." />
      
      <header className="pt-32 pb-20 bg-cream">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Garden Landscapes</span>
                <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">Outdoor <br /><span className="text-sage italic">Elegance</span>.</h1>
                <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                  Create a breathtaking outdoor sanctuary with plants designed to soak up natural sunlight and withstand changing weather conditions.
                </p>
             </div>
             <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <img src="/src/assets/images/outdoor_plants_hero_1793379949011.jpg" alt="Outdoor Plants" className="w-full h-full object-cover" />
             </div>
           </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <div className="flex gap-6">
                 <Sun className="h-10 w-10 text-sage shrink-0" />
                 <div>
                    <h4 className="font-serif font-bold text-xl text-forest mb-3">Sun Exposure</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">Position your plants based on their daily sunlight requirements—full sun, partial shade, or dappled light.</p>
                 </div>
              </div>
              <div className="flex gap-6">
                 <Droplets className="h-10 w-10 text-sage shrink-0" />
                 <div>
                    <h4 className="font-serif font-bold text-xl text-forest mb-3">Irrigation Control</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">Outdoor plants require deeper, more frequent watering compared to indoor species, especially in summer.</p>
                 </div>
              </div>
              <div className="flex gap-6">
                 <Cloud className="h-10 w-10 text-sage shrink-0" />
                 <div>
                    <h4 className="font-serif font-bold text-xl text-forest mb-3">Climate Resilience</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">Select local species or hardy varieties that are naturally adapted to your specific regional weather patterns.</p>
                 </div>
              </div>
           </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {outdoorPlants.map(p => <PlantCard key={p.id} plant={p} />)}
          </div>
        </Container>
      </section>
    </>
  );
};
