
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

import { SEO } from '../components/SEO';
import { Container } from '../components/ui/Base';
import { BlogCard } from '../components/BlogCard';
import { articles } from '../data/articles';

const categories = [
  'All Entries',
  'Indoor Plants',
  'Balcony Garden',
  'Vegetable Gardening',
  'Plant Care',
  'DIY Garden Ideas',
  'Seasonal Gardening',
];

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Entries');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = articles[0];

  const showFeatured =
    selectedCategory === 'All Entries' && searchQuery.trim() === '';

  const articlesToFilter = showFeatured ? articles.slice(1) : articles;

  const filteredArticles = articlesToFilter.filter((article) => {
    const query = searchQuery.trim().toLowerCase();

    const searchableContent =
      `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();

    const matchesSearch = searchableContent.includes(query);

    const matchesCategory =
      selectedCategory === 'All Entries' ||
      article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Gardening Blog – Indoor Plants, Plant Care & Garden Ideas"
        description="Read Bloomora's gardening blog for indoor plant care guides, balcony garden ideas, vegetable gardening tips, and practical advice for growing healthy plants."
        image={featuredArticle?.image}
      />

      {/* Editorial Header */}
      <header className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
              Bloomora Editorial
            </span>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest mb-8 leading-[0.9]">
              The <br />
              <span className="text-sage italic">Journal</span>.
            </h1>

            <p className="text-stone-500 text-lg max-w-lg mx-auto leading-relaxed">
              Explore practical gardening guides, indoor plant care advice,
              balcony gardening inspiration, and helpful tips for growing
              healthier plants.
            </p>
          </div>
        </Container>
      </header>

      {/* Featured Article */}
      {showFeatured && featuredArticle && (
        <section className="py-20 bg-white" aria-label="Featured article">
          <Container>
            <Link
              to={`/blog/${featuredArticle.slug}`}
              aria-label={`Read featured article: ${featuredArticle.title}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-0 border border-stone-100 shadow-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
            >
              <div className="lg:col-span-7 aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={`${featuredArticle.title} - featured gardening article`}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
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
                  Read Entry
                  <ArrowRight
                    className="h-4 w-4 group-hover:translate-x-2 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {/* Journal Filters and Search */}
      <section className="py-8 bg-stone-50 border-y border-stone-100 sticky top-20 z-30 overflow-x-auto">
        <Container>
          <div className="flex items-center gap-8 whitespace-nowrap min-w-max">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              Browse Topics
            </span>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`text-xs font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 ${
                  selectedCategory === category
                    ? 'text-forest'
                    : 'text-stone-400 hover:text-forest'
                }`}
              >
                {category}
              </button>
            ))}

            <div className="ml-auto relative flex items-center">
              <Search
                className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400"
                aria-hidden="true"
              />

              <label htmlFor="journal-search" className="sr-only">
                Search journal articles
              </label>

              <input
                id="journal-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search journal..."
                className="bg-transparent border-b border-stone-200 pl-8 pr-4 py-2 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-forest focus-visible:ring-2 focus-visible:ring-sage w-64 transition-all"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Journal Grid */}
      <section className="py-32 bg-white" aria-label="Gardening articles">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <p className="text-xs text-stone-500" role="status" aria-live="polite">
              {filteredArticles.length}{' '}
              {filteredArticles.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {filteredArticles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-serif font-bold text-forest mb-4">
                No articles found
              </h2>

              <p className="text-stone-500 mb-6">
                Try another search term or choose a different topic.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Entries');
                }}
                className="text-xs font-bold uppercase tracking-widest text-sage hover:text-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                Clear Filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
