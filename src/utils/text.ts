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

// Minimal inline-markdown → HTML for bilingual bio paragraphs.
// Escapes first (safe), then renders **bold**, *italic*, `code`, and [text](url) links.
export function mdInline(src: string): string {
  let s = escapeHtml(src);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*(?!\s)([^*]*?)\*/g, '$1<em>$2</em>');
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  // inline link [text](https://...) — opens safely in a new tab
  s = s.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  );
  return s;
}
