import { useState, useMemo } from 'react';
import { Search, Filter, X, ChevronDown, SlidersHorizontal, Grid3X3, LayoutList } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container, Button } from '../components/ui/Base';
import { PlantCard } from '../components/PlantCard';
import { plants } from '../data/plants';

export const ExplorePlants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredPlants = useMemo(() => {
    return plants
      .filter(p => {
        const matchesSearch = p.commonName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
        const matchesDifficulty = difficultyFilter === 'all' || p.difficulty === difficultyFilter;
        return matchesSearch && matchesCategory && matchesDifficulty;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.commonName.localeCompare(b.commonName);
        if (sortBy === 'difficulty') return a.difficulty.localeCompare(b.difficulty);
        return 0;
      });
  }, [searchTerm, categoryFilter, difficultyFilter, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setDifficultyFilter('all');
    setSortBy('name');
  };

  return (
    <>
      <SEO title="Explore Plants" description="Browse our curated collection of indoor and outdoor plants. Expertly selected species for every home and garden." />
      
      <header className="pt-32 pb-20 bg-cream border-b border-stone-100">
        <Container>
           <div className="max-w-3xl">
              <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Full Catalog</span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest leading-[0.9] mb-8">Plant <br /><span className="text-sage italic">Directory</span>.</h1>
              <p className="text-stone-500 text-lg max-w-lg leading-relaxed">
                A meticulously documented library of botanical species. Filter by environment, care level, and light requirements to find your match.
              </p>
           </div>
        </Container>
      </header>

      <section className="py-20 bg-white">
        <Container>
          {/* Refined Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="relative flex-grow w-full">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-300" />
              <input 
                type="text" 
                placeholder="Search by common or scientific name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-transparent border-b border-stone-200 focus:border-forest outline-none text-lg font-serif transition-colors"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-8 w-full lg:w-auto">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest">Environment</span>
                <div className="relative group">
                  <select 
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="bg-transparent border-b border-stone-200 pr-8 py-1 text-sm font-bold text-forest focus:outline-none cursor-pointer appearance-none"
                  >
                    <option value="all">All Types</option>
                    <option value="indoor">Indoor Only</option>
                    <option value="outdoor">Outdoor Only</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-stone-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest">Difficulty</span>
                <div className="relative group">
                  <select 
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="bg-transparent border-b border-stone-200 pr-8 py-1 text-sm font-bold text-forest focus:outline-none cursor-pointer appearance-none"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-stone-400 pointer-events-none" />
                </div>
              </div>

              { (searchTerm || categoryFilter !== 'all' || difficultyFilter !== 'all') && (
                <button 
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-[10px] font-bold text-sage uppercase tracking-widest hover:text-forest transition-colors mt-4 lg:mt-0"
                >
                  <X className="h-3 w-3" /> Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Results Grid */}
          <div className="mb-12 flex items-center justify-between border-b border-stone-50 pb-6">
            <span className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.2em]">
              Showing {filteredPlants.length} Botanical Records
            </span>
            <div className="flex gap-4">
               <Grid3X3 className="h-4 w-4 text-forest cursor-pointer" />
               <LayoutList className="h-4 w-4 text-stone-300 cursor-pointer" />
            </div>
          </div>

          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border border-dashed border-stone-200 rounded-sm">
              <Search className="h-12 w-12 text-stone-200 mx-auto mb-6 opacity-20" />
              <p className="text-stone-400 italic font-serif text-xl">No species found matching your criteria.</p>
              <button onClick={clearFilters} className="btn-premium mt-8">Reset Directory</button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
