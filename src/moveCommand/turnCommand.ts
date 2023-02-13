import { MainCommand } from './command';
import { Plateau } from "../plateau";
import { Direction } from "../direction";

export abstract class TurnCommand implements MainCommand {
    execute(currentState: Plateau): Plateau {
        const newPosition = currentState.position;
        const newDirection = currentState.direction;
        return new Plateau(newPosition, newDirection);
    }

    protected abstract directions(): Map<Direction, Direction>;
}