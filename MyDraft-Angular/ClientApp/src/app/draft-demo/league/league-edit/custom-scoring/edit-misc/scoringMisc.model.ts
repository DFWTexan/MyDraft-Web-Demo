import { IScoringMisc } from "../../../league.service";

export class ScoringMisc implements IScoringMisc {
  kickoffReturnTD: number;
  puntReturnTD: number;
  kickReturnYardsPerPoint: number;
  puntReturnYardsPerPoint: number;

  constructor(kickoffReturnTD: number, puntReturnTD: number, kickReturnYardsPerPoint: number, puntReturnYardsPerPoint: number) {
    this.kickoffReturnTD = kickoffReturnTD;
    this.puntReturnTD = puntReturnTD;
    this.kickReturnYardsPerPoint = kickReturnYardsPerPoint;
    this.puntReturnYardsPerPoint = puntReturnYardsPerPoint;
  }
}
