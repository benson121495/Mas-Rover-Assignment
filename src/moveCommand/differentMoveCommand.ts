import { Direction } from "../globalValue/direction";
import { TurnCommand } from './turnCommand';
import { MoveCommandExecutor } from './moveCommand';

// turn right function
export class TurnRight extends TurnCommand {
    protected directions(): Map<Direction, Direction> {
        const directions = new Map<Direction, Direction>();

        directions.set(Direction.N, Direction.E);
        directions.set(Direction.S, Direction.W);
        directions.set(Direction.E, Direction.S);
        directions.set(Direction.W, Direction.N);

        return directions;
    }
}
// turn left function
export class TurnLeft extends TurnCommand {
    protected directions(): Map<Direction, Direction> {
        const directions = new Map<Direction, Direction>();

        directions.set(Direction.N, Direction.W);
        directions.set(Direction.S, Direction.E);
        directions.set(Direction.E, Direction.N);
        directions.set(Direction.W, Direction.S);

        return directions;
    }
}
// go back function
export class TurnBack extends MoveCommandExecutor {
    protected xSteps(): Map<Direction, number> {
        const steps = new Map<Direction, number>();

        steps.set(Direction.N, 0);
        steps.set(Direction.E, -1);
        steps.set(Direction.W, 1);
        steps.set(Direction.S, 0);

        return steps;
    }

    protected ySteps(): Map<Direction, number> {
        const steps = new Map<Direction, number>();

        steps.set(Direction.N, -1);
        steps.set(Direction.E, 0);
        steps.set(Direction.W, 0);
        steps.set(Direction.S, 1);

        return steps;
    }
}
// forward function
export class MoveForward extends MoveCommandExecutor {
    
    protected xSteps(): Map<Direction, number> {
        const steps = new Map<Direction, number>();

        steps.set(Direction.N, 0);
        steps.set(Direction.E, 1);
        steps.set(Direction.W, -1);
        steps.set(Direction.S, 0);

        return steps;
    }

    protected ySteps(): Map<Direction, number> {
        const steps = new Map<Direction, number>();

        steps.set(Direction.N, 1);
        steps.set(Direction.E, 0);
        steps.set(Direction.W, 0);
        steps.set(Direction.S, -1);

        return steps;
    }
}