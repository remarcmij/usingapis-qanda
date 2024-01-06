// video: https://www.youtube.com/watch?v=naL7-XQ7T70&t=24s
// source code: https://gist.github.com/branneman/71428ab3c4c90941e90485ac0b53b2b7

/**
 * Returns a list of numbers from `min` (inclusive) to `max` (exclusive).
 */
const range = (min, max, acc = []) => {
  if (max < min) throw new Error('not supported!');
  if (min >= max) return acc;
  return range(min + 1, max, acc.concat(min));
};

/**
 * Very minimal Unit-testing framework
 */
const assert = require('assert'); // Node.js standard module
const tests = [];
const test = (name, fn) => tests.push({ name, fn });
const run = () =>
  tests.forEach((t) => {
    try {
      t.fn();
      console.log(`\n✅ PASSED: ${t.name}`);
    } catch (e) {
      console.log(`\n❌ FAILED: ${t.name}`);
      console.error(e.message);
    }
  });

/**
 * Unit tests
 */
test('equal min-max works inclusive-exclusive', () => {
  assert.deepEqual(range(0, 0), []);
});
test('max is handled exclusively', () => {
  assert.deepEqual(range(0, 1), [0]);
  assert.deepEqual(range(0, 2), [0, 1]);
});
test('handles starting at higher numbers', () => {
  assert.deepEqual(range(5, 9), [5, 6, 7, 8]);
});
test('supports negative numbers', () => {
  assert.deepEqual(range(-5, -3), [-5, -4]);
  assert.deepEqual(range(-5, 3), [-5, -4, -3, -2, -1, 0, 1, 2]);
});
test('does not support decreasing numbers', () => {
  assert.throws(() => range(8, 3));
});

run();
