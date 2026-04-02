export function withBase(path = '') {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, '');

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}

export function stripBase(pathname: string) {
  const base = import.meta.env.BASE_URL;

  if (base === '/' || !pathname.startsWith(base)) {
    return pathname;
  }

  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const stripped = pathname.slice(normalizedBase.length);

  return stripped || '/';
}
