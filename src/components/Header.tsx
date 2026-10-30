import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Leaf, ArrowRight } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
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
      ]
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
      ]
    },
    { name: 'Planner', href: '/plant-care' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-stone-100 py-4 shadow-sm" : "bg-transparent py-8"
    )}>
      <Container>
        <nav className="flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-3 text-2xl font-serif font-bold tracking-tight text-forest shrink-0">
            <div className="h-8 w-8 bg-forest text-white rounded-full flex items-center justify-center group-hover:bg-sage transition-colors duration-500">
               <Leaf className="h-4 w-4" strokeWidth={3} />
            </div>
            <span className="tracking-[0.1em]">BLOOMORA</span>
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1.5 py-2">
                   <NavLink 
                      to={link.href}
                      className={({ isActive }) => cn(
                        "text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                        isActive ? "text-forest underline underline-offset-8" : "text-stone-400 hover:text-forest"
                      )}
                    >
                      {link.name}
                    </NavLink>
                    {link.dropdown && <ChevronDown className="h-3 w-3 text-stone-300 group-hover:text-forest transition-colors" />}
                </div>

                {link.dropdown && (
                  <div className={cn(
                    "absolute top-full -left-4 w-60 bg-white border border-stone-100 shadow-2xl p-4 flex flex-col gap-1 transition-all duration-300 origin-top",
                    activeDropdown === link.name ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-90"
                  )}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
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
            <Link to="/search" className="p-2 text-stone-400 hover:text-forest transition-colors lg:block hidden">
              <Search className="h-5 w-5" />
            </Link>
            <Link to="/plants" className="btn-premium py-3 px-6 hidden sm:inline-flex">
              Start Growing
            </Link>
            
            <button 
              className="lg:hidden p-2 text-forest"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 bg-white z-[60] transition-all duration-500 ease-in-out px-6 pt-32",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-6 p-2 text-forest">
           <X className="h-8 w-8" />
        </button>
        <div className="flex flex-col gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-4">
               <Link 
                  to={link.href}
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
             <Link to="/search" className="text-lg font-serif font-bold text-forest flex items-center gap-3">
                <Search className="h-5 w-5" /> Search the Garden
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
