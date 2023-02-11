import { left, right, forward } from './globalFunction/command';
import { clear, print, askQuestion } from './console';


type Point = {
    x: number
    y: number

}
export function restartApp(): void {
    clear(false);
    print('--------------------------');
    print('| Welcome to Mars! |');
    print('--------------------------');

    askQuestion(`Where do you want to start ?  `, startPoint);
}

function startPoint(pointLocation: string): void {

    if (pointLocation) {
        const firstPoint: Point = { x: parseInt([...pointLocation][0]), y: parseInt([...pointLocation][0]) }
        const direction = 'N';
        print(`The Start Location is ${firstPoint.x},${firstPoint.y} , ${direction} !`);
        const directionPoint = askQuestion(`Where do you want to go ? `, inputDirection);

        newDirection(directionPoint, firstPoint, direction);
    } else {
        return backToStartPoint();
    }
}

function inputDirection(pointDirection: string) {

    if (pointDirection) {
        const directionCommend = [...pointDirection];
        return directionCommend;
    }
}

function newDirection(xxxx: any[], newPoint: Point, direction: String) {
    const newDirection: String = "";

    xxxx.forEach((x) => {
        if (x === 'L') {
            left(direction)
            
        } else if (x === 'R') {
            right(direction)
        } else if (x === 'M') {
            forward(newPoint.x, newPoint.y ,direction)
        }
    });

}

export function backToStartPoint(): void {
    print('***************************************');
    print('You need to retuen to start point or redirect the location. 😭');
    askQuestion('Press ENTER to restart! ', restartApp);
}

restartApp();
