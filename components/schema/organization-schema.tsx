export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://homegroundinvestments.co.zw/#organization", "name": "Home Ground Investments", "url": "https://homegroundinvestments.co.zw", "description": "A Zimbabwean agricultural enterprise specialising in sustainable livestock farming and commercial poultry production." },
      { "@type": "FoodEstablishment", "@id": "https://homegroundinvestments.co.zw/#butchery", "name": "Home Ground Butchery", "url": "https://homegroundinvestments.co.zw", "image": "https://homegroundinvestments.co.zw/images/homeground-butchery-al-majid-mall-exterior.jpg", "description": "A Chivhu butchery supplying frozen chicken, turkey, pork and graded beef to retail and wholesale customers.", "parentOrganization": { "@id": "https://homegroundinvestments.co.zw/#organization" }, "address": { "@type": "PostalAddress", "streetAddress": "Al Majid Mall, A4, next to Chicken Inn", "addressLocality": "Chivhu", "addressCountry": "ZW" }, "telephone": "+263 78 028 9132", "email": "info@homegroundinvestments.co.zw", "areaServed": [{ "@type": "City", "name": "Chivhu" }, { "@type": "Country", "name": "Zimbabwe" }], "hasMenu": "https://homegroundinvestments.co.zw/#products" }
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function LocalBusinessSchema({ location }: { location: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Home Ground Butchery",
    address: { "@type": "PostalAddress", streetAddress: "Al Majid Mall, A4, next to Chicken Inn", addressLocality: location || "Chivhu", addressCountry: "ZW" },
    telephone: "+263 78 028 9132",
    email: "info@homegroundinvestments.co.zw",
    url: "https://homegroundinvestments.co.zw/locations/chivhu",
    image: "https://homegroundinvestments.co.zw/images/homeground-butchery-al-majid-mall-exterior.jpg",
    areaServed: [{ "@type": "City", name: "Chivhu" }, { "@type": "City", name: "Masvingo" }, { "@type": "City", name: "Harare" }],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
