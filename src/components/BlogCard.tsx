
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Article } from '../data/articles';

export const BlogCard = ({ article }: { article: Article }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'en-IN',
    {
      month: 'short',
      year: 'numeric',
    }
  );

  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group block h-full"
      aria-label={`Read article: ${article.title}`}
    >
      <div className="flex flex-col h-full">
        {/* Article Image */}
        <div className="relative aspect-video overflow-hidden bg-stone-100 mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
          <img
            src={article.image}
            alt={`${article.title} - ${article.category} gardening guide`}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          <div
            className="absolute inset-0 bg-forest/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          />
        </div>

        {/* Article Information */}
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-sage mb-4">
            <span className="text-forest">{article.category}</span>
            <span className="text-stone-200" aria-hidden="true">
              /
            </span>
            <span>{article.readTime}</span>
          </div>

          <h2 className="text-3xl font-serif font-bold text-forest mb-4 leading-tight group-hover:text-sage transition-colors duration-300">
            {article.title}
          </h2>

          <p className="text-stone-500 text-sm leading-relaxed mb-8 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Article Footer */}
          <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-300">
              <Calendar className="h-3 w-3" aria-hidden="true" />

              <time dateTime={article.publishedAt}>
                {formattedDate}
              </time>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-forest">
              Read Story

              <ArrowRight
                className="h-3 w-3 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
