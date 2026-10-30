import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export const SEO = ({ title, description, image, article }: SEOProps) => {
  const siteName = 'Bloomora';
  const defaultTitle = 'Bloomora – Grow Your Happy Space';
  const defaultDescription = 'Premium botanical platform for plant care, indoor gardening, and seasonal inspiration.';
  const siteUrl = window.location.origin;
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;

  useEffect(() => {
    document.title = fullTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDescription);
    }

    // OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description || defaultDescription);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image || `${siteUrl}/og-image.jpg`);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

  }, [fullTitle, description, image]);

  return null;
};
