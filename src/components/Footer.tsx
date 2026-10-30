import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Container } from './ui/Base';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Directory',
      links: [
        { name: 'Indoor Collection', href: '/indoor-plants' },
        { name: 'Outdoor Garden', href: '/outdoor-plants' },
        { name: 'Vegetable Patch', href: '/vegetable-gardening' },
        { name: 'Floral Sanctuary', href: '/flower-gardening' },
        { name: 'Full Directory', href: '/plants' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Plant Care Guide', href: '/plant-care' },
        { name: 'Seasonal Cycle', href: '/seasonal-gardening' },
        { name: 'DIY Projects', href: '/diy-garden-ideas' },
        { name: 'Garden Planner', href: '/diy-garden-ideas' },
        { name: 'Journal', href: '/blog' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Get in Touch', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Disclaimer', href: '/disclaimer' },
      ]
    }
  ];

  return (
    <footer className="bg-forest text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 skew-x-12 translate-x-20 pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-12">
            <Link to="/" className="flex items-center gap-3 text-3xl font-serif font-bold tracking-tight">
               <div className="h-10 w-10 bg-white text-forest rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5" strokeWidth={3} />
               </div>
               <span>BLOOMORA</span>
            </Link>
            <p className="text-sage/60 text-lg leading-relaxed font-serif italic">
              "We believe that every home, no matter the size, can become a lush sanctuary of peace and purpose."
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-sage transition-all"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-sage transition-all"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-sage transition-all"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Nav Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {sections.map((section) => (
              <div key={section.title} className="space-y-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-sage">{section.title}</h3>
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
              </div>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-sage/40">
          <div className="flex items-center gap-8">
             <p>© {currentYear} Bloomora Editorial</p>
             <div className="h-1 w-1 bg-white/10 rounded-full" />
             <p>Crafted for Urban Gardeners</p>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hover:text-white transition-colors group">
               Back to Top <ArrowUpRight className="h-3 w-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
