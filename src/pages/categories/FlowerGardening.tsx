import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Container } from '../../components/ui/Base';
import { PlantCard } from '../../components/PlantCard';
import { plants } from '../../data/plants';
import { Heart, Sparkles, Palette, Calendar } from 'lucide-react';

export const FlowerGardening = () => {
  const flowerPlants = plants.filter(p => p.slug === 'bougainvillea' || p.slug === 'hibiscus' || p.slug === 'peace-lily');

  return (
    <>
      <SEO title="Flower Gardening & Seasonal Blooms" description="Add vibrant colors and natural fragrances to your home with exquisite flowering plants." />
      
      <header className="pt-32 pb-20 bg-cream">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Floral Arts</span>
                <h1 className="text-6xl md:text-7xl font-serif font-bold text-forest mb-8 leading-[0.9]">Blooms <br /><span className="text-sage italic">In Season</span>.</h1>
                <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                   Add vibrant colors and natural fragrances to your home. From classic roses to exotic tropicals, discover how to keep your garden blooming all year.
                </p>
             </div>
             <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <img src="/images/flower_gardening_hero_1793379948427.jpg" alt="Flower Garden" className="w-full h-full object-cover" />
             </div>
           </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
           <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                 <div className="space-y-8">
                    <h2 className="text-4xl font-serif font-bold text-forest">The Art of the Bloom.</h2>
                    <p className="text-stone-500 leading-relaxed">Successful flower gardening requires a balance of timing, nutrition, and correct pruning. Learn our editorial secrets for a professional floral display.</p>
                    <div className="space-y-6">
                       <div className="flex gap-4">
                          <Palette className="h-6 w-6 text-sage shrink-0" />
                          <p className="text-sm text-stone-600"><span className="font-bold text-forest">Color Theory:</span> Combine complementary colors for high-impact visual appeal.</p>
                       </div>
                       <div className="flex gap-4">
                          <Calendar className="h-6 w-6 text-sage shrink-0" />
                          <p className="text-sm text-stone-600"><span className="font-bold text-forest">Succession Planting:</span> Plan your sowing so as one flower fades, another begins.</p>
                       </div>
                       <div className="flex gap-4">
                          <Sparkles className="h-6 w-6 text-sage shrink-0" />
                          <p className="text-sm text-stone-600"><span className="font-bold text-forest">Deadheading:</span> Removing spent blooms encourages the plant to produce more energy for new flowers.</p>
                       </div>
                    </div>
                 </div>
                 <div className="aspect-[4/5] bg-stone-100 overflow-hidden shadow-2xl">
                    <img src="/images/plant_hibiscus_1793380567170.jpg" alt="Hibiscus" className="w-full h-full object-cover" />
                 </div>
              </div>
           </div>
        </Container>
      </section>

      <section className="py-32 bg-cream">
        <Container>
           <div className="flex items-end justify-between mb-16">
              <h2 className="text-4xl font-serif font-bold text-forest">Our Favorite Blooms</h2>
              <Link to="/plants" className="link-premium text-xs font-bold uppercase tracking-widest text-forest">View All</Link>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {flowerPlants.map(p => <PlantCard key={p.id} plant={p} />)}
           </div>
        </Container>
      </section>
    </>
  );
};
