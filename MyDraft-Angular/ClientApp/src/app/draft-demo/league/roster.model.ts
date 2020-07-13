import { IRoster } from "./league.service";

export class Roster implements IRoster {
  position: string;
  starters: number;
  min: number;
  max: number;

  constructor(position: string, starters: number, min: number, max: number) {
    this.position = position;
    this.starters = starters;
    this.min = min;
    this.max = max;
  }
}
