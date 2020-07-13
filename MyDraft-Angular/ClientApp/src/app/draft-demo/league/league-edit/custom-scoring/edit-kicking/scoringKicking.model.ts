import { IScoringKicking } from "../../../league.service";

export class ScoringKicking implements IScoringKicking {
  fgMade: number;
  patMade: number;
  patMissed: number;
  fgMade40_49Yards: number;
  fgMade50Yards: number;
  fgMissed40_49Yards: number;
  fgMissed50Yards: number;
  fgMissedEach: number;
  fgMade0_39Yards: number;
  fgMissed0_39Yards: number;

  constructor(fgMade: number, patMade: number, patMissed: number, fgMade40_49Yards: number, fgMade50Yards: number, fgMissed40_49Yards: number,
    fgMissed50Yards: number, fgMissedEach: number, fgMade0_39Yards: number, fgMissed0_39Yards: number) {
    this.fgMade = fgMade;
    this.patMade = patMade;
    this.patMissed = patMissed;
    this.fgMade40_49Yards = fgMade40_49Yards;
    this.fgMade50Yards = fgMade50Yards;
    this.fgMissed40_49Yards = fgMissed40_49Yards;
    this.fgMissed50Yards = fgMissed50Yards;
    this.fgMissedEach = fgMissedEach;
    this.fgMade0_39Yards = fgMissed0_39Yards;
    this.fgMissed0_39Yards = fgMissed0_39Yards;
  }
}
