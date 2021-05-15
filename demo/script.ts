import Vec2, { drawMany } from '../lib/index';

// setup canvas
const canvas = document.querySelector<HTMLCanvasElement>('#canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// get rendering context
const ctx = canvas.getContext('2d');

// create vectors
const v1 = new Vec2(50, 100);
const v2 = Vec2.fromAngle(0.5 * Math.PI, 30);
const v3 = Vec2.left().multiply(100);

// optional draw options
const options = {
   origin: new Vec2(canvas.width / 2, canvas.height / 2),
   width: 2,
   color: '#ccc',
   arrow: true
};

// draw using rendering context..
drawMany(ctx, options, v1, v2, v3);

