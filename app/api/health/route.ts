import { createHonoApp } from '@/lib/hono'
import { handle } from '@/lib/hono-nextjs'

const app = createHonoApp()

app.get('/', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Villa Pensabene API',
    version: '1.0.0',
  })
})

export const GET = handle(app)

