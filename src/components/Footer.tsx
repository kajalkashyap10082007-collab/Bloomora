
import { Link } from 'react-router-dom';
import { Leaf, ArrowUpRight } from 'lucide-react';
import { Container } from './ui/Base';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Plant Directory',
      links: [
        { name: 'All Plants', href: '/plants' },
        { name: 'Indoor Plants', href: '/indoor-plants' },
        { name: 'Outdoor Plants', href: '/outdoor-plants' },
        { name: 'Balcony Garden', href: '/balcony-garden' },
        { name: 'Terrace Garden', href: '/terrace-garden' },
        { name: 'Vegetable Gardening', href: '/vegetable-gardening' },
        { name: 'Flower Gardening', href: '/flower-gardening' },
      ],
    },
    {
      title: 'Gardening Resources',
      links: [
        { name: 'Plant Care Planner', href: '/plant-care' },
        { name: 'Seasonal Gardening', href: '/seasonal-gardening' },
        { name: 'DIY Garden Ideas', href: '/diy-garden-ideas' },
        { name: 'Gardening Journal', href: '/blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Bloomora', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ];

  return (
    <footer
      className="bg-forest text-white pt-32 pb-12 overflow-hidden relative"
    >
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-white/5 skew-x-12 translate-x-20 pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand Information */}
          <div className="lg:col-span-4 space-y-12">
            <Link
              to="/"
              aria-label="Bloomora home"
              className="flex items-center gap-3 text-3xl font-serif font-bold tracking-tight"
            >
              <div className="h-10 w-10 bg-white text-forest rounded-full flex items-center justify-center">
                <Leaf className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
              </div>
              <span>BLOOMORA</span>
            </Link>

            <p className="text-sage/60 text-lg leading-relaxed font-serif italic">
              "We believe that every home, no matter the size, can become a lush sanctuary of peace and purpose."
            </p>

            <p className="text-stone-300 text-sm leading-relaxed">
              Explore plant care guides, indoor gardening inspiration,
              and practical ideas to create your own green space.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {sections.map((section) => (
              <nav
                key={section.title}
                aria-label={section.title}
                className="space-y-8"
              >
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage">
                  {section.title}
                </h3>

                <ul className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-stone-300 text-sm hover:text-white transition-all link-premium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-sage/40">
          <div className="flex items-center gap-8">
            <p>© {currentYear} Bloomora</p>
            <div
              className="h-1 w-1 bg-white/10 rounded-full"
              aria-hidden="true"
            />
            <p>Crafted for Urban Gardeners</p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>

            <Link
              to="/disclaimer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </Link>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-white transition-colors group"
              aria-label="Back to top of page"
            >
              Back to Top
              <ArrowUpRight
                className="h-3 w-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
