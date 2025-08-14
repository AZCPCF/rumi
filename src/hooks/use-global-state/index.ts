import { useSyncExternalStore } from "react";
import { globalCache } from "./cache";

type Listener = () => void;

const listenersMap = new Map<string, Set<Listener>>();

function shallowEqual<T>(objA: T, objB: T): boolean {
  if (Object.is(objA, objB)) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA as object);
  const keysB = Object.keys(objB as object);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !Object.is((objA as Record<string, unknown>)[key], (objB as Record<string, unknown>)[key])
    ) {
      return false;
    }
  }

  return true;
}

export function useGlobalState<S>(
  key: string,
  initial?: S | (() => S)
): [S, (value: S | ((prev: S) => S)) => void] {
  // Initialize state if not present
  if (!globalCache.has(key) && initial !== undefined) {
    const initValue = typeof initial === "function" ? (initial as () => S)() : initial;
    globalCache.set(key, initValue);
  }

  // Ensure listener set exists
  if (!listenersMap.has(key)) {
    listenersMap.set(key, new Set());
  }

  const subscribe = (callback: Listener): (() => void) => {
    listenersMap.get(key)!.add(callback);
    return () => listenersMap.get(key)!.delete(callback);
  };

  const getSnapshot = (): S => {
    const state = globalCache.get<S>(key);
    if (state === undefined) {
      throw new Error(`Global state for key "${key}" is undefined`);
    }
    return state;
  };

  let lastSnapshot = getSnapshot();

  const store = useSyncExternalStore(subscribe, () => {
    const nextSnapshot = getSnapshot();
    if (shallowEqual(nextSnapshot, lastSnapshot)) {
      return lastSnapshot;
    }
    lastSnapshot = nextSnapshot;
    return nextSnapshot;
  });

  const setGlobalState = (value: S | ((prev: S) => S)) => {
    const prev = globalCache.get<S>(key);
    if (prev === undefined) {
      throw new Error(`Cannot update undefined global state for key "${key}"`);
    }
    const newValue = typeof value === "function" ? (value as (p: S) => S)(prev) : value;
    globalCache.set(key, newValue);
    listenersMap.get(key)!.forEach((listener) => listener());
  };

  return [store, setGlobalState];
}
