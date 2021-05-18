import type Vec2 from '../Vec2';

/**
 * Converts radians to degrees.
 * 
 * @param radians 
 * @returns degrees
 */
export const toDegrees = (radians: number): number => {
   return radians * 180 / Math.PI;
}

/**
 * Converts degrees to radians.
 * 
 * @param degrees 
 * @returns radians
 */
export const toRadians = (degrees: number): number => {
   return degrees * Math.PI / 180;
}

/**
 * Clamps a given value in between specified min and max.
 * 
 * @param value 
 * @param min 
 * @param max 
 * @returns clamped number
 */
export const clamp = (value: number, min: number, max: number): number => {
   return Math.min(Math.max(value, min), max);
}

/**
 * Performs a linear interpolation between two vectors.
 * 
 * @param vecA 
 * @param vecB 
 * @param progress 
 * @returns new vector
 */
export const lerp = (vecA: Vec2, vecB: Vec2, progress: number): Vec2 => {
   progress = clamp(progress, 0, 1);

   const dirVec = vecB.clone().subtract(vecA);

   return vecA.clone().add(dirVec.multiply(progress));
}