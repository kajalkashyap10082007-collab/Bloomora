import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Sprout, ShieldCheck, Sun, Quote, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container, Button } from '../components/ui/Base';
import { PlantCard } from '../components/PlantCard';
import { BlogCard } from '../components/BlogCard';
import { PlantQuiz } from '../components/PlantQuiz';
import { plants } from '../data/plants';
import { articles } from '../data/articles';
import { categories } from '../data/categories';

export const Home = () => {
  return (
    <>
      <SEO />
      
      {/* Hero Section - Asymmetric Editorial Layout */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
        <div className="editorial-container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 z-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                  Bloomora · Established 2026
                </span>
                <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest mb-8 leading-[0.9]">
                  Bring <br /> <span className="text-sage italic">Nature</span> <br /> Home.
                </h1>
                <p className="text-stone-500 text-lg mb-10 max-w-md leading-relaxed border-l-2 border-sage/30 pl-6">
                  Discover beautiful plants, simple gardening tips and creative ways to grow your own green space in any urban setting.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/plants" className="btn-premium">
                    Explore Plants
                  </Link>
                  <Link to="/about" className="group flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-forest hover:text-sage transition-colors">
                    Our Philosophy <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-6 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl"
              >
                <img 
                  src="/images/hero_botanical_garden_1793379116515.jpg" 
                  alt="Botanical Garden"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />
              </motion.div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sand/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-sage/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories - Curated Magazine Style */}
      <section className="py-32 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-5xl font-serif font-bold text-forest mb-6">Curated Collections</h2>
              <p className="text-stone-500">Tailored guides for every corner of your life, from low-light indoor sanctuaries to thriving rooftop orchards.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/${cat.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-stone-100">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-forest mb-2 group-hover:text-sage transition-colors">{cat.name}</h3>
                  <p className="text-stone-400 text-sm mb-4 line-clamp-2">{cat.description}</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-forest">
                    View Guide <ArrowUpRight className="h-3 w-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Garden Inspiration - Full Width Immersive */}
      <section className="bg-forest py-32 text-white overflow-hidden">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Quote className="h-10 w-10 text-sage/40 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              "To plant a garden is to believe in tomorrow."
            </h2>
            <p className="mt-8 text-sage uppercase tracking-[0.3em] text-xs font-bold">— Audrey Hepburn</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
            <div className="lg:col-span-7 relative group overflow-hidden">
              <img src="/images/garden_inspiration_1_1793380691580.jpg" alt="Minimalist Garden" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h4 className="text-2xl font-serif font-bold">The Minimalist Retreat</h4>
                <p className="text-white/60 text-sm">Modern lines meeting organic life.</p>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              <div className="relative group overflow-hidden">
                <img src="/images/garden_inspiration_2_1793380692478.jpg" alt="Cottage Path" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-sm">
                  <h4 className="font-serif font-bold">Wildflower Paths</h4>
                </div>
              </div>
              <div className="relative group overflow-hidden">
                <img src="/images/garden_inspiration_3_1793380692004.jpg" alt="Vertical Wall" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-sm">
                  <h4 className="font-serif font-bold">Vertical Living</h4>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Popular Plants - Clean Grid */}
      <section className="py-32 bg-cream">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-sage font-bold tracking-widest uppercase text-[10px] mb-2 block">The Essentials</span>
              <h2 className="text-5xl font-serif font-bold text-forest">Popular Plants</h2>
            </div>
            <Link to="/plants" className="link-premium text-xs font-bold uppercase tracking-widest text-forest">
              Browse Directory
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plants.slice(0, 4).map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </Container>
      </section>

      {/* Plant Finder Quiz - Interactive Section */}
      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-sage font-bold tracking-widest uppercase text-[10px] mb-4 block">Personalized Advice</span>
              <h2 className="text-5xl font-serif font-bold text-forest mb-8 leading-tight">Which plant is <br /><span className="text-sage italic">right for you?</span></h2>
              <p className="text-stone-500 text-lg mb-10 leading-relaxed">
                Take our 2-minute quiz to discover the perfect botanical companions for your unique home environment and gardening experience.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  { title: 'Environment Analysis', desc: 'We factor in your light and space.' },
                  { title: 'Lifestyle Match', desc: 'Plants that fit your daily routine.' },
                  { title: 'Expert Curation', desc: 'Handpicked from our database of 12+ species.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-6 w-6 rounded-full bg-sage/10 text-sage flex items-center justify-center shrink-0">
                      <Sprout className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-forest">{item.title}</h4>
                      <p className="text-xs text-stone-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <PlantQuiz />
          </div>
        </Container>
      </section>

      {/* Latest Journal - Magazine Grid */}
      <section className="py-32 bg-stone-50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-sage font-bold tracking-widest uppercase text-[10px] mb-2 block">The Journal</span>
              <h2 className="text-5xl font-serif font-bold text-forest">Gardening Stories</h2>
            </div>
            <Link to="/blog" className="link-premium text-xs font-bold uppercase tracking-widest text-forest">
              View All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.slice(0, 3).map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter - Minimalist Impact */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream -skew-x-12 translate-x-20 -z-10" />
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <Leaf className="h-12 w-12 text-sage mb-8" />
            <h2 className="text-5xl font-serif font-bold text-forest mb-8 leading-tight">Grow With Us</h2>
            <p className="text-stone-500 text-lg mb-12 max-w-lg leading-relaxed">
              Join our botanical community for monthly seasonal guides, plant care secrets, and exclusive editorial content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow bg-white border border-stone-200 px-6 py-4 text-sm focus:outline-none focus:border-forest transition-all"
                required
              />
              <button type="submit" className="btn-premium whitespace-nowrap">Join Now</button>
            </form>
            <div className="mt-12 flex gap-8">
               <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-stone-400 hover:text-forest transition-colors flex items-center gap-2">
                 <Instagram className="h-3 w-3" /> Instagram
               </a>
               <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-stone-400 hover:text-forest transition-colors flex items-center gap-2">
                 <Facebook className="h-3 w-3" /> Facebook
               </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
