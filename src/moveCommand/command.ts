import { Plateau } from "../plateau";

export interface MainCommand {
    execute(currentState: Plateau): Plateau;
}