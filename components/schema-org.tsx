import Script from "next/script"

interface SchemaOrgProps {
  type: "LocalBusiness" | "Organization" | "WebSite" | "FAQPage" | "Product" | "Article" | "Service"
  data: Record<string, any>
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script
      id={`schema-org-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
