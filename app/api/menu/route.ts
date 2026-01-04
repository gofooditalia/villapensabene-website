import { createHonoApp } from '@/lib/hono'
import { handle } from '@/lib/hono-nextjs'
import { cacheMiddleware } from '@/lib/middleware/cache'
import { menuData, menuCategories, type MenuItem } from '@/lib/menu-data'

const app = createHonoApp()

// GET /api/menu - Ottieni tutto il menu (con cache di 1 ora)
app.get('/', cacheMiddleware({ ttl: 3600 }), (c) => {
  return c.json({
    success: true,
    data: menuData,
    categories: menuCategories,
    count: menuData.length,
  })
})

export const GET = handle(app)

