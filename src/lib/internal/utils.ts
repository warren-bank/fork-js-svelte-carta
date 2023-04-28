/**
 * Debounce the provided function.
 * @param cb Callback function.
 * @param wait The time to wait in milliseconds.
 */
export function debounce<T extends unknown[]>(cb: (...args: T) => unknown, wait = 1000) {
  let timeout: number;
  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), wait);
  };
}

/**
 * Check if two sets have the same values.
 * @param a First set.
 * @param b Second set.
 * @returns Whether the two sets contain the same values.
 */
export function areEqualSets<T>(a: Set<T>, b: Set<T>) {
  if (a.size !== b.size) return false;

  const aClone = new Set(a);
  const bClone = new Set(b);

  for (const elem of aClone) {
    bClone.add(elem);
    if (bClone.size !== b.size) return false;
  }

  for (const elem of bClone) {
    aClone.add(elem);
    if (aClone.size !== a.size) return false;
  }

  return true;
}

/**
 * Merge a partial interface with the provided one.
 * @param partial The partial interface.
 * @param def Default interface values.
 * @returns The merged interface.
 */
export function mergeDefaultInterface<T extends object>(partial: Partial<T>, def: T): T {
  const final = { ...def };
  Object.entries(partial).forEach(([key, value]) => {
    final[key as keyof T] = value as T[keyof T];
  });
  return final;
}