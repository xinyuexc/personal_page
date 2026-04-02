export function sortByFeaturedRank<T extends { data: { featuredRank?: number } }>(
  entries: T[],
) {
  return [...entries].sort(
    (left, right) => (left.data.featuredRank ?? 99) - (right.data.featuredRank ?? 99),
  );
}

export function sortByDateDesc<T extends { data: { publishedAt: Date } }>(entries: T[]) {
  return [...entries].sort(
    (left, right) => right.data.publishedAt.valueOf() - left.data.publishedAt.valueOf(),
  );
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}
