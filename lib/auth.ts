const ALLOWED_EMAILS = [
  'info@g-knowthyself.com',
  'OtoI.snowman@gmail.com',
  'fujii@g-knowthyself.com',
  'asakura@g-knowthyself.com',
  'iida@g-knowthyself.com',
  'maekawa@tomoiki-works.jp',
  'minamida@kanbutsu.co.jp',
]

const FALLBACK_SECRET = 'benkyo-kyokasho-default-secret-change-in-production'

function getAuthSecret(): string {
  return process.env.AUTH_SECRET || FALLBACK_SECRET
}

async function createSignature(payload: string): Promise<string> {
  const secret = getAuthSecret()
  const encoder = new TextEncoder()
  const keyData = encoder.encode(secret)
  const data = encoder.encode(payload)

  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signature = await crypto.subtle.sign('HMAC', key, data)
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

async function verifySignature(payload: string, signature: string): Promise<boolean> {
  const expectedSignature = await createSignature(payload)

  if (signature.length !== expectedSignature.length) {
    return false
  }

  let result = 0
  for (let i = 0; i < signature.length; i++) {
    result |= signature.charCodeAt(i) ^ expectedSignature.charCodeAt(i)
  }
  return result === 0
}

export function isAllowedEmail(email: string): boolean {
  const normalizedEmail = email.toLowerCase().trim()
  return ALLOWED_EMAILS.some((e) => e.toLowerCase() === normalizedEmail)
}

export function getOriginalEmail(email: string): string | undefined {
  const normalizedEmail = email.toLowerCase().trim()
  return ALLOWED_EMAILS.find((e) => e.toLowerCase() === normalizedEmail)
}

export async function createAuthToken(email: string): Promise<string> {
  const payload = JSON.stringify({ email, ts: Date.now() })
  const signature = await createSignature(payload)
  const token = `${btoa(payload)}.${signature}`
  return token
}

export async function parseAuthToken(token: string): Promise<{ email: string; ts: number } | null> {
  try {
    const parts = token.split('.')
    if (parts.length !== 2) {
      return null
    }

    const [payloadBase64, signature] = parts
    const payload = atob(payloadBase64)

    const isValid = await verifySignature(payload, signature)
    if (!isValid) {
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

export async function validateAuthToken(token: string): Promise<boolean> {
  const parsed = await parseAuthToken(token)
  if (!parsed) return false

  if (!isAllowedEmail(parsed.email)) return false

  const maxAge = 30 * 24 * 60 * 60 * 1000
  if (Date.now() - parsed.ts > maxAge) return false

  return true
}
