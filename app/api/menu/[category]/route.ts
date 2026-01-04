import { createHonoApp } from '@/lib/hono'
import { handle } from '@/lib/hono-nextjs'
import { cacheMiddleware } from '@/lib/middleware/cache'
import { menuData, menuCategories, type MenuItem } from '@/lib/menu-data'
import { HTTPException } from 'hono/http-exception'

const app = createHonoApp()

// GET /api/menu/:category - Ottieni menu per categoria (con cache di 1 ora)
app.get('/', cacheMiddleware({ ttl: 3600 }), (c) => {
  const url = new URL(c.req.url)
  const pathSegments = url.pathname.split('/')
  const category = pathSegments[pathSegments.length - 1]
  
  const validCategories = Object.keys(menuCategories) as MenuItem['category'][]
  
  if (!validCategories.includes(category as MenuItem['category'])) {
    throw new HTTPException(400, {
      message: `Categoria non valida. Categorie disponibili: ${validCategories.join(', ')}`,
    })
  }
  
  const filteredMenu = menuData.filter((item) => item.category === category)
  
  return c.json({
    success: true,
    category: category,
    categoryName: menuCategories[category as keyof typeof menuCategories],
    data: filteredMenu,
    count: filteredMenu.length,
  })
})

export const GET = handle(app)

