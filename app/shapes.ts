// Shared "randomised" card shapes for the masonry walls (/projects, /blog).
//
// The variation comes from a hash of the card's own title rather than
// Math.random(), so a card keeps the same shape on every render — no
// server/client hydration mismatch, and the wall doesn't reshuffle itself
// while you type in a search box.

export function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

export const radii = ["rounded-lg", "rounded-2xl", "rounded-3xl", "rounded-[2rem]"];
export const pads = ["p-4", "p-5", "p-6", "p-7"];
export const titleSizes = ["text-lg", "text-xl", "text-2xl"];
export const tints = ["bg-white", "bg-white", "bg-stone-50", "bg-neutral-50"];
export const tilts = ["hover:rotate-[0.7deg]", "hover:-rotate-[0.7deg]", "hover:rotate-0"];
