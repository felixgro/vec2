import Vec2, {
   clamp,
   distanceBetween,
   angleBetween,
   lerp,
   randomBetween
} from '../src/index';

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
   expect(angleBetween(vecB, vecA)).toBe(angleBetween(vecA, vecB));
});

test('lerp', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(-1, -1);

   const vecC = lerp(vecA, vecB, 0.5);

   expect(vecC.rawPosition).toEqual([0, 0])
});

test('randomBetween', () => {
   const vecA = new Vec2(-5, -5);
   const vecB = new Vec2(5, 5);

   const vecC = randomBetween(vecA, vecB);

   expect(vecC.x < vecB.x).toBeTruthy();
   expect(vecA.x < vecC.x).toBeTruthy();
   expect(vecC.y < vecB.y).toBeTruthy();
   expect(vecA.y < vecC.y).toBeTruthy();
});