type CacheEntry<T> = {
  value: T;
  expiresAt?: number;
};

export class Cache {
  private store = new Map<string, CacheEntry<unknown>>();
  private maxSize: number;
  private defaultTTL?: number;

  constructor(maxSize = 1000, defaultTTL?: number) {
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTL;
  }

  private cleanupExpired() {
    const now = Date.now();
    for (const [key, entry] of this.store) {
      if (entry.expiresAt && entry.expiresAt < now) {
        this.store.delete(key);
      }
    }
  }

  has(key: string): boolean {
    this.cleanupExpired();
    return this.store.has(key);
  }

  get<T>(key: string): T | undefined {
    this.cleanupExpired();
    const entry = this.store.get(key);
    if (!entry) return undefined;

    this.store.delete(key);
    this.store.set(key, entry);

    return entry.value as T;
  }

  set<T>(key: string, value: T, ttl?: number): void {
    this.cleanupExpired();

    if (this.store.size >= this.maxSize && !this.store.has(key)) {
      const firstKey = this.store.keys().next().value;
      this.store.delete(firstKey as string);
    }

    const expiresAt =
      ttl !== undefined
        ? Date.now() + ttl
        : this.defaultTTL
        ? Date.now() + this.defaultTTL
        : undefined;

    if (this.store.has(key)) this.store.delete(key);
    this.store.set(key, { value, expiresAt });
  }

  delete(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }

  keys(): string[] {
    this.cleanupExpired();
    return [...this.store.keys()];
  }
}

export const globalCache = new Cache(1000, 5 * 60 * 1000);
