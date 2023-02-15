import { Plateau } from './globalValue/plateau';
import { Mars } from "../src/mars";
import { Direction , Action } from "../src/globalValue/direction";
import { Grid , Position } from '../src/globalValue/grid';

describe('Mars Rover', () => {

    const startPosition = new Position(0, 0);
    const startDirection = Direction.N;

    test('Start Point', () => {
        const rover = new Mars(startPosition, startDirection);
        
        expect(rover.state.position).toBe(startPosition);
        expect(rover.state.direction).toBe(startDirection);
    });

    test('should direct to W when facing N and turning left',() =>  {
        const startDirection = Direction.N;
        const rover = new Mars(startPosition, startDirection);

        rover.executeCommands([Action.L])

        expect(rover.state.direction).toBe(Direction.W);
    });

    test('should direct to E when facing N and turning right',() =>  {
        const startDirection = Direction.N;
        const rover = new Mars(startPosition, startDirection);

        rover.executeCommands([Action.R])

        expect(rover.state.direction).toBe(Direction.E);
    });

    test('should direct to E when facing S and turning left',() =>  {
        const startDirection = Direction.S;
        const rover = new Mars(startPosition, startDirection);

        rover.executeCommands([Action.L])

        expect(rover.state.direction).toBe(Direction.E);
    });

    test('should return to the starting point when turn left 4 times', () => {
        const rover = new Mars(startPosition, startDirection);

        rover.executeCommands([
            Action.L,
            Action.L,
            Action.L,
            Action.L])

        expect(rover.state.direction).toBe(startDirection);
    });

    test('return to the starting point when turn right 4 times', () => {
        const rover = new Mars(startPosition, startDirection);

        rover.executeCommands([
            Action.R,
            Action.R,
            Action.R,
            Action.R])

        expect(rover.state.direction).toBe(startDirection);
    });

    test('return to the starting point when Turn Right 2 times then turn left 2 times', () => {
        const rover = new Mars(startPosition, startDirection);

        rover.executeCommands([
            Action.R,
            Action.R,
            Action.L,
            Action.L])

        expect(rover.state.direction).toBe(startDirection);
    });

    test('return to the starting point when turn left 2 times then turn right 2 times', () => {
        const rover = new Mars(startPosition, startDirection);

        rover.executeCommands([
            Action.L,
            Action.L,
            Action.R,
            Action.R])

        expect(rover.state.direction).toBe(startDirection);
    });

    test(' move forward along y when is facing N and receive forward Action', () => {
        const rover = new Mars(new Position(0, 0), Direction.N);

        rover.executeCommands([Action.F]);
        
        expect(rover.state.position).toEqual(new Position(0, 1));
    });

    test('Back to Start Point', () => {
        const grid = new Grid(3,3);
        const rover = new Mars(new Position(0, 0), Direction.N, grid);

        rover.executeCommands([
            Action.B,
            Action.L,
            Action.F,
            Action.R,
            Action.F,
            Action.L,
            Action.B
        ]);

        expect(rover.state.position).toEqual(new Position(0, 0));
        expect(rover.state.direction).toEqual(Direction.W);
    });

    test('should be avoid the obstacles', () => {
        const grid = new Grid(2, 2);
        const obstacles = [new Position(1, 1), new Position(2, 2)];
        const rover = new Mars(new Position(0, 0), Direction.N, grid, obstacles);

        rover.executeCommands([
            Action.R,
            Action.F,
            Action.L,
            Action.F,
            Action.L,
            Action.B,
            Action.R,
            Action.F,
            Action.F,
            Action.F,
            Action.L,
            Action.F
        ]);

        expect(rover.state.position).toEqual(new Position(2, 1));
    });

    test('Try another test with 5,5 Grid , start point on 4,4 ', () => {
        const grid = new Grid(5,5);
        const rover = new Mars(new Position(4, 4), Direction.N, grid);

        rover.executeCommands([
            Action.B,
            Action.L,
            Action.F,
            Action.R,
            Action.F,
            Action.L,
            Action.B,
            Action.B,
            Action.B,
            Action.L,

        ]);

        expect(rover.state.position).toEqual(new Position(0, 4));
        expect(rover.state.direction).toEqual(Direction.S);
    });
});