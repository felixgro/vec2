import Vec2, { draw, drawMany } from '../../src/index';

const getCtx = (): CanvasRenderingContext2D => {
   const canvas = document.createElement('canvas');
   return canvas.getContext('2d')!;
}

describe('draw', () => {
   test('with default options', () => {
      const vec = Vec2.up();
      const ctx = getCtx();

      draw(vec, ctx);

      // @ts-ignore
      expect(ctx.__getEvents()).toMatchSnapshot();
   });

   test('with custom options', () => {
      const vec = Vec2.up();
      const ctx = getCtx();

      draw(vec, ctx, {
         origin: new Vec2(100, 100),
         color: '#ff0000',
         width: 3,
         arrow: false
      });

      // @ts-ignore
      expect(ctx.__getEvents()).toMatchSnapshot();
   });
});

describe('drawMany', () => {
   test('with default options', () => {
      const vecA = Vec2.up();
      const vecB = Vec2.down();
      const ctx = getCtx();

      drawMany([vecA, vecB], ctx);

      // @ts-ignore
      expect(ctx.__getEvents()).toMatchSnapshot();
   });

   test('with custom options', () => {
      const vecA = Vec2.up();
      const vecB = Vec2.down();
      const ctx = getCtx();

      drawMany([vecA, vecB], ctx, {
         origin: new Vec2(100, 100),
         color: '#ff0000',
         width: 5,
         arrow: false
      });

      // @ts-ignore
      expect(ctx.__getEvents()).toMatchSnapshot();
   });
})