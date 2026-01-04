import type { Context, Next } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { cache, getRateLimitKey } from '@/lib/redis'

/**
 * Opzioni per il rate limiting
 */
export interface RateLimitOptions {
  /**
   * Numero massimo di richieste permesse
   */
  limit: number
  /**
   * Finestra temporale in secondi
   */
  window: number
  /**
   * Messaggio di errore personalizzato (opzionale)
   */
  message?: string
}

/**
 * Ottiene l'IP del client dalla richiesta
 */
function getClientIP(c: Context): string {
  // Prova vari header comuni per ottenere l'IP reale
  const forwarded = c.req.header('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  const realIP = c.req.header('x-real-ip')
  if (realIP) {
    return realIP
  }

  // Fallback: usa un IP generico se non disponibile
  return 'unknown'
}

/**
 * Middleware per rate limiting basato su Redis
 * 
 * @example
 * app.post('/api/contact', rateLimit({ limit: 5, window: 60 }), handler)
 */
export function rateLimit(options: RateLimitOptions) {
  const { limit, window, message = 'Too many requests, please try again later.' } = options

  return async (c: Context, next: Next) => {
    // Se Redis non è disponibile, passa direttamente (no rate limiting)
    if (!cache.isAvailable()) {
      await next()
      return
    }

    const ip = getClientIP(c)
    const endpoint = c.req.path
    const key = getRateLimitKey(ip, endpoint)

    try {
      // Controlla il conteggio attuale
      const current = await cache.get<number>(key)

      if (current !== null && current >= limit) {
        // Calcola quando scade il rate limit
        const ttl = await cache.get<number>(`${key}:ttl`)
        const retryAfter = ttl || window

        c.header('X-RateLimit-Limit', limit.toString())
        c.header('X-RateLimit-Remaining', '0')
        c.header('X-RateLimit-Reset', (Date.now() + retryAfter * 1000).toString())
        c.header('Retry-After', retryAfter.toString())

        throw new HTTPException(429, {
          message,
        })
      }

      // Incrementa il conteggio
      const newCount = (current || 0) + 1
      await cache.set(key, newCount, window)
      await cache.set(`${key}:ttl`, window, window)

      // Aggiungi headers informativi
      c.header('X-RateLimit-Limit', limit.toString())
      c.header('X-RateLimit-Remaining', Math.max(0, limit - newCount).toString())

      await next()
    } catch (error) {
      if (error instanceof HTTPException) {
        throw error
      }
      // Se c'è un errore Redis, passa comunque (fail open)
      console.error('Rate limit error:', error)
      await next()
    }
  }
}

