import { Redis } from '@upstash/redis'

// Test diretto della connessione Redis
const redis = new Redis({
  url: 'https://eager-cockatoo-20974.upstash.io',
  token: 'AVHuAAIncDJmOWNlN2UzNjE0ZGQ0MjJhYTI1YzRiZDdkZDgzZjc0Y3AyMjA5NzQ',
})

async function testRedis() {
  try {
    console.log('Testing Redis connection...')
    
    // Test SET
    await redis.set('test:foo', 'bar')
    console.log('✓ SET operation successful')
    
    // Test GET
    const value = await redis.get('test:foo')
    console.log('✓ GET operation successful:', value)
    
    // Test DELETE
    await redis.del('test:foo')
    console.log('✓ DELETE operation successful')
    
    console.log('\n✅ Redis connection test PASSED!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Redis connection test FAILED:', error)
    process.exit(1)
  }
}

testRedis()

