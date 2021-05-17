import Vec2 from '../src/Vec2';

test('addition', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(1, 0);

   expect(vecA.add(vecB).rawPosition).toStrictEqual([2, 1]);
   expect(vecB.add(2).rawPosition).toStrictEqual([3, 2]);
});

test('subtraction', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(1, 0);

   expect(vecA.subtract(vecB).rawPosition).toStrictEqual([0, 1]);
   expect(vecB.subtract(1).rawPosition).toStrictEqual([0, -1]);
});

test('multiplication', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(2, 4);

   expect(vecA.multiply(vecB).rawPosition).toStrictEqual([2, 4]);
   expect(vecB.multiply(2).rawPosition).toStrictEqual([4, 8]);
});

test('division', () => {
   const vecA = new Vec2(4, 8);
   const vecB = new Vec2(2, 2);

   expect(vecA.divide(vecB).rawPosition).toStrictEqual([2, 4]);
   expect(vecB.divide(2).rawPosition).toStrictEqual([1, 1]);
});