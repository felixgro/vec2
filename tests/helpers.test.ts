import Vec2, {
   toRadians,
   toDegrees,
   clamp,
   lerp,
   randomBetween
} from '../src/index';

test('clamp', () => {
   expect(clamp(5, 0, 1)).toBe(1);
   expect(clamp(-5, 0, 1)).toBe(0);
   expect(clamp(.5, 0, 1)).toBe(.5);
});

test('toRadians', () => {
   expect(toRadians(90)).toBe(Math.PI / 2);
});

test('toDegrees', () => {
   expect(toDegrees(Math.PI / 2)).toBe(90);
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

   const isInRange = vecC.x < vecB.x && vecA.x < vecC.x && vecC.y < vecB.y && vecA.y < vecC.y;

   expect(isInRange).toBeTruthy();
});