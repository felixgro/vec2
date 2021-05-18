import type Vec2 from '../Vec2';

/**
 * Create a random vector in between two specified vectors.
 * 
 * @param vecA 
 * @param vecB 
 * @returns new vector
 */
export const randomBetween = (vecA: Vec2, vecB: Vec2): Vec2 => {
   const diff = vecB.clone().subtract(vecA);

   diff.x *= Math.random();
   diff.y *= Math.random();

   return vecA.clone().add(diff);
}