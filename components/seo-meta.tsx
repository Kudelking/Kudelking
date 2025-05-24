import Head from "next/head"

interface SEOMetaProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  noindex?: boolean
}

export function SEOMeta({
  title,
  description,
  keywords,
  image = "/images/og-default.jpg",
  url,
  type = "website",
  noindex = false,
}: SEOMetaProps) {
  const fullTitle = title.includes("Accent Walls Pro") ? title : `${title} | Accent Walls Pro`
  const fullUrl = url ? `https://accentwallspro.com${url}` : "https://accentwallspro.com"
  const fullImage = image.startsWith("http") ? image : `https://accentwallspro.com${image}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Accent Walls Pro" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={fullUrl} />

      {/* Local Business */}
      <meta name="geo.region" content="US-DC" />
      <meta name="geo.region" content="US-MD" />
      <meta name="geo.region" content="US-VA" />
      <meta name="geo.placename" content="Washington DC, Maryland, Virginia" />
    </Head>
  )
}
