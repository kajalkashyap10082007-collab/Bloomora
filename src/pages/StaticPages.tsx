import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Leaf, Quote, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container, Button } from '../components/ui/Base';

export const About = () => (
  <>
    <SEO title="Our Story" description="Discover the heart and soul behind Bloomora. Our journey in making urban gardening accessible to every home." />
    
    <section className="relative pt-32 pb-20 bg-cream">
       <Container>
         <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Our Philosophy</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest mb-12 leading-[0.9]">Rooted in <br /><span className="text-sage italic">Purpose</span>.</h1>
            <p className="text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto border-l-2 border-sage/30 pl-8 text-left">
              Bloomora was born from a simple belief: that every home, no matter how small, deserves a touch of nature. We are a community-driven platform dedicated to making gardening accessible, enjoyable, and successful for everyone.
            </p>
         </div>
       </Container>
    </section>

    <section className="py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
             <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/images/about_us_hero_1793380691031.jpg" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
          <div className="lg:col-span-6 lg:pl-12 space-y-12">
            <h2 className="text-5xl font-serif font-bold text-forest">The Green Mission</h2>
            <div className="prose prose-stone prose-lg">
              <p>Our mission is to empower urban dwellers to transform their living spaces into green sanctuaries. Whether you have a sprawling garden or a single window ledge, we provide the tools, knowledge, and inspiration you need to flourish.</p>
              <p>We focus on practical, fact-based gardening advice tailored specifically for Indian climates, seasons, and available resources. We believe in the therapeutic power of plants and the vital role they play in modern wellness.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-stone-100">
              <div>
                <span className="text-5xl font-serif font-bold text-sage">12k+</span>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mt-2">Species Documented</p>
              </div>
              <div>
                <span className="text-5xl font-serif font-bold text-sage">50k+</span>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mt-2">Home Gardeners</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className="py-32 bg-forest text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-md">
            <Quote className="h-10 w-10 text-sage/40 mb-8" />
            <h2 className="text-4xl font-serif font-medium leading-tight mb-8">"Gardening is not a hobby, it's a way of being present in the world."</h2>
            <Link to="/contact" className="btn-premium bg-sage hover:bg-white hover:text-forest">Get in Touch</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-[3/4] bg-white/5 rounded-sm overflow-hidden">
                <img src="/src/assets/images/garden_inspiration_1_1793380691580.jpg" alt="Inspiration" className="w-full h-full object-cover opacity-50" />
             </div>
             <div className="aspect-[3/4] bg-white/5 rounded-sm overflow-hidden mt-12">
                <img src="/src/assets/images/garden_inspiration_2_1793380692478.jpg" alt="Inspiration" className="w-full h-full object-cover opacity-50" />
             </div>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export const Contact = () => (
  <>
    <SEO title="Contact Us" description="Reach out to Bloomora for gardening advice, partnership inquiries, or general questions. We're here to help you grow." />
    
    <header className="pt-32 pb-20 bg-cream border-b border-stone-100">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Connect With Us</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest leading-[0.9]">Say <span className="text-sage italic">Hello</span>.</h1>
          <p className="mt-8 text-stone-500 text-lg max-w-lg leading-relaxed">
            Have a plant question? Or just want to share your garden progress? We would love to hear from you.
          </p>
        </div>
      </Container>
    </header>

    <section className="py-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            <div className="bg-white p-12 border border-stone-100 shadow-2xl">
              <h3 className="text-3xl font-serif font-bold text-forest mb-8">Send a Message</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 border-b border-stone-200 focus-within:border-forest transition-colors py-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Full Name</label>
                    <input type="text" className="w-full bg-transparent text-sm focus:outline-none py-2" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2 border-b border-stone-200 focus-within:border-forest transition-colors py-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                    <input type="email" className="w-full bg-transparent text-sm focus:outline-none py-2" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-2 border-b border-stone-200 focus-within:border-forest transition-colors py-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Subject</label>
                  <select className="w-full bg-transparent text-sm focus:outline-none py-2 cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Plant Care Support</option>
                    <option>Partnerships</option>
                    <option>Editorial Submission</option>
                  </select>
                </div>
                <div className="space-y-2 border-b border-stone-200 focus-within:border-forest transition-colors py-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Message</label>
                  <textarea rows={5} className="w-full bg-transparent text-sm focus:outline-none py-2 resize-none" placeholder="Tell us about your garden..."></textarea>
                </div>
                <button className="btn-premium group gap-3">
                  Send Message <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-16 lg:pt-12">
             <div className="aspect-video overflow-hidden shadow-xl mb-12">
                <img src="/src/assets/images/contact_us_hero_1793380690307.jpg" alt="Contact Us" className="w-full h-full object-cover" />
             </div>
             
             <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center text-forest shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-lg text-forest mb-1">Our Studio</h5>
                    <p className="text-stone-500 text-sm">123 Botanical Lane, Green City<br />Karnataka, India 560001</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center text-forest shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-lg text-forest mb-1">Call Us</h5>
                    <p className="text-stone-500 text-sm">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center text-forest shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-lg text-forest mb-1">Email Us</h5>
                    <p className="text-stone-500 text-sm">hello@bloomora.in</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export const StaticPage = ({ type }: { type: 'privacy' | 'disclaimer' }) => (
  <>
    <SEO title={type === 'privacy' ? 'Privacy Policy' : 'Disclaimer'} />
    <header className="pt-32 pb-20 bg-cream border-b border-stone-100">
      <Container>
         <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">Legal Information</span>
         <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest leading-[0.95] mb-4">
           {type === 'privacy' ? 'Privacy Policy' : 'Disclaimer'}
         </h1>
      </Container>
    </header>
    
    <section className="py-32 bg-white">
      <Container>
        <div className="max-w-3xl editorial-container">
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-stone-400 text-sm mb-12">Last updated: October 2026</p>
            {type === 'privacy' ? (
              <>
                <h2>1. Information Collection</h2>
                <p>We do not collect personal information unless you explicitly provide it (e.g., via the newsletter form). We use localStorage for browser-only features like plant bookmarks and planners.</p>
                <h2>2. Cookies and Data</h2>
                <p>We use session-based storage to enhance your experience. No data is shared with third-party advertising networks.</p>
                <h2>3. Security</h2>
                <p>We prioritize the protection of your personal information and implement industry-standard measures to safeguard it.</p>
              </>
            ) : (
              <>
                <h2>1. Professional Advice</h2>
                <p>The information on Bloomora is for general informational purposes only. While we strive for accuracy, gardening involves living organisms and results may vary based on environmental factors. Consult a professional horticulturist for critical projects.</p>
                <h2>2. External Links</h2>
                <p>Bloomora may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy of information on these external sites.</p>
                <h2>3. Limitation of Liability</h2>
                <p>Bloomora shall not be held responsible for any plant loss or property damage resulting from the application of advice found on this platform.</p>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  </>
);

export const NotFound = () => (
  <section className="min-h-screen flex items-center justify-center bg-cream py-32">
    <Container className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Leaf className="h-20 w-20 text-sage mx-auto mb-8 opacity-20" />
        <h1 className="text-[12rem] font-serif font-bold text-forest leading-none opacity-10">404</h1>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest -mt-20 mb-8">Withered Away.</h2>
        <p className="text-stone-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          The page you're looking for has withered or never existed in the first place. Let's return to the garden.
        </p>
        <Link to="/" className="btn-premium">
          Back to Home
        </Link>
      </motion.div>
    </Container>
  </section>
);
