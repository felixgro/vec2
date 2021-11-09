import Vec2 from '../src/Vec2';

test('has default constructor', () => {
   expect(new Vec2().pos).toEqual([0, 0]);
   expect(new Vec2(1, 1).pos).toEqual([1, 1]);
});

test('has static normal constructors', () => {
   expect(Vec2.up().pos).toEqual([0, -1]);
   expect(Vec2.down().pos).toEqual([0, 1]);
   expect(Vec2.left().pos).toEqual([-1, 0]);
   expect(Vec2.right().pos).toEqual([1, 0]);
});

test('has random constructor', () => {
   const vecA = Vec2.random();
   const vecB = Vec2.random();
   const vecC = Vec2.random();
   const vecD = Vec2.random();
   const vecE = Vec2.random();
   const vecF = Vec2.random();

   expect(vecA.length).toBeCloseTo(1);
   expect(vecB.length).toBeCloseTo(1);
   expect(vecC.length).toBeCloseTo(1);
   expect(vecD.length).toBeCloseTo(1);
   expect(vecE.length).toBeCloseTo(1);
   expect(vecF.length).toBeCloseTo(1);
});

test('has angle constructor', () => {
   const vecA = Vec2.fromAngle(0, 1);
   const vecB = Vec2.fromAngle(Math.PI * 0.5);
   const vecC = Vec2.fromAngle(Math.PI);

   expect(Vec2.right().angleTo(vecA)).toBe(0);
   expect(Vec2.down().angleTo(vecB)).toBe(0);
   expect(Vec2.left().angleTo(vecC)).toBe(0);
});

test('has length', () => {
   expect(new Vec2(1, 0).length).toBe(1);
});

test('can normalize', () => {
   const vec = new Vec2(5, 0);

   expect(vec.normalize().pos).toEqual([1, 0]);
});

test('can inverse', () => {
   const vec = new Vec2(5, -2);

   expect(vec.inverse().pos).toEqual([-5, 2]);
});

test('can rotate', () => {
   const vec = Vec2.up();

   vec.rotate(Math.PI / 2);

   expect(Vec2.right().angleTo(vec)).toBeCloseTo(0);

   vec.rotate(Math.PI / 2, false);

   expect(Vec2.up().angleTo(vec)).toBeCloseTo(0);
});

test('can set magnitude', () => {
   const vec = Vec2.right();

   vec.setMagnitude(2)

   expect(vec.length).toBe(2);
});

test('can clamp magnitude', () => {
   const vectors = [
      Vec2.left().setMagnitude(1),
      Vec2.left().setMagnitude(3),
      Vec2.left().setMagnitude(5)
   ];

   for (const vec of vectors) vec.clampMagnitude(2, 4);

   expect(vectors[0].length).toBe(2);
   expect(vectors[1].length).toBe(3);
   expect(vectors[2].length).toBe(4);
});

test('can calculate dot product', () => {
   const vecA = new Vec2(2, 2);
   const vecB = new Vec2(1, 2);

   expect(vecA.dot(vecB)).toBe(6);
});

test('can calculate cross product', () => {
   const vecA = new Vec2(1, 2);
   const vecB = new Vec2(1, 2);

   expect(vecA.cross(vecB)).toBe(4);
});

test('can calculate distance', () => {
   const vecA = new Vec2();
   const vecB = new Vec2(1, 0);

   expect(vecA.distanceTo(vecB)).toBe(1);
   expect(vecB.distanceTo(vecA)).toBe(vecA.distanceTo(vecB));
});

test('can calculate angle in range', () => {
   const vecA = Vec2.up();
   const vecB = Vec2.left();
   const vecC = Vec2.left();

   expect(vecA.angleTo(vecB)).toBe(-Math.PI * 0.5);
   expect(vecB.angleTo(vecA)).toBe(Math.PI * 0.5);
   // expect(vecB.angleTo(vecA)).toBe(Math.PI);
});

test('can calculate angle in range [0, 2π]', () => {
   const vecA = new Vec2(0, 1);
   const vecB = new Vec2(1, 0);

   expect(vecA.angleTo(vecB, true)).toBe(Math.PI * 1.5);
   expect(vecB.angleTo(vecA, true)).toBe(Math.PI * 0.5);
});

test('can check equality', () => {
   const vecA = new Vec2(3, 0);
   const vecB = new Vec2(3, 0);
   const vecC = new Vec2(0, 3);

   expect(vecA.equals(vecB)).toBeTruthy();
   expect(vecA.equals(vecC)).toBeFalsy();
});

test('can clone itself', () => {
   const vecA = new Vec2(1, 0);
   const vecB = vecA.clone().multiply(2);

   expect(vecA.length).toBe(1);
   expect(vecB.length).toBe(2);
});
