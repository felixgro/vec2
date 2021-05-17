import Vec2, { drawMany } from '../src/index';

// setup canvas
const canvas = document.querySelector<HTMLCanvasElement>('#canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

// get rendering context..
const ctx = canvas.getContext('2d');

const origin = new Vec2(window.innerWidth / 2, window.innerHeight / 2);

// create vectors..
const v1 = Vec2.up().setMagnitude(100);
const v2 = Vec2.right().setMagnitude(100);
const v3 = Vec2.down().setMagnitude(100);
const v4 = Vec2.left().setMagnitude(100);

// optional draw options..
const options = {
   origin,
   width: 2,
   color: '#aaa',
   arrow: true
};

// draw..
drawMany([v1, v2, v3, v4], ctx, options);

