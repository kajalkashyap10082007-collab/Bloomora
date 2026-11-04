
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
const SITE_NAME = 'Bloomora';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

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

    const pageTitle = title.toLowerCase().includes('bloomora')
      ? title
      : `${title} | ${SITE_NAME}`;

    let imageUrl = DEFAULT_IMAGE;

    try {
      imageUrl = image
        ? new URL(image, SITE_URL).toString()
        : DEFAULT_IMAGE;
    } catch {
      imageUrl = DEFAULT_IMAGE;
    }

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

    // Open Graph metadata
    setMeta('property', 'og:type', article ? 'article' : 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:image:alt', `${title} - ${SITE_NAME}`);

    // Twitter metadata
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);
    setMeta('name', 'twitter:image:alt', `${title} - ${SITE_NAME}`);

    // Structured data
    const schemaId = 'bloomora-page-schema';

    document.getElementById(schemaId)?.remove();

    if (schemaMarkup) {
      const script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';

      script.textContent = JSON.stringify(schemaMarkup).replace(
        /</g,
        '\\u003c'
      );

      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [title, description, image, article, noIndex, schemaMarkup]);

  return null;
};
