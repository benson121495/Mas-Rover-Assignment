import { Direction } from "./direction";
import { Position } from "./grid";

export class Plateau {
    position: Position;
    direction: Direction;
    
    constructor(position: Position, direction: Direction) {
        this.position = position;
        this.direction = direction;
    }
}