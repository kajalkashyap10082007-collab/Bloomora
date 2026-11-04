
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

  const normalizedQuery = query.trim().toLowerCase();

  const plantResults = useMemo(
    () =>
      normalizedQuery
        ? plants.filter((plant) =>
            [
              plant.name,
              plant.commonName,
              plant.scientificName,
              plant.description,
              plant.category,
              plant.slug,
            ]
              .filter(Boolean)
              .some((value) =>
                value.toLowerCase().includes(normalizedQuery)
              )
          )
        : [],
    [normalizedQuery]
  );

  const articleResults = useMemo(
    () =>
      normalizedQuery
        ? articles.filter((article) =>
            [
              article.title,
              article.excerpt,
              article.category,
              article.author,
              article.slug,
            ]
              .filter(Boolean)
              .some((value) =>
                value.toLowerCase().includes(normalizedQuery)
              )
          )
        : [],
    [normalizedQuery]
  );

  const totalResults = plantResults.length + articleResults.length;

  return (
    <>
      <SEO
        title="Search Plants and Gardening Articles"
        description="Search Bloomora's plant collection, plant care information and gardening articles."
        noIndex
      />

      <section className="py-20 bg-cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-forest mb-8 text-center">
              Search Bloomora
            </h1>

            <div role="search" className="relative">
              <label htmlFor="bloomora-search" className="sr-only">
                Search plants and gardening articles
              </label>

              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-stone-300"
                aria-hidden="true"
              />

              <input
                id="bloomora-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search plants, articles, guides..."
                className="w-full bg-white border border-stone-200 pl-16 pr-8 py-5 text-xl rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:border-forest shadow-sm"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20" aria-label="Search results">
        <Container>
          {!normalizedQuery ? (
            <div className="text-center py-20 text-stone-300">
              <Search
                className="h-12 w-12 mx-auto mb-4 opacity-50"
                aria-hidden="true"
              />
              <p>Type something to start searching...</p>
            </div>
          ) : (
            <div className="space-y-24">
              <p className="sr-only" role="status" aria-live="polite">
                {totalResults} results found for {query}.
              </p>

              {plantResults.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em] mb-10 pb-2 border-b border-stone-100 w-fit">
                    Plants ({plantResults.length})
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plantResults.map((plant) => (
                      <PlantCard key={plant.id} plant={plant} />
                    ))}
                  </div>
                </div>
              )}

              {articleResults.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em] mb-10 pb-2 border-b border-stone-100 w-fit">
                    Articles ({articleResults.length})
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articleResults.map((article) => (
                      <BlogCard key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              )}

              {totalResults === 0 && (
                <div className="text-center py-20 bg-stone-50" role="status">
                  <p className="text-stone-500 italic">
                    No results found for "{query}". Try a different search term.
                  </p>
                </div>
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
