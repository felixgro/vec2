import Vec2, { clamp, distanceBetween, angleBetween, lerp } from '../src/index';

test('clamp', () => {
   expect(clamp(5, 0, 1)).toBe(1);
   expect(clamp(-5, 0, 1)).toBe(0);
   expect(clamp(.5, 0, 1)).toBe(.5);
});

test('distanceBetween', () => {
   const vecA = new Vec2();
   const vecB = Vec2.left();

   expect(distanceBetween(vecA, vecB)).toBe(1);
});

test('angleBetween', () => {
   const vecA = Vec2.up();
   const vecB = Vec2.right();

   expect(angleBetween(vecA, vecB)).toBe(Math.PI / 2);
});

test('lerp', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(-1, -1);

   expect(lerp(vecA, vecB, 0.5).rawPosition).toEqual([0, 0])
});