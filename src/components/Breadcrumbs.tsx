import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from './ui/Base';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <Container className="py-4">
      <nav className="flex items-center space-x-2 text-sm text-stone-500">
        <Link to="/" className="hover:text-forest transition-colors">
          <Home className="h-4 w-4" />
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

          return (
            <div key={to} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 shrink-0" />
              {last ? (
                <span className="font-medium text-forest">{label}</span>
              ) : (
                <Link to={to} className="hover:text-forest transition-colors">
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </Container>
  );
};
