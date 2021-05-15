const clamp = (val: number, min: number, max: number): number => {
   return Math.min(Math.max(val, min), max);
};

export const distanceBetween = (vecA: Vec2, vecB: Vec2): number => {
   return vecA.distanceTo(vecB);
}

export const angleBetween = (vecA: Vec2, vecB: Vec2): number => {
   return vecA.angleTo(vecB);
}

export default class Vec2 {
   public x: number;
   public y: number;

   constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
   }

   static up = (): Vec2 => new Vec2(0, -1);
   static down = (): Vec2 => new Vec2(0, 1);
   static left = (): Vec2 => new Vec2(-1, 0);
   static right = (): Vec2 => new Vec2(1, 0);

   static fromAngle(angle: number, length: number): Vec2 {
      return new Vec2();
   }

   static lerp(vecA: Vec2, vecB: Vec2, progress: number): Vec2 {
      if (progress > 1) progress = 1;
      if (progress < 0) progress = 0;

      const dirVec = vecB.clone().subtract(vecA);

      return vecA.clone().add(dirVec.multiply(progress));
   }

   get rawPosition(): [number, number] {
      return [this.x, this.y];
   }

   get length(): number {
      return Math.sqrt(this.x * this.x + this.y * this.y);
   }

   public add(vec: Vec2): Vec2 {
      this.x += vec.x;
      this.y += vec.y;

      return this;
   }

   public subtract(vec: Vec2): Vec2 {
      this.x -= vec.x;
      this.y -= vec.y;

      return this;
   }

   public multiply(n: number): Vec2 {
      this.x *= n;
      this.y *= n;

      return this;
   }

   public divide(n: number): Vec2 {
      if (n === 0) throw new Error('Cannot divide by 0');

      this.x /= n;
      this.y /= n;

      return this;
   }

   public normalize(): Vec2 {
      return this.divide(this.length);
   }

   public equals(vec: Vec2): boolean {
      return this.x === vec.x && this.y === vec.y;
   }

   public distanceTo(vec: Vec2): number {
      return vec.clone().subtract(this).length
   }

   public angleTo(vec: Vec2): number {
      let angle = Math.atan2(vec.x, vec.y) - Math.atan2(this.x, this.y);

      if (angle > Math.PI) angle -= Math.PI;
      if (angle < -Math.PI) angle += 2 * Math.PI;

      return angle;
   }

   public clone(): Vec2 {
      return new Vec2(this.x, this.y);
   }

   public drawOnCanvas(ctx: CanvasRenderingContext2D, options: {
      origin: Vec2;
      color: string;
      width: number;
   }): void {
      ctx.save();
      ctx.translate(...options.origin.rawPosition);

      ctx.strokeStyle = options.color;
      ctx.lineWidth = options.width;

      const arrowWidth = clamp(3 * options.width, 7, 50);
      const angle = Vec2.up().angleTo(this);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(...this.rawPosition);
      ctx.stroke();

      ctx.restore();
   }
}