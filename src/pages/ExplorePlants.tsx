
import { useState, useMemo } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container } from '../components/ui/Base';
import { PlantCard } from '../components/PlantCard';
import { plants } from '../data/plants';

export const ExplorePlants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredPlants = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return plants
      .filter((plant) => {
        const matchesSearch =
          plant.commonName.toLowerCase().includes(search) ||
          plant.name.toLowerCase().includes(search);

        const matchesCategory =
          categoryFilter === 'all' ||
          plant.category === categoryFilter;

        const matchesDifficulty =
          difficultyFilter === 'all' ||
          plant.difficulty === difficultyFilter;

        return matchesSearch && matchesCategory && matchesDifficulty;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.commonName.localeCompare(b.commonName);
        }

        if (sortBy === 'difficulty') {
          return a.difficulty.localeCompare(b.difficulty);
        }

        return 0;
      });
  }, [searchTerm, categoryFilter, difficultyFilter, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setDifficultyFilter('all');
    setSortBy('name');
  };

  const hasActiveFilters =
    searchTerm.trim() !== '' ||
    categoryFilter !== 'all' ||
    difficultyFilter !== 'all';

  return (
    <>
      <SEO
        title="Explore Indoor & Outdoor Plants"
        description="Explore Bloomora's plant directory featuring indoor and outdoor plants. Discover plant names, care difficulty and find the right plants for your home and garden."
      />

      <header className="pt-32 pb-20 bg-cream border-b border-stone-100">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
              Full Catalog
            </span>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest leading-[0.9] mb-8">
              Plant <br />
              <span className="text-sage italic">Directory</span>.
            </h1>

            <p className="text-stone-500 text-lg max-w-lg leading-relaxed">
              Explore our collection of indoor and outdoor plants.
              Discover botanical species by environment and care level
              to find the right plants for your home and garden.
            </p>
          </div>
        </Container>
      </header>

      <section
        className="py-20 bg-white"
        aria-label="Explore and filter plants"
      >
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="relative flex-grow w-full">
              <label htmlFor="plant-search" className="sr-only">
                Search plants by common or scientific name
              </label>

              <Search
                aria-hidden="true"
                className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-300"
              />

              <input
                id="plant-search"
                type="search"
                placeholder="Search by common or scientific name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-transparent border-b border-stone-200 focus:border-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-sage text-lg font-serif transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-8 w-full lg:w-auto">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="plant-category"
                  className="text-[10px] font-bold text-stone-400 uppercase tracking-widest"
                >
                  Environment
                </label>

                <div className="relative">
                  <select
                    id="plant-category"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="bg-transparent border-b border-stone-200 pr-8 py-2 text-sm font-bold text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-sage cursor-pointer appearance-none"
                  >
                    <option value="all">All Types</option>
                    <option value="indoor">Indoor Only</option>
                    <option value="outdoor">Outdoor Only</option>
                  </select>

                  <ChevronDown
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-stone-400 pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="plant-difficulty"
                  className="text-[10px] font-bold text-stone-400 uppercase tracking-widest"
                >
                  Difficulty
                </label>

                <div className="relative">
                  <select
                    id="plant-difficulty"
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="bg-transparent border-b border-stone-200 pr-8 py-2 text-sm font-bold text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-sage cursor-pointer appearance-none"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                  </select>

                  <ChevronDown
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-stone-400 pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="plant-sort"
                  className="text-[10px] font-bold text-stone-400 uppercase tracking-widest"
                >
                  Sort By
                </label>

                <select
                  id="plant-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-b border-stone-200 py-2 text-sm font-bold text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-sage cursor-pointer"
                >
                  <option value="name">Name</option>
                  <option value="difficulty">Difficulty</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-[10px] font-bold text-sage uppercase tracking-widest hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage transition-colors mt-4 lg:mt-0"
                >
                  <X aria-hidden="true" className="h-3 w-3" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          <div className="mb-12 flex items-center justify-between border-b border-stone-100 pb-6">
            <p
              className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              Showing {filteredPlants.length} of {plants.length} Botanical Records
            </p>
          </div>

          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center border border-dashed border-stone-200 rounded-sm">
              <Search
                aria-hidden="true"
                className="h-12 w-12 text-stone-200 mx-auto mb-6 opacity-40"
              />

              <p className="text-stone-500 italic font-serif text-xl">
                No plants found matching your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="btn-premium mt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                Reset Directory
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
