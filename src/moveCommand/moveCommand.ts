
import { MainCommand } from "./command";
import { Plateau } from "../globalValue/plateau";
import { Direction, Action } from "../globalValue/direction";
import { Grid, Position } from '../globalValue/grid';

// compare the old position and the new position 
export abstract class MoveCommandExecutor implements MainCommand {
    private grid: Grid;
    private obstacles: Position[];

    constructor(grid: Grid = new Grid(Number.MAX_VALUE, Number.MAX_VALUE), obstacles: Position[] = []) {
        this.grid = grid;
        this.obstacles = obstacles;
    }

    protected abstract xSteps(): Map<Direction, number>;
    protected abstract ySteps(): Map<Direction, number>;

    execute(currentState: Plateau): Plateau {
        const newPosition = this.newPosition(currentState);
        const newDirection = currentState.direction;
        return new Plateau(newPosition, newDirection);
    }

    private newPosition(currentState: Plateau): Position {
        const newX = this.newX(currentState);
        const newY = this.newY(currentState);
        const newPosition = new Position(newX, newY);
        return this.isAnObstacle(newPosition)
            ? currentState.position
            : newPosition;
    }

    private isAnObstacle(position: Position): Boolean {
        const isObstacle =
            (obstacle :Position) => obstacle.x === position.x && obstacle.y === position.y;
        return this.obstacles.some(isObstacle);
    }

    private newY(state: Plateau): number {
        return this.newCoordinate(
            state.position.y,
            state.direction,
            this.ySteps(),
            this.grid.y
        );
    }

    private newX(state: Plateau): number {
        return this.newCoordinate(
            state.position.x,
            state.direction,
            this.xSteps(),
            this.grid.x
        );
    }

    private newCoordinate(currentCoordinate: number, direction: Direction, steps: Map<Direction, number>, limit: number): number {
        const step = Number(steps.get(direction));
        const newCoordinate = currentCoordinate + step;
        return threshold(newCoordinate, limit);
    }
}

function threshold(coordinate: number, limit: number): number {
    if (coordinate < 0) {
        return limit;
    } else if (coordinate > limit) {
        return 0;
    } else {
        return coordinate;
    }
}