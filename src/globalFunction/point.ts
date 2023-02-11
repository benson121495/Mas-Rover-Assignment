export class Point {
    public x: number
    public y: number
    public direction : any
  
    constructor(x: number, y: number , direction : any) {
      this.x = x
      this.y = y
      this.direction = direction ;
    }
  
    public sum(other: Point) {
      return new Point(this.x + other.x, this.y + other.y , this.direction)
    }
  }