import { IScoringDefSpecial } from "../../../league.service";

export class ScoringDefSpecial implements IScoringDefSpecial {
  intRetrunTD: number;
  fumbleReturnTD: number;
  fumbleRecovery: number;
  fumbleForced: number;
  interception: number;
  defSack: number;
  defSafety: number;
  pointsAllowed_1_6: number;
  pointsAllowed_7_13: number;
  pointsAllowed_14_17: number;
  pointsAllowed_22_27: number;
  pointsAllowed_28_34: number;
  pointsAllowed_35_45: number;
  yardsAllowedUnder100: number;
  yardsAllowed_100_199: number;
  yardsAllowed_200_299: number;
  yardsAllowed_350_399: number;
  yardsAllowed_400_449: number;
  yardsAllowed_450_499: number;
  blockedPuntFGTD: number;
  blockedPuntFGPAT: number;

  constructor(intRetrunTD: number, fumbleReturnTD: number, fumbleRecovery: number, fumbleForced: number, interception: number, defSack: number, defSafety: number, pointsAllowed_1_6: number, pointsAllowed_7_13: number,
      pointsAllowed_14_17: number, pointsAllowed_22_27: number, pointsAllowed_28_34: number, pointsAllowed_35_45: number, yardsAllowedUnder100: number, yardsAllowed_100_199: number, yardsAllowed_200_299: number,
      yardsAllowed_350_399: number, yardsAllowed_400_449: number, yardsAllowed_450_499: number, blockedPuntFGTD: number, blockedPuntFGPAT: number) {
    this.intRetrunTD = intRetrunTD;
    this.fumbleReturnTD = fumbleReturnTD;
    this.fumbleRecovery = fumbleRecovery;
    this.fumbleForced = fumbleForced;
    this.interception = interception;
    this.defSack = defSack;
    this.defSafety = defSafety;
    this.pointsAllowed_1_6 = pointsAllowed_1_6;
    this.pointsAllowed_7_13 = pointsAllowed_7_13;
    this.pointsAllowed_14_17 = pointsAllowed_14_17;
    this.pointsAllowed_22_27 = pointsAllowed_22_27;
    this.pointsAllowed_28_34 = pointsAllowed_28_34;
    this.pointsAllowed_35_45 = pointsAllowed_35_45;
    this.yardsAllowedUnder100 = yardsAllowedUnder100;
    this.yardsAllowed_100_199 = yardsAllowed_100_199;
    this.yardsAllowed_200_299 = yardsAllowed_200_299;
    this.yardsAllowed_350_399 = yardsAllowed_350_399;
    this.yardsAllowed_400_449 = yardsAllowed_400_449;
    this.yardsAllowed_450_499 = yardsAllowed_450_499;
    this.blockedPuntFGTD = blockedPuntFGTD;
    this.blockedPuntFGPAT = blockedPuntFGPAT;
  }
}
