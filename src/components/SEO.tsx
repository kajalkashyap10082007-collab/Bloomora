
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
  noIndex?: boolean;
  schemaMarkup?: Record<string, unknown>;
}

const SITE_URL = 'https://bloomora-gules.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/images/hero_botanical_garden_1793379116515.jpg`;

function setMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
}

export const SEO = ({
  title,
  description,
  image,
  article = false,
  noIndex = false,
  schemaMarkup,
}: SEOProps) => {
  useEffect(() => {
    const cleanPath =
      window.location.pathname.replace(/\/+$/, '') || '/';

    const canonicalUrl = `${SITE_URL}${cleanPath}`;
    const pageTitle = title.includes('Bloomora')
      ? title
      : `${title} | Bloomora`;

    const imageUrl =
      image && image.startsWith('http')
        ? image
        : image
          ? `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`
          : DEFAULT_IMAGE;

    document.title = pageTitle;

    setMeta('name', 'description', description);
    setMeta(
      'name',
      'robots',
      noIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    setCanonical(canonicalUrl);

    setMeta('property', 'og:type', article ? 'article' : 'website');
    setMeta('property', 'og:site_name', 'Bloomora');
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:image:alt', `${title} - Bloomora`);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);

    const schemaId = 'bloomora-page-schema';
    const existingSchema = document.getElementById(schemaId);

    if (existingSchema) {
      existingSchema.remove();
    }

    if (schemaMarkup) {
      const script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaMarkup);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [title, description, image, article, noIndex, schemaMarkup]);

  return null;
};
