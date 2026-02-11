import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://homegroundinvestments.co.zw"

  const routes = [
    // Core
    "",
    "/about",
    "/contact",
    "/portfolio",
    "/quote",
    "/order",

    // Hubs
    "/renovations",
    "/meats",
    "/livestock",
    "/locations",

    // Locations
    "/locations/harare",
    "/locations/bulawayo",
    "/locations/masvingo",
    "/locations/chivhu",

    // Renovations
    "/renovations/residential",
    "/renovations/kitchen-renovations",
    "/renovations/bathroom-renovations",
    "/renovations/commercial",
    "/renovations/maintenance",
    "/renovations/sustainable-solutions",
    "/renovations/interior-remodeling",
    "/renovations/exterior-home-improvements",

    // Meats
    "/meats/beef",
    "/meats/pork",
    "/meats/poultry",
    "/meats/butchery",

    // Livestock
    "/livestock/cattle",
    "/livestock/goats",
    "/livestock/sheep",
    "/livestock/poultry",
    "/livestock/pigs",
    "/livestock/management",
  ]

  const now = new Date()

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }))
}
