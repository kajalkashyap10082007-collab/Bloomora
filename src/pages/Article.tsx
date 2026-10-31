
import { useParams, Navigate, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Link as LinkIcon,
  ArrowLeft,
  Quote,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container } from '../components/ui/Base';
import { articles } from '../data/articles';

export const Article = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/404" replace />;

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 2);

  const articleUrl = `${window.location.origin}/blog/${article.slug}`;
  const shareText = `Read "${article.title}" on Bloomora`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      alert('Article link copied!');
    } catch {
      alert('Unable to copy the link. Please copy the page URL manually.');
    }
  };

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'en-IN',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        image={article.image}
        article
      />

      <article className="pb-32 bg-white">
        {/* Editorial Hero */}
        <header className="relative pt-32 pb-20 bg-cream">
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-stone-400 hover:text-forest transition-colors mb-12"
              >
                <ArrowLeft
                  className="h-3 w-3 group-hover:-translate-x-1 transition-transform"
                  aria-hidden="true"
                />
                Back to Journal
              </Link>

              <span className="block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
                Journal · {article.category}
              </span>

              <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest leading-[0.95] mb-12">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-stone-400 text-[10px] font-bold uppercase tracking-widest border-y border-stone-200 py-6 mb-16">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={article.publishedAt}>
                    {formattedDate}
                  </time>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.readTime}
                </div>

                <div className="hidden sm:block">
                  Written by {article.author}
                </div>
              </div>
            </div>

            <div className="aspect-[21/9] w-full overflow-hidden shadow-2xl">
              <img
                src={article.image}
                alt={`${article.title} - gardening guide`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </Container>
        </header>

        <div className="editorial-container mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar Left: Share */}
            <aside
              className="hidden lg:block lg:col-span-1"
              aria-label="Share this article"
            >
              <div className="sticky top-40 flex flex-col items-center gap-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-300 [writing-mode:vertical-lr] rotate-180">
                  Share Story
                </span>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share article on Facebook"
                  className="p-3 bg-stone-50 text-stone-400 hover:text-forest hover:bg-white hover:shadow-md transition-all rounded-full border border-stone-100"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share article on X"
                  className="p-3 bg-stone-50 text-stone-400 hover:text-forest hover:bg-white hover:shadow-md transition-all rounded-full border border-stone-100"
                >
                  <Twitter className="h-4 w-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Copy article link"
                  className="p-3 bg-stone-50 text-stone-400 hover:text-forest hover:bg-white hover:shadow-md transition-all rounded-full border border-stone-100"
                >
                  <LinkIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-7 lg:col-start-2">
              <div className="prose prose-stone prose-lg max-w-none">
                <p className="text-xl text-stone-600 leading-relaxed mb-12 italic border-l-4 border-sage pl-8 font-serif">
                  {article.excerpt}
                </p>

                <div
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-20 p-12 bg-cream/50 border border-stone-100 text-center">
                  <Quote
                    className="h-8 w-8 text-sage/30 mx-auto mb-6"
                    aria-hidden="true"
                  />
                  <p className="text-xl font-serif font-medium text-forest mb-6">
                    "The greatest service which can be rendered any country is to add a useful plant to its culture."
                  </p>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">
                    — Thomas Jefferson
                  </span>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <section
                  className="mt-24 pt-12 border-t border-stone-200"
                  aria-labelledby="related-articles-heading"
                >
                  <h2
                    id="related-articles-heading"
                    className="text-[10px] uppercase font-bold tracking-widest text-stone-400 mb-8"
                  >
                    Related Journal Entries
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/blog/${rel.slug}`}
                        className="group block"
                      >
                        <div className="aspect-video overflow-hidden mb-4 bg-stone-100">
                          <img
                            src={rel.image}
                            alt={`${rel.title} - related gardening article`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <h3 className="font-serif font-bold text-forest leading-tight group-hover:text-sage transition-colors">
                          {rel.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar Right: Signup */}
            <aside className="lg:col-span-3 lg:col-start-10">
              <div className="sticky top-40 bg-white border border-stone-100 p-8 shadow-sm">
                <h2 className="text-lg font-serif font-bold text-forest mb-4">
                  Botanical Digest
                </h2>

                <p className="text-xs text-stone-500 mb-8 leading-relaxed">
                  Join our inner circle for monthly gardening wisdom and seasonal plant care guides.
                </p>

                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="article-newsletter-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="article-newsletter-email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-stone-50 border border-stone-100 px-4 py-3 text-xs focus:outline-none focus:border-forest"
                  />

                  <button type="submit" className="btn-premium w-full">
                    Join Now
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-stone-100">
                  <p className="text-[10px] text-stone-300 font-bold uppercase tracking-widest mb-4">
                    Follow Our Journey
                  </p>

                  <div className="flex gap-4" aria-label="Social media">
                    <Instagram
                      className="h-4 w-4 text-stone-300"
                      aria-hidden="true"
                    />
                    <Facebook
                      className="h-4 w-4 text-stone-300"
                      aria-hidden="true"
                    />
                    <Twitter
                      className="h-4 w-4 text-stone-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};
