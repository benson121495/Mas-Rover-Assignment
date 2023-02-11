export class Command {
    private static map = {
      N: {left: 'W', right: 'E', forward: {x: 0, y: 1}, backward: {x: 0, y: -1}},
      W: {left: 'S', right: 'N', forward: {x: -1, y: 0}, backward: {x: 1, y: 0}},
      S: {left: 'E', right: 'W', forward: {x: 0, y: -1}, backward: {x: 0, y: 1}},
      E: {left: 'N', right: 'S', forward: {x: 1, y: 0}, backward: {x: -1, y: 0}}
    }
    public facing: string
  
    constructor(facing: string) {
      this.facing = facing
    }
  
    public left() {
      return new Command(Command.map[this.facing].left)
    }
  
    public right() {
      return new Command(Command.map[this.facing].right)
    }
  
    public forward() {
      return Command.map[this.facing].forward
    }
  
    public backward() {
      return Command.map[this.facing].backward
    }
  }