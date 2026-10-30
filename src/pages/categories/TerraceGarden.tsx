import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { Umbrella, Waves, Wind, Layers } from 'lucide-react';

export const TerraceGarden = () => {
  return (
    <>
      <SEO title="Terrace Garden & Rooftop Oasis" description="Turn your roof into a thriving ecosystem of shade trees, flowering vines, and relaxation spaces." />
      
      <header className="pt-32 pb-20 bg-cream">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <img src="/src/assets/images/terrace_garden_hero_1793379948690.jpg" alt="Terrace Garden" className="w-full h-full object-cover" />
             </div>
             <div>
                <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Rooftop Living</span>
                <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">Rooftop <br /><span className="text-sage italic">Escape</span>.</h1>
                <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                  Terrace gardens offer ample sunlight and fresh breezes. Learn how to set up waterproof raised beds, weight distribution, and windbreaks for a successful rooftop oasis.
                </p>
             </div>
           </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
           <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-serif font-bold text-forest mb-16 text-center">Structural Essentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="flex gap-8 p-10 bg-stone-50 border border-stone-100">
                    <Waves className="h-10 w-10 text-sage shrink-0" />
                    <div>
                       <h4 className="font-serif font-bold text-xl text-forest mb-4">Waterproofing</h4>
                       <p className="text-sm text-stone-500 leading-relaxed">Essential professional grade waterproofing is required before installing any permanent garden structures or heavy pots on your roof.</p>
                    </div>
                 </div>
                 <div className="flex gap-8 p-10 bg-stone-50 border border-stone-100">
                    <Layers className="h-10 w-10 text-sage shrink-0" />
                    <div>
                       <h4 className="font-serif font-bold text-xl text-forest mb-4">Weight Loading</h4>
                       <p className="text-sm text-stone-500 leading-relaxed">Consult a structural engineer to understand the weight limits of your slab. Distribute weight evenly using lightweight potting mixes.</p>
                    </div>
                 </div>
                 <div className="flex gap-8 p-10 bg-stone-50 border border-stone-100">
                    <Wind className="h-10 w-10 text-sage shrink-0" />
                    <div>
                       <h4 className="font-serif font-bold text-xl text-forest mb-4">Wind Protection</h4>
                       <p className="text-sm text-stone-500 leading-relaxed">Rooftops can be very windy. Install sturdy trellises or windbreaks and secure pots to prevent them from tipping over.</p>
                    </div>
                 </div>
                 <div className="flex gap-8 p-10 bg-stone-50 border border-stone-100">
                    <Umbrella className="h-10 w-10 text-sage shrink-0" />
                    <div>
                       <h4 className="font-serif font-bold text-xl text-forest mb-4">Sun Management</h4>
                       <p className="text-sm text-stone-500 leading-relaxed">Intense rooftop sun can be harsh. Use shade nets or strategically placed pergolas to protect delicate species from midday heat.</p>
                    </div>
                 </div>
              </div>
           </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
           <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-forest">Species For Full Sun</h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {plants.filter(p => p.light === 'high').slice(0, 4).map(p => <PlantCard key={p.id} plant={p} />)}
           </div>
        </Container>
      </section>
    </>
  );
};
