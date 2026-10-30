import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container } from '../components/ui/Base';
import { PlantCard } from '../components/PlantCard';
import { BlogCard } from '../components/BlogCard';
import { plants } from '../data/plants';
import { articles } from '../data/articles';

export const SearchPage = () => {
  const [query, setQuery] = useState('');

  const plantResults = useMemo(() => 
    query ? plants.filter(p => 
      p.commonName.toLowerCase().includes(query.toLowerCase()) || 
      p.name.toLowerCase().includes(query.toLowerCase())
    ) : [], [query]);

  const articleResults = useMemo(() => 
    query ? articles.filter(a => 
      a.title.toLowerCase().includes(query.toLowerCase()) || 
      a.excerpt.toLowerCase().includes(query.toLowerCase())
    ) : [], [query]);

  return (
    <>
      <SEO title="Search" />
      <section className="py-20 bg-cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-forest mb-8 text-center">Search Bloomora</h1>
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-stone-300" />
              <input 
                autoFocus
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search plants, articles, guides..."
                className="w-full bg-white border border-stone-200 pl-16 pr-8 py-5 text-xl rounded-sm focus:outline-none focus:border-forest shadow-sm"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          {!query ? (
            <div className="text-center py-20 text-stone-300">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Type something to start searching...</p>
            </div>
          ) : (
            <div className="space-y-24">
              {plantResults.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em] mb-10 pb-2 border-b border-stone-100 w-fit">Plants ({plantResults.length})</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plantResults.map(p => <PlantCard key={p.id} plant={p} />)}
                  </div>
                </div>
              )}

              {articleResults.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em] mb-10 pb-2 border-b border-stone-100 w-fit">Articles ({articleResults.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articleResults.map(a => <BlogCard key={a.id} article={a} />)}
                  </div>
                </div>
              )}

              {plantResults.length === 0 && articleResults.length === 0 && (
                <div className="text-center py-20 bg-stone-50">
                  <p className="text-stone-500 italic">No results found for "{query}". Try a different search term.</p>
                </div>
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
