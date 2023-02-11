import { Command } from './globalFunction/command';
import { clear, print, askQuestion } from './console';


 interface Point {
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
       const firstPoint :Point = { x : parseInt([...pointLocation][0]) , y : parseInt([...pointLocation][0])}
        const direction ='N'
        print(`The Start Location is ${firstPoint.x},${firstPoint.y} , ${direction} !`) ; 
        return  askQuestion(`Where do you want to go ? ` , insertDirection)
    } else {
    return backToStartPoint();
    }
}

function insertDirection(pointDirection : string){

    // if(pointDirection){
    //     const directionCommend = [...pointDirection];

    //     directionCommend.forEach((x) => {
    //         Command(x);

    //         print('actual Location');
    //         return ;
    //     })

    // }
}

export function backToStartPoint(): void {
    print('***************************************');
    print('You need to retuen to start point or redirect the location. 😭');
    askQuestion('Press ENTER to restart! ', restartApp);
}

restartApp();
