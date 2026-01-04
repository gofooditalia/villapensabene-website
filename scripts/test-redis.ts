/**
 * Script di test per verificare la connessione Redis
 * Esegui con: bun run scripts/test-redis.ts
 */

import { getRedisClient, cache } from '../lib/redis'

async function testRedis() {
  console.log('🔍 Testing Redis connection...\n')

  // Verifica se Redis è disponibile
  if (!cache.isAvailable()) {
    console.error('❌ Redis non è disponibile!')
    console.log('\nVerifica che le variabili d\'ambiente siano configurate:')
    console.log('- UPSTASH_REDIS_REST_URL')
    console.log('- UPSTASH_REDIS_REST_TOKEN')
    process.exit(1)
  }

  console.log('✅ Redis client inizializzato correttamente\n')

  // Test di scrittura
  console.log('📝 Test scrittura...')
  const testKey = 'test:connection'
  const testValue = { message: 'Hello Redis!', timestamp: new Date().toISOString() }
  
  const setResult = await cache.set(testKey, testValue, 60)
  if (setResult) {
    console.log('✅ Scrittura riuscita')
  } else {
    console.error('❌ Scrittura fallita')
    process.exit(1)
  }

  // Test di lettura
  console.log('📖 Test lettura...')
  const readValue = await cache.get(testKey)
  if (readValue) {
    console.log('✅ Lettura riuscita')
    console.log('   Valore recuperato:', readValue)
  } else {
    console.error('❌ Lettura fallita')
    process.exit(1)
  }

  // Test di cancellazione
  console.log('🗑️  Test cancellazione...')
  const deleteResult = await cache.delete(testKey)
  if (deleteResult) {
    console.log('✅ Cancellazione riuscita')
  } else {
    console.error('❌ Cancellazione fallita')
  }

  console.log('\n🎉 Tutti i test Redis sono passati!')
}

testRedis().catch((error) => {
  console.error('❌ Errore durante il test:', error)
  process.exit(1)
})

