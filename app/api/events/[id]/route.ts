import { createHonoApp } from '@/lib/hono'
import { handle } from '@/lib/hono-nextjs'
import { cacheMiddleware } from '@/lib/middleware/cache'
import { getEventById } from '@/lib/events-data'

const app = createHonoApp()

// GET /api/events/:id - Ottieni un evento specifico (con cache di 30 minuti)
// In Next.js App Router, i parametri vengono estratti dall'URL della richiesta
app.get('/', cacheMiddleware({ ttl: 1800 }), async (c) => {
  // Estrai l'ID dall'URL della richiesta
  const url = new URL(c.req.url)
  const pathSegments = url.pathname.split('/')
  const id = pathSegments[pathSegments.length - 1]
  
  const event = getEventById(id)

  if (!event) {
    return c.json(
      {
        success: false,
        error: 'Evento non trovato',
      },
      404
    )
  }

  return c.json({
    success: true,
    data: event,
  })
})

export const GET = handle(app)

