import type Vec2 from '../Vec2';

export const toDegrees = (radians: number): number => {
   return radians * 180 / Math.PI;
}

export const toRadians = (degrees: number): number => {
   return degrees * Math.PI / 180;
}

export const clamp = (value: number, min: number, max: number): number => {
   return Math.min(Math.max(value, min), max);
}

export const lerp = (vecA: Vec2, vecB: Vec2, progress: number): Vec2 => {
   progress = clamp(progress, 0, 1);

   const dirVec = vecB.clone().subtract(vecA);

   return vecA.clone().add(dirVec.multiply(progress));
}