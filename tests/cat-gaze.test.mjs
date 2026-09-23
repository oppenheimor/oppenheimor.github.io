import assert from 'node:assert/strict';
import test from 'node:test';
import { catGaze } from '../src/lib/cat-gaze.ts';

test('gaze rests at the eye center without NaN', () => {
  assert.deepEqual(catGaze(0, 0), { x: 0, y: 0 });
});

test('gaze follows direction and eases in near the eye', () => {
  assert.deepEqual(catGaze(180, 0), { x: 9, y: 0 });
  assert.deepEqual(catGaze(0, -180), { x: 0, y: -7 });
  assert.equal(catGaze(90, 0).x, 4.5);
});

test('pupils stay inside their elliptical travel range in every direction', () => {
  for (let angle = 0; angle < 360; angle++) {
    const radians = angle * Math.PI / 180;
    const { x, y } = catGaze(Math.cos(radians) * 10000, Math.sin(radians) * 10000);
    assert.ok((x / 9) ** 2 + (y / 7) ** 2 <= 1.00000001);
  }
});
