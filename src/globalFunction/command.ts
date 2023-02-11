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

export function left(newPosition: String) {
  if (newPosition === 'N') {
    newPosition = 'W'
    return (newPosition);
  } else if (newPosition === 'W') {
    newPosition = 'S'
    return (newPosition);
  } else if (newPosition === 'S') {
    newPosition = 'E'
    return (newPosition);
  } else if (newPosition === 'E') {
    newPosition = 'N'
    return (newPosition);
  }
}

export function right(newPosition: String) {

  if (newPosition === 'N') {
    newPosition = 'E'
    return (newPosition);
  } else if (newPosition === 'W') {
    newPosition = 'N'
    return (newPosition);
  } else if (newPosition === 'S') {
    newPosition = 'W'
    return (newPosition);
  } else if (newPosition === 'E') {
    newPosition = 'S'
    return (newPosition);
  }
}
export function forward(pointX: number, pointY: number, newPosition: String) {

  if (newPosition === 'N') {
    pointY += 1;
  } else if (newPosition === 'W') {
    pointX -= 1;

    return (newPosition);
  } else if (newPosition === 'S') {
    pointY -= 1;

    return (newPosition);
  } else if (newPosition === 'E') {
    pointX + 3= 1;
    return (newPosition);
  }


} 