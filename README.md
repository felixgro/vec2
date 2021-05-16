# Vec2

An intuitive, lightweight 2d vector library with built-in canvas support.

## Installation

Install using yarn or npm:

```bash
yarn add @felixgro/vec2
# or
npm i @felixgro/vec2
```

Import in Javascript or Typescript file:

```javascript
import Vec2 from '@felixgro/vec2';
```

## API

### Vector Properties

| Property      | Type             | Description                                                     |
| ------------- | ---------------- | --------------------------------------------------------------- |
| x             | number           | x-Coordinate                                                    |
| y             | number           | y-Coordinate                                                    |
| rawPosition   | [number, number] | Coordinates as array [x, y] to enable usage of spread operator. |
| length        | number           | absolute length of vector                                       |
| lengthSquared | number           | squared length of vector                                        |

### Instantiation Methods

Basic instantiation:

```javascript
const vecA = new Vec2(); // x: 0, y: 0
const vecB = new Vec2(1, 5);
```

Static instantiation methods:

```javascript
const vecA = Vec2.random();
const vecB = Vec2.fromAngle(Math.PI, 1);

const vecC = Vec2.up();
const vecD = Vec2.down();
const vecE = Vec2.left();
const vecF = Vec2.right();
```

### Operation Methods

```javascript
vecA.add(vecB);
vecA.subtract(vecB);
vecA.multiply(vecB);
vecA.divide(vecB);

// works with scalar values as well..
vecA.multiply(5);
```

### Other Methods

```javascript
vec.normalize();
vec.inverse();
vec.clone();

vec.setMagnitude(number);
vec.clampMagnitude(number, number);

vec.dot(Vec2);
vec.cross(Vec2);

vec.angleTo(Vec2);
vec.distanceTo(Vec2);
vec.equals(Vec2);
```

## Helpers

### lerp

Linear interpolation between two vectors.

```javascript
import Vec2, { lerp } from '@felixgro/vec2';

const vecA = new Vec2(1, 1);
const vecB = new Vec2(-1, -1);

const vecC = lerp(vecA, vecB, 0.5); // x: 0, y: 0
```

### randomBetween

Create a random vector between two vectors.

```javascript
import Vec2, { randomBetween } from '@felixgro/vec2';

const vecA = new Vec2(100, 100);
const vecB = new Vec2(200, 200);

const vecC = randomBetween(vecA, vecB); // 100 < x,y < 200
```

### draw & drawMany

Renders one or multiple vectors on 2d canvas.

```javascript
import Vec2, { draw, drawMany } from '@felixgro/vec2';

// get canvas drawing context
const ctx = someCanvas.getContext('2d');

// draw vector
draw(vecA, ctx);

// ..or draw many vectors at once
drawMany([vecA, vecB], ctx);
```

You may pass an additional options object as third parameter:

```javascript
const options = {
	origin: new Vec2(100, 100),
	color: '#000',
	width: 2,
	arrow: true,
};

draw(vec, ctx, options);
```
