import Vec2, { randomBetween } from '../../src/index';

test('randomBetween', () => {
   const vecA = new Vec2(-5, -5);
   const vecB = new Vec2(5, 5);

   const vecC = randomBetween(vecA, vecB);

   const isInRange = vecC.x < vecB.x && vecA.x < vecC.x && vecC.y < vecB.y && vecA.y < vecC.y;

   expect(isInRange).toBeTruthy();
});