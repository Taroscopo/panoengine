/**
 * Corta-corriente de anualidad (RULES.md §5).
 * Suspensión manual (hostingStatus='suspended') → 402.
 * Anualidad vencida (hostingExpiresAt en el pasado) → 410.
 * Fecha inválida/ausente: fail-open (no bloquea al cliente por un dato corrupto).
 */
export type GateState = { kind: 'active' } | { kind: 'suspended' } | { kind: 'expired' };

export function evaluateGate(hostingStatus: unknown, hostingExpiresAt: unknown, now: Date): GateState {
  if (hostingStatus === 'suspended') {
    return { kind: 'suspended' };
  }
  if (typeof hostingExpiresAt === 'string') {
    const ts = Date.parse(hostingExpiresAt);
    if (!Number.isNaN(ts) && ts <= now.getTime()) {
      return { kind: 'expired' };
    }
  }
  return { kind: 'active' };
}

export function gateStatusCode(state: GateState): 200 | 402 | 410 {
  switch (state.kind) {
    case 'active':
      return 200;
    case 'suspended':
      return 402;
    case 'expired':
      return 410;
  }
}
