import Vec2 from '../Vec2';
import { clamp } from './math';

export interface DrawOptions {
   origin?: Vec2;
   color?: string;
   width?: number;
   arrow?: boolean;
}

/**
 * Render a vector using specified canvas2d context.
 * 
 * @param vec
 * @param ctx
 * @param options
 */
export const draw = (vec: Vec2, ctx: CanvasRenderingContext2D, {
   origin = new Vec2(),
   color = 'black',
   width = 3,
   arrow = true
}: DrawOptions = {}) => {
   ctx.save();
   ctx.strokeStyle = color;
   ctx.lineWidth = width;
   ctx.lineCap = 'round';

   ctx.translate(...origin.pos);
   ctx.beginPath();
   ctx.moveTo(0, 0);
   ctx.lineTo(...vec.pos);
   ctx.stroke();

   if (arrow) {
      const arrowLength = clamp(2 * width, 7, 50);

      ctx.translate(...vec.pos);
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

/**
 * Render multiple vectors with specified canvas2d context.
 * 
 * @param vectors
 * @param ctx
 * @param options
 */
export const drawMany = (vectors: Vec2[], ctx: CanvasRenderingContext2D, {
   origin = new Vec2(),
   color = 'black',
   width = 3,
   arrow = true
}: DrawOptions = {}) => {
   for (const vec of vectors) draw(vec, ctx, { origin, color, width, arrow });
}