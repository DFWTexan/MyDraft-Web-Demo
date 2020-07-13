import { IScoringRecieving } from "../../../league.service";

export class ScoringRecieving implements IScoringRecieving {
  recievingPointPerRec: number;
  recievingYardsPerPoint: number;
  recievingTD: number;
  recieving2ptConversion: number;
  recievingFumbleLost: number;
  bonus40YardRecTD: number;
  bonus50YardRecTD: number;
  bonus100Recieving: number;
  bonus200Recieving: number;

  constructor(recievingPointPerRec: number, recievingYardsPerPoint: number, recievingTD: number, recieving2ptConversion: number, recievingFumbleLost: number,
    bonus40YarTD: number, bonus50YardTD: number, bonus100Recieving: number, bonus200Recieving: number) {
    this.recievingPointPerRec = recievingPointPerRec;
    this.recievingYardsPerPoint = recievingYardsPerPoint;
    this.recievingTD = recievingTD;
    this.recieving2ptConversion = recieving2ptConversion;
    this.recievingFumbleLost = recievingFumbleLost;
    this.bonus40YardRecTD = bonus40YarTD;
    this.bonus50YardRecTD = bonus50YardTD;
    this.bonus100Recieving = bonus100Recieving;
    this.bonus200Recieving = bonus200Recieving;
  }
}
