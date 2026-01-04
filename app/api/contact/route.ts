import { createHonoApp } from '@/lib/hono'
import { handle } from '@/lib/hono-nextjs'
import { rateLimit } from '@/lib/middleware/rate-limit'
import { validateBody, contactFormSchema, type ContactFormData } from '@/lib/validation'

const app = createHonoApp()

// POST /api/contact - Gestisce il form contatti/prenotazioni
// Rate limit: 5 richieste per minuto per IP
app.post('/', rateLimit({ limit: 5, window: 60 }), validateBody(contactFormSchema), async (c) => {
  const data = c.get('validatedData') as ContactFormData
  
  // Qui puoi aggiungere la logica per:
  // - Inviare email di notifica
  // - Salvare nel database
  // - Inviare conferma al cliente
  
  // Per ora simuliamo il salvataggio
  console.log('Nuova richiesta contatto:', {
    ...data,
    timestamp: new Date().toISOString(),
  })
  
  // Simula un delay per l'invio
  await new Promise((resolve) => setTimeout(resolve, 500))
  
  return c.json({
    success: true,
    message: 'Messaggio inviato con successo. Ti risponderemo presto!',
    data: {
      id: `contact-${Date.now()}`,
      ...data,
      submittedAt: new Date().toISOString(),
    },
  }, 201)
})

export const POST = handle(app)

