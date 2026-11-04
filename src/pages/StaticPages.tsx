
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Leaf,
  Quote,
  Trash2,
  ChevronDown,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Container } from '../components/ui/Base';

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

const STORAGE_KEY = 'bloomora_contact_messages';

const getSavedMessages = (): ContactMessage[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const About = () => (
  <>
    <SEO
      title="Our Story"
      description="Discover Bloomora's mission to make urban gardening accessible, enjoyable, and successful for every home."
    />

    <section className="relative pt-32 pb-20 bg-cream">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
            Our Philosophy
          </span>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest mb-12 leading-[0.9]">
            Rooted in <br />
            <span className="text-sage italic">Purpose</span>.
          </h1>

          <p className="text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto border-l-2 border-sage/30 pl-8 text-left">
            Bloomora was born from a simple belief: that every home, no matter
            how small, deserves a touch of nature. We are a gardening
            inspiration platform dedicated to making gardening accessible,
            enjoyable, and successful for everyone.
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
                src="/images/about_us_hero_1793380691031.jpg"
                alt="Green plants and a welcoming home gardening space"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12 space-y-8">
            <h2 className="text-5xl font-serif font-bold text-forest">
              The Green Mission
            </h2>

            <div className="prose prose-stone prose-lg">
              <p>
                Our mission is to inspire urban dwellers to transform their
                living spaces into green sanctuaries. Whether you have a
                sprawling garden or a single window ledge, we share ideas,
                knowledge, and inspiration to help you grow.
              </p>

              <p>
                We focus on practical gardening information tailored to
                Indian climates, seasons, and available resources. We believe
                plants can bring beauty, calm, and a closer connection to
                nature in everyday life.
              </p>
            </div>

            <div className="pt-8 border-t border-stone-100">
              <Link
                to="/plants"
                className="btn-premium inline-flex items-center gap-3"
              >
                Explore Plant Directory
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className="py-32 bg-forest text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-md">
            <Quote
              className="h-10 w-10 text-sage/40 mb-8"
              aria-hidden="true"
            />

            <h2 className="text-4xl font-serif font-medium leading-tight mb-8">
              "Gardening is not a hobby, it's a way of being present in the
              world."
            </h2>

            <Link
              to="/contact"
              className="btn-premium bg-sage hover:bg-white hover:text-forest"
            >
              Get in Touch
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-white/5 rounded-sm overflow-hidden">
              <img
                src="/images/garden_inspiration_1_1793380691580.jpg"
                alt="Garden inspiration with lush green plants"
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
            </div>

            <div className="aspect-[3/4] bg-white/5 rounded-sm overflow-hidden mt-12">
              <img
                src="/images/garden_inspiration_2_1793380692478.jpg"
                alt="Decorative plants in a garden setting"
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showMessages, setShowMessages] = useState(false);
  const [savedMessages, setSavedMessages] = useState<ContactMessage[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess('');
    setError('');

    const newMessage: ContactMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      name: name.trim(),
      email: email.trim(),
      subject,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      const existingMessages = getSavedMessages();
      const updatedMessages = [newMessage, ...existingMessages];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages));

      setSavedMessages(updatedMessages);
      setName('');
      setEmail('');
      setSubject('General Inquiry');
      setMessage('');
      setSuccess(
        'Your demo message has been saved successfully in this browser.'
      );
    } catch {
      setError(
        'Unable to save your message. Please check your browser storage settings.'
      );
    }
  };

  const handleShowMessages = () => {
    const messages = getSavedMessages();
    setSavedMessages(messages);
    setShowMessages((current) => !current);
  };

  const deleteMessage = (id: string) => {
    const updatedMessages = savedMessages.filter(
      (item) => item.id !== id
    );

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages));
      setSavedMessages(updatedMessages);
    } catch {
      setError('Unable to update saved messages.');
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Bloomora with your gardening questions, feedback, and suggestions."
      />

      <header className="pt-32 pb-20 bg-cream border-b border-stone-100">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
              Connect With Us
            </span>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest leading-[0.9]">
              Say <span className="text-sage italic">Hello</span>.
            </h1>

            <p className="mt-8 text-stone-500 text-lg max-w-lg leading-relaxed">
              Have a plant question or want to share your garden progress?
              We would love to hear from you.
            </p>
          </div>
        </Container>
      </header>

      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 border border-stone-100 shadow-2xl">
                <h2 className="text-3xl font-serif font-bold text-forest mb-8">
                  Send a Message
                </h2>

                <p className="text-sm text-stone-500 mb-8">
                  This is a demonstration form. Messages are saved only in
                  this browser and are not sent to Bloomora.
                </p>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 border-b border-stone-200 focus-within:border-forest transition-colors py-2">
                      <label
                        htmlFor="contact-name"
                        className="text-[10px] uppercase tracking-widest font-bold text-stone-400"
                      >
                        Full Name
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={80}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your name"
                        className="w-full bg-transparent text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest py-2"
                      />
                    </div>

                    <div className="space-y-2 border-b border-stone-200 focus-within:border-forest transition-colors py-2">
                      <label
                        htmlFor="contact-email"
                        className="text-[10px] uppercase tracking-widest font-bold text-stone-400"
                      >
                        Email Address
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={120}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-transparent text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest py-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 border-b border-stone-200 focus-within:border-forest transition-colors py-2">
                    <label
                      htmlFor="contact-subject"
                      className="text-[10px] uppercase tracking-widest font-bold text-stone-400"
                    >
                      Subject
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                      className="w-full bg-transparent text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest py-2 cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Plant Care Support</option>
                      <option>Feedback</option>
                      <option>Partnerships</option>
                      <option>Editorial Submission</option>
                    </select>
                  </div>

                  <div className="space-y-2 border-b border-stone-200 focus-within:border-forest transition-colors py-2">
                    <label
                      htmlFor="contact-message"
                      className="text-[10px] uppercase tracking-widest font-bold text-stone-400"
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      minLength={5}
                      maxLength={2000}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Tell us about your garden..."
                      className="w-full bg-transparent text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-forest py-2 resize-y"
                    />
                  </div>

                  {success && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="p-4 bg-green-50 text-green-800 text-sm"
                    >
                      {success}
                    </p>
                  )}

                  {error && (
                    <p
                      role="alert"
                      className="p-4 bg-red-50 text-red-800 text-sm"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-premium group gap-3 inline-flex items-center"
                  >
                    Save Demo Message
                    <Send
                      className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      aria-hidden="true"
                    />
                  </button>
                </form>

                <div className="mt-10 pt-8 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={handleShowMessages}
                    aria-expanded={showMessages}
                    className="flex items-center gap-3 text-forest font-semibold text-sm hover:text-sage transition-colors"
                  >
                    View Saved Demo Messages
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        showMessages ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {showMessages && (
                    <div className="mt-6 space-y-4">
                      {savedMessages.length === 0 ? (
                        <p className="text-sm text-stone-500">
                          No messages have been saved in this browser yet.
                        </p>
                      ) : (
                        savedMessages.map((item) => (
                          <article
                            key={item.id}
                            className="border border-stone-200 p-5"
                          >
                            <div className="flex justify-between items-start gap-4">
                              <div>
                                <h3 className="font-bold text-forest">
                                  {item.subject}
                                </h3>
                                <p className="text-sm text-stone-500 mt-1">
                                  {item.name} · {item.email}
                                </p>
                                <p className="text-xs text-stone-400 mt-1">
                                  {new Date(item.createdAt).toLocaleString()}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => deleteMessage(item.id)}
                                aria-label={`Delete message from ${item.name}`}
                                className="text-red-600 hover:text-red-800 p-2"
                              >
                                <Trash2
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>

                            <p className="text-sm text-stone-600 mt-4 whitespace-pre-wrap break-words">
                              {item.message}
                            </p>
                          </article>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-12 lg:pt-12">
              <div className="aspect-video overflow-hidden shadow-xl">
                <img
                  src="/images/contact_us_hero_1793380690307.jpg"
                  alt="A welcoming green gardening space"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center text-forest shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-forest mb-1">
                      Location
                    </h3>
                    <p className="text-stone-500 text-sm">
                      Bloomora is an online gardening demonstration platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center text-forest shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-forest mb-1">
                      Phone
                    </h3>
                    <p className="text-stone-500 text-sm">
                      Demo contact details are not available.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 rounded-full bg-cream flex items-center justify-center text-forest shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-forest mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@bloomora.in"
                      className="text-stone-500 text-sm underline hover:text-forest"
                    >
                      hello@bloomora.in
                    </a>
                    <p className="text-xs text-stone-400 mt-1">
                      Demo email link only. It is not a monitored inbox.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export const StaticPage = ({
  type,
}: {
  type: 'privacy' | 'disclaimer';
}) => (
  <>
    <SEO
      title={type === 'privacy' ? 'Privacy Policy' : 'Disclaimer'}
      description={
        type === 'privacy'
          ? 'Learn how the Bloomora demonstration website handles browser storage and analytics.'
          : 'Read the terms and limitations of information provided on Bloomora.'
      }
    />

    <header className="pt-32 pb-20 bg-cream border-b border-stone-100">
      <Container>
        <span className="inline-block text-sage font-bold tracking-[0.3em] uppercase text-[10px] mb-6">
          Legal Information
        </span>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-forest leading-[0.95] mb-4">
          {type === 'privacy' ? 'Privacy Policy' : 'Disclaimer'}
        </h1>
      </Container>
    </header>

    <section className="py-32 bg-white">
      <Container>
        <div className="max-w-3xl editorial-container">
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-stone-400 text-sm mb-12">
              Last updated: November 2026
            </p>

            {type === 'privacy' ? (
              <>
                <h2>1. About This Demonstration Website</h2>
                <p>
                  Bloomora is a demonstration website created for learning
                  and practice. Its contact form is a frontend demonstration
                  and does not send messages to a server or business inbox.
                </p>

                <h2>2. Contact Form and Browser Storage</h2>
                <p>
                  When you submit the contact form, the information you enter
                  is stored in the localStorage of your current browser.
                  This information remains on that browser until it is deleted
                  through the website's saved messages option or cleared from
                  your browser storage.
                </p>
                <p>
                  LocalStorage data is not automatically transmitted to
                  Bloomora. Other people using a different browser or device
                  cannot see those saved messages.
                </p>

                <h2>3. Analytics</h2>
                <p>
                  This demonstration website may use Google Analytics to
                  understand website usage and visitor interactions. Analytics
                  technologies may process information such as page views,
                  device and browser details, and usage events according to
                  the analytics service's settings and policies.
                </p>

                <h2>4. Cookies and Similar Technologies</h2>
                <p>
                  Analytics services may use cookies or similar technologies.
                  Browser storage may also be used for website features.
                  You can manage or clear browser storage and cookie settings
                  through your browser.
                </p>

                <h2>5. Data Security</h2>
                <p>
                  Information stored in localStorage is kept in your browser.
                  Do not enter passwords, payment information, or other
                  sensitive personal information into this demonstration form.
                </p>

                <h2>6. Changes to This Policy</h2>
                <p>
                  This policy may be updated as the demonstration website
                  changes. Please review this page periodically.
                </p>
              </>
            ) : (
              <>
                <h2>1. General Information</h2>
                <p>
                  The information on Bloomora is provided for general
                  educational and informational purposes. We aim to provide
                  useful gardening content, but we do not guarantee that every
                  piece of information is complete, current, or suitable for
                  every situation.
                </p>

                <h2>2. Gardening Advice</h2>
                <p>
                  Gardening results may vary depending on climate, soil,
                  sunlight, watering, plant health, and other environmental
                  factors. For complex or critical projects, consider seeking
                  advice from a qualified gardening professional.
                </p>

                <h2>3. External Links</h2>
                <p>
                  Bloomora may contain links to external websites. We do not
                  control or guarantee the content, availability, or policies
                  of those websites.
                </p>

                <h2>4. Demonstration Features</h2>
                <p>
                  Certain features, including the contact form, are provided
                  for demonstration purposes. Submitting the contact form
                  stores data locally in your browser and does not send it
                  to Bloomora.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                  Use the information on this website at your own discretion.
                  Bloomora is not responsible for losses or damages resulting
                  from reliance on general gardening information.
                </p>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  </>
);

export const NotFound = () => (
  <>
    <SEO
      title="Page Not Found"
      description="The page you are looking for could not be found on Bloomora."
      noIndex
    />

    <section className="min-h-screen flex items-center justify-center bg-cream py-32">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Leaf
            className="h-20 w-20 text-sage mx-auto mb-8 opacity-20"
            aria-hidden="true"
          />

          <h1 className="text-[12rem] font-serif font-bold text-forest leading-none opacity-10">
            404
          </h1>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest -mt-20 mb-8">
            Withered Away.
          </h2>

          <p className="text-stone-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            The page you're looking for has withered or never existed in the
            first place. Let's return to the garden.
          </p>

          <Link to="/" className="btn-premium">
            Back to Home
          </Link>
        </motion.div>
      </Container>
    </section>
  </>
);
