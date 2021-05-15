import Vec2 from '../src/Vec2';

const canvas = document.querySelector<HTMLCanvasElement>('#canvas');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const ctx = canvas.getContext('2d');

const origin = new Vec2(window.innerWidth / 2, window.innerHeight / 2);

const v1 = new Vec2(250, -240);
const v2 = new Vec2(250, 240);

v1.drawOnCanvas(ctx, {
   origin,
   color: '#000',
   width: 3,
});

v2.drawOnCanvas(ctx, {
   origin,
   color: '#000',
   width: 3,
});

console.log(Vec2.up().angleTo(v1) * 180 / Math.PI)
console.log(Vec2.up().angleTo(v2) * 180 / Math.PI)

