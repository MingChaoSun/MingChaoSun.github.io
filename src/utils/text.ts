// Bold the author's own name within a plain authors string.
// Used via set:html — input is escaped first, so it is safe.
export function boldSelf(authors: string, name: string): string {
  const esc = escapeHtml(authors);
  if (!name) return esc;
  const escName = escapeHtml(name);
  return esc.replaceAll(escName, `<strong>${escName}</strong>`);
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      default: return '&#39;';
    }
  });
}
