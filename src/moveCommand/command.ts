// export class Command {
//     private static map = {
//       N: {left: 'W', right: 'E', forward: {x: 0, y: 1}, backward: {x: 0, y: -1}},
//       W: {left: 'S', right: 'N', forward: {x: -1, y: 0}, backward: {x: 1, y: 0}},
//       S: {left: 'E', right: 'W', forward: {x: 0, y: -1}, backward: {x: 0, y: 1}},
//       E: {left: 'N', right: 'S', forward: {x: 1, y: 0}, backward: {x: -1, y: 0}}
//     }
//     public facing: string

//     constructor(facing: string) {
//       this.facing = facing
//     }

//     public left() {

//       return new Point( x, y ) ."E";
//     }

//     public right() {
//       return new Command(Command.map[this.facing].right)
//     }

//     public forward() {
//       return Command.map[this.facing].forward
//     }

//     public backward() {
//       return Command.map[this.facing].backward
//     }
//   }

import { Plateau } from "../plateau";

export interface MainCommand {
    execute(currentState: Plateau): Plateau;
}

// export function left(newDirection: any[]) {
//   if (newDirection[2] === 'N') {
//     newDirection[2] = 'W'
//     return [newDirection];
//   } else if (newDirection[2] === 'W') {
//     newDirection[2] = 'S'
//     return newDirection
//   } else if (newDirection[2] === 'S') {
//     newDirection[2] = 'E'
//     return newDirection
//   } else if (newDirection[2] === 'E') {
//     newDirection[2] = 'N'
//     return newDirection
//   }
// }
//   export function right(newDirection: any[]) {

//     if (newDirection[2] === 'N') {
//       newDirection[2] = 'E'
//       return newDirection
//     } else if (newDirection[2] === 'W') {
//       newDirection[2] = 'N'
//       return newDirection
//     } else if (newDirection[2] === 'S') {
//       newDirection[2] = 'W'
//       return newDirection
//     } else if (newDirection[2] === 'E') {
//       newDirection[2] = 'S'
//       return newDirection
//     }
//   }
//   export function forward(newDirection: any[]) {

//     if (newDirection[2] === 'N') {
//       newDirection[0] += 1;
//       return newDirection

//     } else if (newDirection[2] === 'W') {
//       newDirection[1] -= 1;

//       return newDirection
//     } else if (newDirection[2] === 'S') {
//       newDirection[0] -= 1;

//       return newDirection
//     } else if (newDirection[2] === 'E') {
//       newDirection[1] += 1;
//       return newDirection
//     }


//   } 