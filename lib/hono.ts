import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'

/**
 * Tipo per il context di Hono con variabili d'ambiente personalizzate
 */
export type AppContext = {
  Variables: {
    // Dati validati dal middleware di validazione
    validatedData?: unknown
    // Qui puoi aggiungere altre variabili personalizzate per il context
    // Esempio: userId?: string
  }
}

/**
 * Crea un'istanza di Hono configurata con middleware comuni
 * per le API routes del progetto
 */
export function createHonoApp() {
  const app = new Hono<AppContext>()

  // CORS headers manuali (più semplice e compatibile con Next.js)
  app.use('*', async (c, next) => {
    // CORS headers
    c.header('Access-Control-Allow-Origin', '*')
    c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    // Handle preflight requests
    if (c.req.method === 'OPTIONS') {
      return new Response(null, { status: 204 })
    }
    
    await next()
  })

  // Logging middleware
  app.use('*', async (c, next) => {
    const start = Date.now()
    await next()
    const duration = Date.now() - start
    console.log(`${c.req.method} ${c.req.path} - ${c.res.status} - ${duration}ms`)
  })

  // Error handling middleware
  app.onError((err, c) => {
    console.error('Error:', err)
    
    if (err instanceof HTTPException) {
      return c.json(
        {
          success: false,
          error: err.message,
        },
        err.status
      )
    }
    
    return c.json(
      {
        success: false,
        error: 'Internal Server Error',
      },
      500
    )
  })

  // Not found handler
  app.notFound((c) => {
    return c.json(
      {
        success: false,
        error: 'Route not found',
      },
      404
    )
  })

  return app
}
