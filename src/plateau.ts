import { Direction } from "./Command";
import { Position } from "./grid";

export class RoverState {
    position: Position;
    direction: Direction;
    
    constructor(position: Position, direction: Direction) {
        this.position = position;
        this.direction = direction;
    }
}