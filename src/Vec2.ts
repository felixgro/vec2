export default class Vec2 {
   public x: number;
   public y: number;

   /**
    * Initialize a new vector.
    * 
    * @param x
    * @param y
    */
   constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
   }

   /**
    * Create normalized up vector using the
    * web's coordinate system (-y up).
    * 
    * @returns new vector
    */
   static up = (): Vec2 => new Vec2(0, -1);

   /**
    * Create normalized down vector using the
    * web's coordinate system (+y down).
    * 
    * @returns new vector
    */
   static down = (): Vec2 => new Vec2(0, 1);

   /**
    * Create normalized vector pointing left.
    * 
    * @returns new vector
    */
   static left = (): Vec2 => new Vec2(-1, 0);

   /**
    * Create normalized vector pointing right.
    * 
    * @returns new vector
    */
   static right = (): Vec2 => new Vec2(1, 0);

   /**
    * Create a normalized vector with a random direction.
    * 
    * @param angle
    * @param length
    * @returns new vector
    */
   static random(): Vec2 {
      const x = Math.random() * (Math.round(Math.random()) ? -1 : 1);
      const y = Math.random() * (Math.round(Math.random()) ? -1 : 1);

      return new Vec2(x, y).normalize();
   }

   /**
    * Create a vector using an angle in radians and a length.
    * Angle of 0 results in an right-pointing vector.
    * 
    * @param angle
    * @param length
    * @returns new vector
    */
   static fromAngle(angle: number, length: number): Vec2 {
      const x = Math.cos(angle) * length;
      const y = Math.sin(angle) * length;

      return new Vec2(x, y);
   }

   /**
    * Get coordinates as [x, y] array.
    */
   get rawPosition(): [number, number] {
      return [this.x, this.y];
   }

   /**
    * Get squared length of vector.
    */
   get lengthSquared(): number {
      return this.x * this.x + this.y * this.y;
   }

   /**
    * Get absolute length of vector.
    */
   get length(): number {
      let length = Math.sqrt(this.lengthSquared);

      // floating point number precision..
      if (length < 1.001 && length > 0.999) length = 1;

      return length;
   }

   /**
    * Performs vector or scalar addition.
    * 
    * @param vec 
    * @returns this
    */
   public add(summand: Vec2 | number): Vec2 {
      this.x += typeof summand === 'number' ? summand : summand.x;
      this.y += typeof summand === 'number' ? summand : summand.y;

      return this;
   }

   /**
    * Performs vector or scalar subtraction.
    * 
    * @param vec 
    * @returns this
    */
   public subtract(subtrahend: Vec2 | number): Vec2 {
      this.x -= typeof subtrahend === 'number' ? subtrahend : subtrahend.x;
      this.y -= typeof subtrahend === 'number' ? subtrahend : subtrahend.y;

      return this;
   }

   /**
    * Performs vector or skalar multiplication.
    * 
    * @param n 
    * @returns this
    */
   public multiply(factor: Vec2 | number): Vec2 {
      this.x *= typeof factor === 'number' ? factor : factor.x;
      this.y *= typeof factor === 'number' ? factor : factor.y;

      return this;
   }

   /**
    * Performs vector or skalar division.
    * 
    * @param n
    * @returns this
    */
   public divide(divisor: Vec2 | number): Vec2 {
      if (!divisor) throw new Error('Cannot divide by 0');

      this.x /= typeof divisor === 'number' ? divisor : divisor.x;
      this.y /= typeof divisor === 'number' ? divisor : divisor.y;

      return this;
   }

   /**
    * Set vector's length to 0 while keeping it's direction.
    * 
    * @param n
    * @returns this
    */
   public normalize(): Vec2 {
      return this.divide(this.length);
   }

   /**
    * Inverse x and y coordinates.
    * 
    * @returns this
    */
   public inverse(): Vec2 {
      return this.multiply(-1);
   }

   /**
    * Set explicit length for vector.
    * 
    * @param mag 
    * @returns this
    */
   public setMagnitude(mag: number): Vec2 {
      return this.normalize().multiply(mag);
   }

   /**
    * Clamp length of vector between specified min and max.
    * 
    * @param min 
    * @param max 
    * @returns this
    */
   public clampMagnitude(min: number, max: number): Vec2 {
      if (this.length < min) this.setMagnitude(min);
      if (this.length > max) this.setMagnitude(max);

      return this;
   }

   /**
    * Calculate dot product.
    * 
    * @param vec 
    * @returns dot product of two vectors
    */
   public dot(vec: Vec2): number {
      return this.x * vec.x + this.y * vec.y;
   }

   /**
    * Calculate cross product.
    * 
    * @param vec 
    * @returns cross product of two vectors
    */
   public cross(vec: Vec2): number {
      return this.x * vec.y + this.y * vec.x;
   }

   /**
    * Get distance to another vector.
    * 
    * @param vec 
    * @returns distance to vector
    */
   public distanceTo(vec: Vec2): number {
      return vec.clone().subtract(this).length
   }

   /**
    * Get angle to another vector in range [-π, π].
    * 
    * @param vec 
    * @returns angle between two vectors in radians
    */
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

   /**
    * Check vector coordinates for equality.
    * 
    * @param vec 
    * @returns true if coordinates match
    */
   public equals(vec: Vec2): boolean {
      return this.x === vec.x && this.y === vec.y;
   }

   /**
    * Clones vector to a new instance.
    * 
    * @returns new vector with same coordinates
    */
   public clone(): Vec2 {
      return new Vec2(this.x, this.y);
   }
}