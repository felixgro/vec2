import Vec2 from '../src/Vec2';

describe('addition', () => {
   test('with scalar', () => {
      const vec = new Vec2(1, 1);

      vec.add(1);

      expect(vec.pos).toEqual([2, 2]);
   });

   test('with vector', () => {
      const vec = new Vec2(1, 1);

      vec.add(Vec2.right());

      expect(vec.pos).toEqual([2, 1]);
   });
});

describe('subtraction', () => {
   test('with scalar', () => {
      const vec = new Vec2(1, 1);

      vec.subtract(1);

      expect(vec.pos).toEqual([0, 0]);
   });

   test('with vector', () => {
      const vec = new Vec2(1, 1);

      vec.subtract(Vec2.right());

      expect(vec.pos).toEqual([0, 1]);
   });
});

describe('multiplication', () => {
   test('with scalar', () => {
      const vec = new Vec2(1, 1);

      vec.multiply(2);

      expect(vec.pos).toEqual([2, 2]);
   });

   test('with vector', () => {
      const vec = new Vec2(1, 1);

      vec.multiply(Vec2.right());

      expect(vec.pos).toEqual([1, 0]);
   });
});

describe('division', () => {
   test('with scalar', () => {
      const vec = new Vec2(4, 8);

      vec.divide(2);

      expect(vec.pos).toEqual([2, 4]);
   });

   test('with vector', () => {
      const vec = new Vec2(4, 10);

      vec.divide(new Vec2(2, 5));

      expect(vec.pos).toEqual([2, 2]);
   });
});