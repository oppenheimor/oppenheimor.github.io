/** Coordinates are in the original 640 × 673 mascot image. */
export const CAT_EYES = [
  { x: 152, y: 250 },
  { x: 328, y: 251 },
] as const;

/** Elliptically bounded displacement; close pointers don't cause sudden jumps. */
export function catGaze(dx: number, dy: number) {
  const distance = Math.hypot(dx, dy);
  const strength = Math.min(distance / 180, 1);
  if (!distance) return { x: 0, y: 0 };
  return { x: dx / distance * 9 * strength, y: dy / distance * 7 * strength };
}
