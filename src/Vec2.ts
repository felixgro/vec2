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
    * Create a vector using an angle in radians as well as an optional length.
    * Angle of 0 results in an right-pointing vector.
    * 
    * @param angle - in radians
    * @param length
    * @returns new vector
    */
   static fromAngle(angle: number, length = 1): Vec2 {
      const x = Math.cos(angle) * length;
      const y = Math.sin(angle) * length;

      return new Vec2(x, y);
   }

   /**
    * Get coordinates as [x, y] tuple.
    */
   get pos(): [number, number] {
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
      return Math.sqrt(this.lengthSquared);
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
      this.x /= typeof divisor === 'number' ? divisor : divisor.x;
      this.y /= typeof divisor === 'number' ? divisor : divisor.y;

      return this;
   }

   /**
    * Set vector's length to 1 while keeping it's direction.
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
    * Rotate vector around origin.
    * 
    * @param angle in radians
    * @param origin Vec2(0, 0)
    * @param clockwise true
    */
   public rotate(angle: number, clockwise = true, origin = new Vec2()): Vec2 {
      const length = this.length;
      const diff = this.clone().subtract(origin);
      if (!clockwise) angle *= -1;

      this.x = Math.cos(angle) * diff.x - Math.sin(angle) * diff.y;
      this.y = Math.sin(angle) * diff.x + Math.cos(angle) * diff.y;

      this.add(origin);
      this.setMagnitude(length);

      return this;
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
    * Get angle to another vector in range [-??, ??].
    * fullRange shifts the range to [0, 2??].
    * 
    * @param vec 
    * @returns angle in radians
    */
   public angleTo(vec: Vec2, fullRange = false): number {
      let angle = Math.atan2(vec.y, vec.x) - Math.atan2(this.y, this.x);

      if (fullRange) {
         // [0, 2??]
         if (angle < 0) angle += 2 * Math.PI;
      } else {
         // [-??, ??]
         if (angle > Math.PI) {
            angle -= 2 * Math.PI
         } else if (angle <= -Math.PI) {
            angle += 2 * Math.PI
         }
      }

      return angle;
   }
}