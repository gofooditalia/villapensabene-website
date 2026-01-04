import { z } from 'zod'
import { HTTPException } from 'hono/http-exception'
import type { Context, Next } from 'hono'

/**
 * Schema di validazione per il form contatti/prenotazioni
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Il nome deve contenere almeno 2 caratteri').max(100),
  email: z.string().email('Email non valida'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Il messaggio deve contenere almeno 10 caratteri').max(1000),
  date: z.string().optional(),
  guests: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Middleware per validare i dati della richiesta con Zod
 */
export function validateBody<T extends z.ZodType>(schema: T) {
  return async (c: Context, next: Next) => {
    try {
      const body = await c.req.json()
      const validatedData = schema.parse(body)
      c.set('validatedData', validatedData)
      await next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HTTPException(400, {
          message: `Validation error: ${error.issues.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`,
        })
      }
      throw error
    }
  }
}

