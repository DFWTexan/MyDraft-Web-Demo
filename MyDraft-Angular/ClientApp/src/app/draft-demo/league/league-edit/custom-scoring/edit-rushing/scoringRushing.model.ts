import { IScoringRush } from "../../../league.service";

export class ScoringRushing implements IScoringRush {
  rushYardPerPoint: number;
  rushTD: number;
  rushAttemptsPerPoint: number;
  rush2ptConversion: number;
  rushFumbleLost: number;
  bonus40YardRushTD: number;
  bonus50YardRushTD: number;
  bonus100Rushing: number;
  bonus200Rushing: number;

  constructor(rushYardPerPoint: number, rushTD: number, rushAttemptsPerPoint: number, rush2ptConversion: number, rushFumbleLost: number,
    bonus40YarTD: number, bonus50YardTD: number, bonus100Rushing: number, bonus200Rushing: number) {
    this.rushYardPerPoint = rushYardPerPoint;
    this.rushTD = rushTD;
    this.rushAttemptsPerPoint = rushAttemptsPerPoint;
    this.rush2ptConversion = rush2ptConversion;
    this.rushFumbleLost = rushFumbleLost;
    this.bonus40YardRushTD = bonus40YarTD;
    this.bonus50YardRushTD = bonus50YardTD;
    this.bonus100Rushing = bonus100Rushing;
    this.bonus200Rushing = bonus200Rushing;
  }
}
