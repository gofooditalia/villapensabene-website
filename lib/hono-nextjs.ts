import type { Hono } from 'hono'
import type { NextRequest } from 'next/server'

/**
 * Handler per integrare Hono con Next.js App Router
 * Converte le richieste Next.js Request/Response in formato compatibile con Hono
 * 
 * @param app - Istanza di Hono configurata
 * @returns Handler function compatibile con Next.js App Router route handlers
 */
export function handle(app: Hono<any, any, any>) {
  return async (req: NextRequest, context?: { params?: Promise<Record<string, string>> }) => {
    const url = new URL(req.url)
    
    // Per le route API di Next.js App Router, il path relativo alla route è sempre '/'
    // perché ogni route.ts gestisce solo il proprio path
    // Es: /api/health/route.ts gestisce GET /api/health -> Hono vede '/'
    const honoPath = '/'
    
    // Costruisci l'URL per Hono mantenendo query params
    const honoUrl = new URL(honoPath, url.origin)
    honoUrl.search = url.search
    
    const request = new Request(honoUrl, {
      method: req.method,
      headers: req.headers,
      body: req.body,
      // @ts-ignore - necessario per body stream in Next.js
      duplex: 'half',
    })
    
    return app.fetch(request)
  }
}

