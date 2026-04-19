import React from "react";

const SITE_URL = "https://rblez.com";
const SITE_NAME = "rblez";
const AUTHOR_NAME = "Ray";
const TWITTER_HANDLE = "@rblezX";

interface OrganizationSchemaProps {
  logo?: string;
  sameAs?: string[];
}

export function OrganizationSchema({
  logo = `${SITE_URL}/icon.svg`,
  sameAs = [
    "https://twitter.com/rblezX",
    "https://github.com/rblez",
  ],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonSchemaProps {
  image?: string;
  jobTitle?: string;
  sameAs?: string[];
}

export function PersonSchema({
  image = `${SITE_URL}/ray.png`,
  jobTitle = "Solopreneur & Developer",
  sameAs = [
    "https://twitter.com/rblezX",
    "https://github.com/rblez",
  ],
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    image,
    jobTitle,
    sameAs,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description?: string;
  slug: string;
  date: string;
  image?: string;
  tags?: string[];
}

export function ArticleSchema({
  title,
  description = "",
  slug,
  date,
  image,
  tags = [],
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description || undefined,
    image: image || `${SITE_URL}/og-image.jpg`,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    datePublished: date,
    dateModified: date,
    url: `${SITE_URL}/${slug}`,
    keywords: tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: {
    name: string;
    url: string;
  }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export function WebPageSchema({
  title,
  description,
  url,
  image = `${SITE_URL}/og-image.jpg`,
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    image,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: `${SITE_URL}/icon.svg`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
