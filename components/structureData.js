export function ArticleJsonLd({ post, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.mainImage ? urlForImage(post.mainImage)?.src : "",
    datePublished: post.publishedAt || post._createdAt,
    dateModified:
      post._updatedAt || post.publishedAt || post._createdAt,
    author: {
      "@type": "Person",
      name: post.author?.name,
      url: `https://beauiticulturehub.com/author/${post.author?.slug?.current}`
    },
    publisher: {
      "@type": "Organization",
      name: "Beauiticulturehub",
      logo: {
        "@type": "ImageObject",
        url: "https://beauiticulturehub.com/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Beauiticulturehub",
    url: "https://beauiticulturehub.com",
    logo: "https://beauiticulturehub.com/logo.svg",
    description:
      "Expert beauty tips, skincare advice, and makeup tutorials",
    sameAs: [
      // Add your social media URLs
      "https://facebook.com/beauiticulturehub",
      "https://instagram.com/beauiticulturehub"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
