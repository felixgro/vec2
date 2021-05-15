import Vec2 from '../src/Vec2';

test('addition', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(1, 0);

   expect(vecA.add(vecB).rawPosition).toStrictEqual([2, 1]);
});

test('subtraction', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(1, 0);

   expect(vecA.subtract(vecB).rawPosition).toStrictEqual([0, 1]);
});

test('multiplication', () => {
   const vecA = new Vec2(1, 1);

   expect(vecA.multiply(2).rawPosition).toStrictEqual([2, 2]);
});

test('division', () => {
   const vecA = new Vec2(4, 8);

   expect(vecA.divide(2).rawPosition).toStrictEqual([2, 4]);
});