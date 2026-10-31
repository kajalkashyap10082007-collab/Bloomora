
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export const SEO = ({ title, description, image }: SEOProps) => {
  const siteName = 'Bloomora';
  const defaultTitle = 'Bloomora – Grow Your Happy Space';
  const defaultDescription =
    'Premium botanical platform for plant care, indoor gardening, and seasonal inspiration.';

  const siteUrl = window.location.origin;
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;

  const pathname = window.location.pathname;
  const normalizedPath =
    pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  const canonicalUrl = `${siteUrl}${normalizedPath}`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement(
          selector.startsWith('link') ? 'link' : 'meta'
        );
        document.head.appendChild(element);
      }

      element.setAttribute(attribute, value);
    };

    updateMeta('meta[name="description"]', 'content', description || defaultDescription);
    updateMeta('link[rel="canonical"]', 'href', canonicalUrl);

    updateMeta('meta[property="og:title"]', 'content', fullTitle);
    updateMeta('meta[property="og:description"]', 'content', description || defaultDescription);
    updateMeta('meta[property="og:image"]', 'content', image || `${siteUrl}/og-image.jpg`);
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl);

  }, [fullTitle, description, image, canonicalUrl]);

  return null;
};
