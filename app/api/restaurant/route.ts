import { createHonoApp } from '@/lib/hono'
import { handle } from '@/lib/hono-nextjs'
import { cacheMiddleware } from '@/lib/middleware/cache'
import { restaurantData } from '@/lib/restaurant-data'

const app = createHonoApp()

// GET /api/restaurant - Ottieni informazioni del ristorante (con cache di 24 ore)
app.get('/', cacheMiddleware({ ttl: 86400 }), (c) => {
  return c.json({
    success: true,
    data: restaurantData,
  })
})

export const GET = handle(app)

