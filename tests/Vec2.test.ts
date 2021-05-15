import * as Vec2Import from '../src/Vec2';

const Vec2 = Vec2Import.default;

test('has static constructors', () => {
   expect(Vec2.up().rawPosition).toStrictEqual([0, -1]);
   expect(Vec2.down().rawPosition).toStrictEqual([0, 1]);
   expect(Vec2.left().rawPosition).toStrictEqual([-1, 0]);
   expect(Vec2.right().rawPosition).toStrictEqual([1, 0]);
});

test('has length', () => {
   const vec = new Vec2(1, 0);

   expect(vec.length).toBe(1);
})

test('can add vec', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(1, 0);

   expect(vecA.add(vecB).rawPosition).toStrictEqual([2, 1]);
});

test('can subtract vec', () => {
   const vecA = new Vec2(1, 1);
   const vecB = new Vec2(1, 0);

   expect(vecA.subtract(vecB).rawPosition).toStrictEqual([0, 1]);
});

test('can multiply with scalar', () => {
   const vecA = new Vec2(1, 1);

   expect(vecA.multiply(2).rawPosition).toStrictEqual([2, 2]);
});

test('can divide by scalar', () => {
   const vecA = new Vec2(4, 8);

   expect(vecA.divide(2).rawPosition).toStrictEqual([2, 4]);
});

test('can normalize itself', () => {
   const vec = new Vec2(5, 0);

   expect(vec.normalize().rawPosition).toStrictEqual([1, 0]);
});

test('can clone itself', () => {
   const vecA = new Vec2(1, 0);
   const vecB = vecA.clone().multiply(2);

   expect(vecA.length).toBe(1);
   expect(vecB.length).toBe(2);
});

test('can check equality', () => {
   const vecA = new Vec2(3, 0);
   const vecB = new Vec2(3, 0);
   const vecC = new Vec2(0, 3);

   expect(vecA.equals(vecB)).toBeTruthy();
   expect(vecA.equals(vecC)).toBeFalsy();
});
