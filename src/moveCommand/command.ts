import { Plateau } from "../globalValue/plateau";

export interface MainCommand {
    execute(currentState: Plateau): Plateau;
}