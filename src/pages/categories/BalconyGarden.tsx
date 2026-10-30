import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { MapPin, Thermometer, Wind, ArrowRight } from 'lucide-react';

export const BalconyGarden = () => {
  const balconyPlants = plants.filter(p => p.id === '3' || p.id === '4' || p.id === '5' || p.id === '9');

  return (
    <>
      <SEO title="Balcony Garden Inspiration" description="Transform your apartment balcony into a private oasis with vertical planters, hanging pots, and small-space gardening tips." />
      
      <header className="relative pt-32 pb-20 bg-cream">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-video overflow-hidden shadow-2xl">
                <img src="/images/garden_balcony_inspiration_1793379117661.jpg" alt="Balcony Garden" className="w-full h-full object-cover" />
             </div>
             <div>
                <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Urban Retreats</span>
                <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">Balcony <br /><span className="text-sage italic">Oasis</span>.</h1>
                <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                  Maximize your apartment living. Discover space-saving container ideas, hanging baskets, and trailing varieties that thrive in small spaces.
                </p>
             </div>
           </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
           <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl font-serif font-bold text-forest mb-8">Small Space, Big Impact.</h2>
                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="h-10 w-10 bg-sage/10 text-sage rounded-full flex items-center justify-center shrink-0">
                          <Wind className="h-4 w-4" />
                       </div>
                       <div>
                          <h4 className="font-bold text-forest mb-2">Wind Resistance</h4>
                          <p className="text-sm text-stone-500">Balconies can be windy. Choose sturdy stemmed plants like Bougainvillea or hardy succulents.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="h-10 w-10 bg-sage/10 text-sage rounded-full flex items-center justify-center shrink-0">
                          <Thermometer className="h-4 w-4" />
                       </div>
                       <div>
                          <h4 className="font-bold text-forest mb-2">Microclimate</h4>
                          <p className="text-sm text-stone-500">Potted plants on balconies dry out faster. Ensure consistent watering and use mulching to retain moisture.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="h-10 w-10 bg-sage/10 text-sage rounded-full flex items-center justify-center shrink-0">
                          <MapPin className="h-4 w-4" />
                       </div>
                       <div>
                          <h4 className="font-bold text-forest mb-2">Vertical Potential</h4>
                          <p className="text-sm text-stone-500">Use wall space with trellis or vertical planters to create a lush backdrop without losing floor space.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-[3/4] bg-stone-100 overflow-hidden shadow-xl">
                    <img src="/images/plant_bougainvillea_1793380565116.jpg" alt="Inspiration" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-[3/4] bg-stone-100 overflow-hidden shadow-xl mt-12">
                    <img src="/images/plant_hibiscus_1793380567170.jpg" alt="Inspiration" className="w-full h-full object-cover" />
                 </div>
              </div>
           </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-forest">Perfect for Balconies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {balconyPlants.map(p => <PlantCard key={p.id} plant={p} />)}
          </div>
        </Container>
      </section>
    </>
  );
};
