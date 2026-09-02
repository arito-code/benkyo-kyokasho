const ALLOWED_EMAILS = [
  'info@g-knowthyself.com',
  'OtoI.snowman@gmail.com',
  'fujii@g-knowthyself.com',
  'asakura@g-knowthyself.com',
  'iida@g-knowthyself.com',
]

export function isAllowedEmail(email: string): boolean {
  const normalizedEmail = email.toLowerCase().trim()
  return ALLOWED_EMAILS.some((e) => e.toLowerCase() === normalizedEmail)
}

export function getOriginalEmail(email: string): string | undefined {
  const normalizedEmail = email.toLowerCase().trim()
  return ALLOWED_EMAILS.find((e) => e.toLowerCase() === normalizedEmail)
}

export function createAuthToken(email: string): string {
  return btoa(JSON.stringify({ email, ts: Date.now() }))
}

export function parseAuthToken(token: string): { email: string; ts: number } | null {
  try {
    const decoded = JSON.parse(atob(token))
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
