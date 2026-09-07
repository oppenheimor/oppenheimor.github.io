/** Fit within the viewport without stretching a source pixel across device pixels. */
export function previewSize(width: number, height: number, availableWidth: number, availableHeight: number, pixelRatio: number) {
  if (width <= 0 || height <= 0) return { width: 0, height: 0 };
  const dpr = Number.isFinite(pixelRatio) && pixelRatio > 0 ? pixelRatio : 1;
  const scale = Math.max(0, Math.min(1 / Math.max(1, dpr), availableWidth / width, availableHeight / height));
  return { width: width * scale, height: height * scale };
}
