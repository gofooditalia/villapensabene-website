import { createHonoApp } from '@/lib/hono'
import { handle } from '@/lib/hono-nextjs'
import { cacheMiddleware } from '@/lib/middleware/cache'
import { events } from '@/lib/events-data'

const app = createHonoApp()

// GET /api/events - Ottieni tutti gli eventi (con cache di 30 minuti)
app.get('/', cacheMiddleware({ ttl: 1800 }), (c) => {
  return c.json({
    success: true,
    data: events,
    count: events.length,
  })
})

export const GET = handle(app)

