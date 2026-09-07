import { test } from 'node:test';
import assert from 'node:assert/strict';
import { previewSize } from '../src/lib/preview-size.ts';

test('1440px archify is not upscaled on a Retina desktop', () => {
  const size = previewSize(1440, 810, 1855, 850, 2);
  assert.deepEqual(size, { width: 720, height: 405 });
});

test('all source images fit, preserve aspect ratio, and respect the pixel budget', () => {
  for (const [width, height] of [[1440, 810], [2880, 1620], [2742, 1182], [500, 2000]]) {
    for (const [vw, vh, dpr] of [[1855, 850, 2], [366, 754, 3], [1000, 600, 1]]) {
      const size = previewSize(width, height, vw, vh, dpr);
      assert.ok(size.width <= vw + 0.001 && size.height <= vh + 0.001);
      assert.ok(size.width * dpr <= width + 0.001 && size.height * dpr <= height + 0.001);
      assert.ok(Math.abs(size.width / size.height - width / height) < 0.001);
    }
  }
});
