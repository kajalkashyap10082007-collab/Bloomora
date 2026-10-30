import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container } from '../components/ui/Base';
import { BlogCard } from '../components/BlogCard';
import { articles } from '../data/articles';

export const Blog = () => {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <>
      <SEO title="Gardening Journal" description="Expert botanical advice, seasonal guides, and heartwarming gardening stories from the Bloomora editorial team." />
      
      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Bloomora Editorial</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest mb-8 leading-[0.9]">The <br /><span className="text-sage italic">Journal</span>.</h1>
            <p className="text-stone-500 text-lg max-w-lg mx-auto leading-relaxed">
              A curated collection of gardening wisdom, from fundamental care guides to advanced botanical studies.
            </p>
          </div>
        </Container>
      </header>

      {/* Featured Entry */}
      <section className="py-20 bg-white">
        <Container>
          <Link 
            to={`/blog/${featuredArticle.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-0 border border-stone-100 shadow-2xl overflow-hidden"
          >
            <div className="lg:col-span-7 aspect-video lg:aspect-auto overflow-hidden">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-sage mb-6">
                <span>Featured Story</span>
                <span className="text-stone-200">/</span>
                <span>{featuredArticle.category}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-8 leading-tight group-hover:text-sage transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed mb-12 line-clamp-3">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-forest">
                 Read Entry <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* Journal Filters */}
      <section className="py-8 bg-stone-50 border-y border-stone-100 sticky top-20 z-30 overflow-x-auto">
        <Container>
          <div className="flex items-center gap-12 whitespace-nowrap min-w-max">
            <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest">Browse Topics</span>
            {['All Entries', 'Indoor Plants', 'Outdoor Plants', 'Plant Care', 'Vegetable Gardening', 'DIY Ideas'].map(cat => (
              <button key={cat} className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-forest transition-colors">
                {cat}
              </button>
            ))}
            <div className="ml-auto relative flex items-center">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-300" />
              <input 
                type="text" 
                placeholder="Search journal..." 
                className="bg-transparent border-b border-stone-200 pl-8 pr-4 py-2 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-forest w-64 transition-all"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Journal Grid */}
      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {remainingArticles.map(article => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="mt-32 flex justify-center">
            <nav className="flex items-center gap-4">
              <button className="h-12 w-12 flex items-center justify-center border border-stone-200 text-forest hover:bg-forest hover:text-white transition-all text-xs font-bold">1</button>
              <button className="h-12 w-12 flex items-center justify-center border border-stone-200 text-stone-400 hover:text-forest transition-all text-xs font-bold">2</button>
              <button className="h-12 w-12 flex items-center justify-center border border-stone-200 text-stone-400 hover:text-forest transition-all text-xs font-bold">3</button>
              <div className="h-px w-8 bg-stone-200 mx-2" />
              <button className="h-12 px-8 flex items-center justify-center border border-stone-200 text-stone-400 hover:text-forest transition-all text-[10px] font-bold uppercase tracking-widest">Next Page</button>
            </nav>
          </div>
        </Container>
      </section>
    </>
  );
};
