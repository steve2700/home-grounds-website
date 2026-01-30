export function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Home Grounds Investments Company",
    alternateName: "Home Grounds",
    url: "https://homegrounds.co.zw",
    logo: "https://homegrounds.co.zw/logo.png",
    description:
      "Diversified Investments in Construction, Renovations & Premium Meats serving Zimbabwe",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14A, 6th Avenue Parktown",
      addressLocality: "Waterfalls",
      addressRegion: "Harare",
      postalCode: "",
      addressCountry: "ZW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.8216,
      longitude: 31.0492,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+263-78-028-9132",
        contactType: "customer service",
        areaServed: ["ZW"],
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/homegroundsinvestments",
      "https://www.instagram.com/homegroundsinvestments",
      "https://www.linkedin.com/company/homegroundsinvestments",
    ],
    department: [
      {
        "@type": "Organization",
        name: "Home Grounds Renovations & Improvements",
        description: "Residential and commercial renovation services",
      },
      {
        "@type": "Organization",
        name: "Home Grounds Meats & Butcher",
        description: "Farm-to-table premium meat production and butchery",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Schema markup requires innerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export function LocalBusinessSchema({ location }: { location: string }) {
  const addresses: Record<
    string,
    { street: string; city: string; lat: number; lng: number }
  > = {
    Harare: {
      street: "123 Samora Machel Avenue",
      city: "Harare",
      lat: -17.8292,
      lng: 31.0522,
    },
    Bulawayo: {
      street: "45 Main Street",
      city: "Bulawayo",
      lat: -20.1539,
      lng: 28.5871,
    },
    Masvingo: {
      street: "12 Robert Mugabe Way",
      city: "Masvingo",
      lat: -20.0736,
      lng: 30.8328,
    },
    Waterfalls: {
      street: "14A, 6th Avenue Parktown",
      city: "Waterfalls",
      lat: -17.8216,
      lng: 31.0492,
    },
  }

  const locationData = addresses[location] || addresses.Waterfalls

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Home Grounds Investments - ${location}`,
    image: `https://homegrounds.co.zw/images/locations/${location.toLowerCase()}.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.street,
      addressLocality: locationData.city,
      addressCountry: "ZW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: locationData.lat,
      longitude: locationData.lng,
    },
    telephone: "+263-78-028-9132",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Schema markup requires innerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export function ServiceSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home Renovation",
    provider: {
      "@type": "Organization",
      name: "Home Grounds Renovations & Improvements",
    },
    areaServed: {
      "@type": "Country",
      name: "Zimbabwe",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renovation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Renovation",
            description:
              "Complete kitchen renovation and remodeling services in Zimbabwe",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Renovation",
            description: "Professional bathroom remodeling and waterproofing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Fit-Outs",
            description: "Office and retail renovation services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property Maintenance",
            description:
              "Comprehensive property maintenance and repair services",
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Schema markup requires innerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export function ProductSchema({
  product,
}: {
  product: {
    name: string
    description: string
    image: string
    price: string
    slug: string
  }
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://homegrounds.co.zw${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Home Grounds Meats",
    },
    offers: {
      "@type": "Offer",
      url: `https://homegrounds.co.zw/meats/${product.slug}`,
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Home Grounds Meats & Butcher",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Schema markup requires innerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
