import { MetadataRoute } from 'next'
import { restaurantData } from '@/lib/restaurant-data'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = restaurantData.contact.website || 'https://www.villapensabene.it'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

