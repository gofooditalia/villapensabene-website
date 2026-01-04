import type { Context, Next } from 'hono'
import { cache, getCacheKey } from '@/lib/redis'

/**
 * Opzioni per il middleware di cache
 */
export interface CacheOptions {
  /**
   * Time to live in secondi (default: 3600 = 1 ora)
   */
  ttl?: number
  /**
   * Prefisso personalizzato per la chiave cache (opzionale)
   */
  keyPrefix?: string
  /**
   * Funzione per generare parametri dalla richiesta (opzionale)
   */
  getParams?: (c: Context) => Record<string, string>
}

/**
 * Middleware per cache automatica delle risposte API
 * 
 * @example
 * app.get('/api/events', cacheMiddleware({ ttl: 1800 }), handler)
 */
export function cacheMiddleware(options: CacheOptions = {}) {
  const { ttl = 3600, keyPrefix, getParams } = options

  return async (c: Context, next: Next) => {
    // Solo per richieste GET
    if (c.req.method !== 'GET') {
      await next()
      return
    }

    // Se Redis non è disponibile, passa direttamente
    if (!cache.isAvailable()) {
      await next()
      return
    }

    // Genera chiave cache
    const path = c.req.path
    const params = getParams ? getParams(c) : {}
    const cacheKey = keyPrefix 
      ? `${keyPrefix}:${path}` 
      : getCacheKey(path, params)

    // Prova a recuperare dalla cache
    const cached = await cache.get(cacheKey)
    if (cached) {
      return c.json(cached)
    }

    // Esegui il handler originale
    await next()

    // Salva la risposta nella cache se è una risposta JSON di successo
    // Nota: questo approccio funziona solo se la risposta non è già stata inviata
    // Per una soluzione più robusta, considera di intercettare la risposta prima dell'invio
    if (c.res.status >= 200 && c.res.status < 300) {
      try {
        // Clona la risposta per leggere il body senza consumarlo
        const clonedResponse = c.res.clone()
        const contentType = clonedResponse.headers.get('content-type')
        
        if (contentType && contentType.includes('application/json')) {
          const responseData = await clonedResponse.json()
          await cache.set(cacheKey, responseData, ttl)
        }
      } catch (error) {
        // Se non è JSON o c'è un errore, non fare cache
        // Questo è normale, non loggare come errore
      }
    }
  }
}

