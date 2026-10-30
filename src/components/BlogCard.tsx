import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Article } from '../data/articles';

export const BlogCard = ({ article }: { article: Article }) => {
  return (
    <Link 
      to={`/blog/${article.slug}`}
      className="group block h-full"
    >
      <div className="flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden bg-stone-100 mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
          <img 
            src={article.image} 
            alt={article.title}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-forest/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-sage mb-4">
            <span className="text-forest">{article.category}</span>
            <span className="text-stone-200">/</span>
            <span>{article.readTime}</span>
          </div>
          
          <h3 className="text-3xl font-serif font-bold text-forest mb-4 leading-tight group-hover:text-sage transition-colors duration-300">
            {article.title}
          </h3>
          
          <p className="text-stone-500 text-sm leading-relaxed mb-8 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-300">
              <Calendar className="h-3 w-3" />
              <span>{new Date(article.publishedAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-forest">
               Read Story <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
