import Vec2 from '../src/Vec2';
import { toRadians, toDegrees, lerp } from '../src/helpers/math';

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

   expect(vecC.pos).toEqual([0, 0])
});