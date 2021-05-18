import type Vec2 from '../Vec2';

export const randomBetween = (vecA: Vec2, vecB: Vec2): Vec2 => {
   const diff = vecB.clone().subtract(vecA);

   diff.x *= Math.random();
   diff.y *= Math.random();

   return vecA.clone().add(diff);
}