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
      const x = Math.cos(angle) * length;
      const y = Math.sin(angle) * length;

      return new Vec2(x, y);
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

   public inverse(): Vec2 {
      return this.multiply(-1);
   }

   public setMagnitude(mag: number): Vec2 {
      return this.normalize().multiply(mag);
   }

   public clampMagnitude(min: number, max: number): Vec2 {
      if (this.length < min) this.setMagnitude(min);
      if (this.length > max) this.setMagnitude(max);

      return this;
   }

   public dot(vec: Vec2): number {
      return this.x * vec.x + this.y * vec.y;
   }

   public cross(vec: Vec2): number {
      return this.x * vec.y + this.y * vec.x;
   }

   public distanceTo(vec: Vec2): number {
      return vec.clone().subtract(this).length
   }

   public angleTo(vec: Vec2): number {
      let angle = Math.atan2(vec.y, vec.x) - Math.atan2(this.y, this.x);

      // [0, 2π]:
      // if (angle < 0) angle += 2 * Math.PI

      // [-π, π]:
      if (angle > Math.PI) {
         angle -= 2 * Math.PI
      } else if (angle <= -Math.PI) {
         angle += 2 * Math.PI
      }

      return angle;
   }

   public equals(vec: Vec2): boolean {
      return this.x === vec.x && this.y === vec.y;
   }

   public clone(): Vec2 {
      return new Vec2(this.x, this.y);
   }
}