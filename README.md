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
| pos		    | [number, number] | Coordinates as array [x, y] to enable usage of spread operator. |
| length        | number           | absolute length of vector                                       |
| lengthSquared | number           | squared length of vector                                        |

### Instantiation Methods

Basic instantiation:

```ts
const vecA = new Vec2();     // x: 0, y: 0
const vecB = new Vec2(1, 5); // x: 1, y: 5
```

Static instantiation methods:

```ts
Vec2.random();
Vec2.fromAngle(radians: number, length: number);

Vec2.up(); 	   	// x: 0, y: -1
Vec2.down();  	// x: 0, y: 1
Vec2.right();   // x: 1, y: 0
Vec2.left();  	// x: -1, y: 0 
```

### Operation Methods

```ts
vec.add(vec: Vec2 | number): Vec2;
vec.subtract(vec: Vec2 | number): Vec2;
vec.multiply(vec: Vec2 | number): Vec2;
vec.divide(vec: Vec2 | number): Vec2;
```

### Other Methods

```ts
vec.normalize(): Vec2;
vec.inverse(): Vec2;
vec.clone(): Vec2;

vec.rotate(radians: number, clockwise?: boolean): Vec2;
vec.setMagnitude(magnitude: number): Vec2;
vec.clampMagnitude(min: number, max: number): Vec2;

vec.dot(vec: Vec2): number;
vec.cross(vec: Vec2): number;

vec.angleTo(vec: Vec2): number;
vec.distanceTo(vec: Vec2): number;
vec.equals(vec: Vec2): boolean;
```

## Helpers

### renderOnCanvas

Renders one or multiple vectors on 2d canvas using it's rendering context.

```ts
import Vec2, { renderOnCanvas } from '@felixgro/vec2';

// get canvas drawing context
const ctx = someCanvas.getContext('2d');

// draw vector
renderOnCanvas(vecA, ctx);

// ..or draw many vectors at once
renderOnCanvas([vecA, vecB, vecC], ctx);
```

You may pass an additional options object as third parameter:

```ts
// default options:
const options = {
	origin: new Vec2(),
	color: '#000',
	width: 3,
	arrow: true,
};

renderOnCanvas(vec: Vec2 | Vec2[], ctx: CanvasRenderingContext2D, options: DrawOptions);
```


### lerp

Linear interpolation between two vectors.

```ts
import Vec2, { lerp } from '@felixgro/vec2';

const vecA = new Vec2(1, 1);
const vecB = new Vec2(-1, -1);

const vecC = lerp(vecA, vecB, 0.5); // x: 0, y: 0
```

### randomBetween

Create a random vector between two vectors.

```ts
import Vec2, { randomBetween } from '@felixgro/vec2';

const vecA = new Vec2(100, 100);
const vecB = new Vec2(200, 200);

const vecC = randomBetween(vecA, vecB); // 100 < x,y < 200
```