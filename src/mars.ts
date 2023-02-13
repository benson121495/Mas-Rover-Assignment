
import { Plateau } from "./plateau";
import { Direction, Action } from "./direction";
import { Grid, Position } from './grid';
import { TurnLeft, TurnRight , TurnBack, MoveForwardCommandExecutor} from "./moveCommand/differentMoveCommand";
import { MainCommand } from "./moveCommand/command";


export class Mars {
    state: Plateau;
    private grid: Grid;
    private obstacles: Position[];

    constructor(startPosition: Position, startDirection: Direction, grid: Grid = new Grid(Number.MAX_VALUE, Number.MAX_VALUE), obstacles: Position[] = []) {
        this.state = new Plateau(startPosition, startDirection);
        this.grid = grid;
        this.obstacles = obstacles;
    }

    executeCommands(commands: Action[]) {
        commands.forEach(command => {
            const directionPoint = this.directionPoint(command)
            this.state = directionPoint.execute(this.state);
        });
    }

    directionPoint(command: Action): MainCommand {


        if (command === Action.L) {
            return new TurnLeft();
        } else if (command === Action.R) {
            return new TurnRight();
        } else if (command === Action.F) {
            return new TurnBack(this.grid, this.obstacles);
        } else if (command === Action.B) {
            return new MoveForwardCommandExecutor(this.grid, this.obstacles);
        }else {
            throw "Unknown command!"
        }

    }

}