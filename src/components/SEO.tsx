
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export const SEO = ({ title, description, image, article }: SEOProps) => {
  const siteName = 'Bloomora';
  const siteUrl = 'https://bloomora-gules.vercel.app';

  const defaultTitle = 'Bloomora – Grow Your Happy Space';

  const defaultDescription =
    'Discover indoor plants, plant care guides, gardening ideas and seasonal inspiration with Bloomora.';

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const metaDescription = description || defaultDescription;

  const pathname = window.location.pathname;
  const normalizedPath =
    pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  const canonicalUrl = `${siteUrl}${normalizedPath}`;
  const imageUrl = image || `${siteUrl}/og-image.jpg`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMeta = (
      selector: string,
      tagName: string,
      attribute: string,
      value: string
    ) => {
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement(tagName);
        document.head.appendChild(element);
      }

      element.setAttribute(attribute, value);
    };

    updateMeta(
      'meta[name="description"]',
      'meta',
      'content',
      metaDescription
    );

    updateMeta(
      'link[rel="canonical"]',
      'link',
      'href',
      canonicalUrl
    );

    updateMeta(
      'meta[property="og:title"]',
      'meta',
      'content',
      fullTitle
    );

    updateMeta(
      'meta[property="og:description"]',
      'meta',
      'content',
      metaDescription
    );

    updateMeta(
      'meta[property="og:image"]',
      'meta',
      'content',
      imageUrl
    );

    updateMeta(
      'meta[property="og:url"]',
      'meta',
      'content',
      canonicalUrl
    );

    updateMeta(
      'meta[property="og:type"]',
      'meta',
      'content',
      article ? 'article' : 'website'
    );

  }, [fullTitle, metaDescription, canonicalUrl, imageUrl, article]);

  return null;
};
