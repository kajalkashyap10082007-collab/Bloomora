
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from './ui/Base';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) return null;

  const formatLabel = (value: string) =>
    value
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <Container className="py-4">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
          <li className="flex items-center gap-2">
            <Link
              to="/"
              aria-label="Home"
              className="hover:text-forest transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
            </Link>
            <ChevronRight
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            />
          </li>

          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const label = formatLabel(value);

            return (
              <li key={to} className="flex items-center gap-2">
                {last ? (
                  <span
                    className="font-medium text-forest"
                    aria-current="page"
                  >
                    {label}
                  </span>
                ) : (
                  <>
                    <Link
                      to={to}
                      className="hover:text-forest transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                    >
                      {label}
                    </Link>
                    <ChevronRight
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
};
