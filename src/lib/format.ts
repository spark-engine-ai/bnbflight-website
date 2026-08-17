const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

/**
 * Formats a plain "YYYY-MM-DD" string without ever constructing a `Date`
 * object — `new Date('2026-08-17')` parses as UTC midnight, and any
 * subsequent `.toLocaleDateString()` renders it in the viewer's local
 * timezone, which silently shows the previous day west of UTC. Splitting
 * the string directly sidesteps the whole class of bug.
 */
export function formatDate(iso: string, style: 'long' | 'short' = 'long'): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  const month = MONTHS[m - 1] ?? ''
  const monthLabel = style === 'short' ? month.slice(0, 3) : month
  return `${monthLabel} ${d}, ${y}`
}
