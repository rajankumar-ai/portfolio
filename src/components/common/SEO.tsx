import { Helmet } from "react-helmet-async";
import { SEO as seo } from "../../config/seo";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

function SEO({
  title = seo.title,
  description = seo.description,
  keywords = seo.keywords,
  image = seo.image,
  url = seo.url,
}: SEOProps) {
  const fullImage = image.startsWith("http")
    ? image
    : `${seo.url}${image}`;

  return (
    <Helmet>
      <html lang="en" />

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content={seo.author}
      />

      <meta
        name="robots"
        content="index,follow"
      />

      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:image"
        content={fullImage}
      />

      <meta
        property="og:site_name"
        content={seo.siteName}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={fullImage}
      />

      <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rajan Kumar",
            url: seo.url,
            image: `${seo.url}${seo.image}`,
            jobTitle: "AI-Assisted Full-Stack Developer",
            description: seo.description,
            sameAs: [
            "https://github.com/rajankumar-ai",
            ],
        })}
        </script>
    </Helmet>
  );
}

export default SEO;