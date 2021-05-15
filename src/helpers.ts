import Vec2 from './Vec2';

export const clamp = (value: number, min: number, max: number): number => {
   return Math.min(Math.max(value, min), max);
}

export const lerp = (vecA: Vec2, vecB: Vec2, progress: number): Vec2 => {
   progress = clamp(progress, 0, 1);

   const dirVec = vecB.clone().subtract(vecA);

   return vecA.clone().add(dirVec.multiply(progress));
}

export const distanceBetween = (vecA: Vec2, vecB: Vec2): number => {
   return vecA.distanceTo(vecB);
}

export const angleBetween = (vecA: Vec2, vecB: Vec2): number => {
   return vecA.angleTo(vecB);
}

export interface DrawOptions {
   origin?: Vec2;
   color?: string;
   width?: number;
   arrow?: boolean;
}

export const draw = (vec: Vec2, ctx: CanvasRenderingContext2D, {
   origin = new Vec2(),
   color = 'black',
   width = 3,
   arrow = true
}: DrawOptions) => {
   ctx.save();
   ctx.strokeStyle = color;
   ctx.lineWidth = width;
   ctx.lineCap = 'round';

   ctx.translate(...origin.rawPosition);
   ctx.beginPath();
   ctx.moveTo(0, 0);
   ctx.lineTo(...vec.rawPosition);
   ctx.stroke();

   if (arrow) {
      const arrowLength = clamp(2 * width, 7, 50);

      ctx.translate(...vec.rawPosition);
      ctx.rotate(Vec2.up().angleTo(vec));
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(arrowLength, arrowLength);
      ctx.moveTo(0, 0);
      ctx.lineTo(-arrowLength, arrowLength);
      ctx.stroke();
   }

   ctx.restore();
}

export const drawMany = (ctx: CanvasRenderingContext2D, {
   origin = new Vec2(),
   color = 'black',
   width = 3,
   arrow = true
}: DrawOptions, ...vectors: Vec2[]) => {
   for (const vec of vectors) draw(vec, ctx, { origin, color, width, arrow });
}