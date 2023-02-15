import { MainCommand } from './command';
import { Plateau } from "../globalValue/plateau";
import { Direction } from "../globalValue/direction";

// update the new direction
export abstract class TurnCommand implements MainCommand {
    execute(currentState: Plateau): Plateau {
        const newPosition = currentState.position;
        const newDirection = this.directions().get(currentState.direction) || 0;
        return new Plateau(newPosition, newDirection);
    }

    protected abstract directions(): Map<Direction, Direction>;
}