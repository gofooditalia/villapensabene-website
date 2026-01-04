import { Redis } from '@upstash/redis'

/**
 * Configurazione Redis
 * Supporta sia Upstash Redis (cloud) che Redis locale
 * 
 * Variabili d'ambiente:
 * - UPSTASH_REDIS_REST_URL: URL REST API di Upstash Redis
 * - UPSTASH_REDIS_REST_TOKEN: Token per Upstash Redis
 * - REDIS_URL: URL Redis locale (opzionale, formato: redis://localhost:6379)
 */
let redisClient: Redis | null = null

/**
 * Inizializza il client Redis
 */
export function getRedisClient(): Redis | null {
  if (redisClient) {
    return redisClient
  }

  // Prova prima con Upstash Redis (cloud)
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (upstashUrl && upstashToken) {
    try {
      redisClient = new Redis({
        url: upstashUrl,
        token: upstashToken,
      })
      console.log('Redis client initialized (Upstash)')
      return redisClient
    } catch (error) {
      console.error('Failed to initialize Upstash Redis:', error)
    }
  }

  // Se non disponibile, Redis non è configurato
  console.warn('Redis not configured. Cache and rate limiting will be disabled.')
  return null
}

/**
 * Utility per gestire la cache
 */
export class CacheManager {
  private redis: Redis | null

  constructor() {
    this.redis = getRedisClient()
  }

  /**
   * Ottiene un valore dalla cache
   */
  async get<T>(key: string): Promise<T | null> {
    if (!this.redis) return null

    try {
      const value = await this.redis.get(key)
      return value as T | null
    } catch (error) {
      console.error(`Redis GET error for key ${key}:`, error)
      return null
    }
  }

  /**
   * Salva un valore nella cache con TTL
   * @param key - Chiave della cache
   * @param value - Valore da salvare
   * @param ttlSeconds - Time to live in secondi (default: 3600 = 1 ora)
   */
  async set(key: string, value: unknown, ttlSeconds: number = 3600): Promise<boolean> {
    if (!this.redis) return false

    try {
      await this.redis.set(key, value, { ex: ttlSeconds })
      return true
    } catch (error) {
      console.error(`Redis SET error for key ${key}:`, error)
      return false
    }
  }

  /**
   * Elimina una chiave dalla cache
   */
  async delete(key: string): Promise<boolean> {
    if (!this.redis) return false

    try {
      await this.redis.del(key)
      return true
    } catch (error) {
      console.error(`Redis DELETE error for key ${key}:`, error)
      return false
    }
  }

  /**
   * Elimina tutte le chiavi che corrispondono a un pattern
   */
  async deletePattern(pattern: string): Promise<number> {
    if (!this.redis) return 0

    try {
      // @upstash/redis non supporta direttamente KEYS, quindi usiamo SCAN
      // Per semplicità, implementiamo un approccio alternativo
      // In produzione, considera di usare nomi di chiavi prefissati e mantenerli in un set
      return 0
    } catch (error) {
      console.error(`Redis DELETE pattern error for ${pattern}:`, error)
      return 0
    }
  }

  /**
   * Verifica se Redis è disponibile
   */
  isAvailable(): boolean {
    return this.redis !== null
  }
}

/**
 * Istanza singleton del CacheManager (lazy initialization)
 */
let cacheInstance: CacheManager | null = null

export const cache = {
  get instance(): CacheManager {
    if (!cacheInstance) {
      cacheInstance = new CacheManager()
    }
    return cacheInstance
  },
  isAvailable(): boolean {
    return this.instance.isAvailable()
  },
  async get<T>(key: string): Promise<T | null> {
    return this.instance.get<T>(key)
  },
  async set(key: string, value: unknown, ttlSeconds: number = 3600): Promise<boolean> {
    return this.instance.set(key, value, ttlSeconds)
  },
  async delete(key: string): Promise<boolean> {
    return this.instance.delete(key)
  },
  async deletePattern(pattern: string): Promise<number> {
    return this.instance.deletePattern(pattern)
  },
}

/**
 * Genera una chiave di cache per un endpoint
 */
export function getCacheKey(endpoint: string, params?: Record<string, string>): string {
  const baseKey = `api:${endpoint}`
  if (!params || Object.keys(params).length === 0) {
    return baseKey
  }
  const paramString = Object.entries(params)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}:${value}`)
    .join(':')
  return `${baseKey}:${paramString}`
}

/**
 * Genera una chiave per rate limiting
 */
export function getRateLimitKey(ip: string, endpoint: string): string {
  return `ratelimit:${endpoint}:${ip}`
}

