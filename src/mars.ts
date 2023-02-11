import { clear, print, askQuestion } from './console';

export function restartApp(): void {
    clear(false);
    print('--------------------------');
    print('| Welcome to Mars! |');
    print('--------------------------');

    askQuestion(`Where do you want to go ?  `, startingPoint);
}

function startingPoint(pointLocation: string): void {

    if (pointLocation) {
        const point = [...pointLocation];
        const direction =  'N' ; 
        print(`The Start Location is ' , ${point} , ${direction} ,!`) ; 
        // return xxxx(point , direction) ;
    } else {
    return backToStartPoint();
    }

}

export function backToStartPoint(): void {
    print('***************************************');
    print('You need to retuen to start point or redirect the location. 😭');
    askQuestion('Press ENTER to restart! ', restartApp);
}

restartApp();
