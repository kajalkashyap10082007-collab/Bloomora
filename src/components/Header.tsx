
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Leaf } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Container } from './ui/Base';
import { cn } from '../utils/cn';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Journal', href: '/blog' },
    {
      name: 'Directory',
      href: '/plants',
      dropdown: [
        { name: 'All Species', href: '/plants' },
        { name: 'Indoor Collection', href: '/indoor-plants' },
        { name: 'Outdoor Collection', href: '/outdoor-plants' },
      ],
    },
    {
      name: 'Guides',
      href: '/diy-garden-ideas',
      dropdown: [
        { name: 'Balcony Garden', href: '/balcony-garden' },
        { name: 'Terrace Garden', href: '/terrace-garden' },
        { name: 'Vegetable Garden', href: '/vegetable-gardening' },
        { name: 'Flower Garden', href: '/flower-gardening' },
        { name: 'Seasonal Cycle', href: '/seasonal-gardening' },
      ],
    },
    { name: 'Planner', href: '/plant-care' },
    { name: 'About', href: '/about' },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown((current) => current === name ? null : name);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-stone-100 py-4 shadow-sm'
          : 'bg-transparent py-8'
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <Link
            to="/"
            aria-label="Bloomora home"
            className="group flex items-center gap-3 text-2xl font-serif font-bold tracking-tight text-forest shrink-0"
          >
            <div className="h-8 w-8 bg-forest text-white rounded-full flex items-center justify-center group-hover:bg-sage transition-colors duration-500">
              <Leaf className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
            </div>
            <span className="tracking-[0.1em]">BLOOMORA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                onFocus={() => link.dropdown && setActiveDropdown(link.name)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <div className="flex items-center gap-1.5 py-2">
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        'text-[10px] font-bold uppercase tracking-widest transition-all duration-300',
                        isActive
                          ? 'text-forest underline underline-offset-8'
                          : 'text-stone-400 hover:text-forest'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>

                  {link.dropdown && (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.name)}
                      aria-label={`${link.name} submenu`}
                      aria-expanded={activeDropdown === link.name}
                      className="p-1 text-stone-400 hover:text-forest"
                    >
                      <ChevronDown
                        className={cn(
                          'h-3 w-3 transition-transform',
                          activeDropdown === link.name && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && (
                  <div
                    className={cn(
                      'absolute top-full -left-4 w-60 bg-white border border-stone-100 shadow-2xl p-4 flex flex-col gap-1 transition-all duration-300 origin-top',
                      activeDropdown === link.name
                        ? 'opacity-100 visible scale-y-100'
                        : 'opacity-0 invisible scale-y-90'
                    )}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        tabIndex={activeDropdown === link.name ? 0 : -1}
                        className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-forest hover:bg-stone-50 transition-all rounded-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 shrink-0">
            <Link
              to="/search"
              aria-label="Search Bloomora"
              className="p-2 text-stone-400 hover:text-forest transition-colors hidden lg:block"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              to="/plants"
              className="btn-premium py-3 px-6 hidden sm:inline-flex"
            >
              Start Growing
            </Link>

            <button
              type="button"
              className="lg:hidden p-2 text-forest"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen
                ? <X className="h-7 w-7" aria-hidden="true" />
                : <Menu className="h-7 w-7" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={cn(
          'lg:hidden fixed inset-0 top-0 bg-white z-[60] transition-all duration-500 ease-in-out px-6 pt-32 overflow-y-auto',
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
          className="absolute top-8 right-6 p-2 text-forest"
        >
          <X className="h-8 w-8" aria-hidden="true" />
        </button>

        <nav aria-label="Mobile main navigation">
          <div className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                <Link
                  to={link.href}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="text-4xl font-serif font-bold text-forest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <div className="flex flex-col gap-3 pl-6 border-l border-stone-100">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        tabIndex={isMenuOpen ? 0 : -1}
                        className="text-stone-400 text-sm font-bold uppercase tracking-widest"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-8">
              <Link
                to="/search"
                tabIndex={isMenuOpen ? 0 : -1}
                aria-label="Search Bloomora"
                className="text-lg font-serif font-bold text-forest flex items-center gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="h-5 w-5" aria-hidden="true" />
                Search the Garden
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
