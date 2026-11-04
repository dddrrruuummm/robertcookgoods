export function Brand({ compact = false }: { compact?: boolean }) {
  return <span className={`brand${compact ? " brand-compact" : ""}`}>
    <svg width="43" height="43" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M6 16 24 6l18 10-18 10L6 16Z" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="round"/><path d="m6 25 18 10 18-10M6 34l18 10 18-10" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="round"/><path d="m16 10 18 10M24 26v18" stroke="currentColor" strokeWidth="3.4"/></svg>
    <span className="brand-wordmark"><strong>ROBERT COOK</strong><span>GOODS<span className="brand-period">.</span></span></span>
  </span>;
}
