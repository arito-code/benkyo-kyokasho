import { createHmac, timingSafeEqual } from 'crypto'

const ALLOWED_EMAILS = [
  'info@g-knowthyself.com',
  'OtoI.snowman@gmail.com',
  'fujii@g-knowthyself.com',
  'asakura@g-knowthyself.com',
  'iida@g-knowthyself.com',
]

const FALLBACK_SECRET = 'benkyo-kyokasho-default-secret-change-in-production'

function getAuthSecret(): string {
  return process.env.AUTH_SECRET || FALLBACK_SECRET
}

function createSignature(payload: string): string {
  const secret = getAuthSecret()
  return createHmac('sha256', secret).update(payload).digest('hex')
}

function verifySignature(payload: string, signature: string): boolean {
  const expectedSignature = createSignature(payload)
  
  try {
    const sigBuffer = Buffer.from(signature, 'hex')
    const expectedBuffer = Buffer.from(expectedSignature, 'hex')
    
    if (sigBuffer.length !== expectedBuffer.length) {
      return false
    }
    
    return timingSafeEqual(sigBuffer, expectedBuffer)
  } catch {
    return false
  }
}

export function isAllowedEmail(email: string): boolean {
  const normalizedEmail = email.toLowerCase().trim()
  return ALLOWED_EMAILS.some((e) => e.toLowerCase() === normalizedEmail)
}

export function getOriginalEmail(email: string): string | undefined {
  const normalizedEmail = email.toLowerCase().trim()
  return ALLOWED_EMAILS.find((e) => e.toLowerCase() === normalizedEmail)
}

export function createAuthToken(email: string): string {
  const payload = JSON.stringify({ email, ts: Date.now() })
  const signature = createSignature(payload)
  const token = `${Buffer.from(payload).toString('base64')}.${signature}`
  return token
}

export function parseAuthToken(token: string): { email: string; ts: number } | null {
  try {
    const parts = token.split('.')
    if (parts.length !== 2) {
      return null
    }
    
    const [payloadBase64, signature] = parts
    const payload = Buffer.from(payloadBase64, 'base64').toString('utf-8')
    
    if (!verifySignature(payload, signature)) {
      return null
    }
    
    const decoded = JSON.parse(payload)
    if (decoded.email && typeof decoded.ts === 'number') {
      return decoded
    }
    return null
  } catch {
    return null
  }
}

export function validateAuthToken(token: string): boolean {
  const parsed = parseAuthToken(token)
  if (!parsed) return false
  
  if (!isAllowedEmail(parsed.email)) return false
  
  const maxAge = 30 * 24 * 60 * 60 * 1000
  if (Date.now() - parsed.ts > maxAge) return false
  
  return true
}
