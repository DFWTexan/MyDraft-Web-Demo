import { IScoringIDP } from "../../../league.service";

export class ScoringIDP implements IScoringIDP {
  soloTackles: number;
  assistTackles: number;
  idpInterception: number;
  idpFumnbleRecovery: number;
  idpFunbleForce: number;
  idpSack: number;
  idpSafety: number;

  constructor(soloTackles: number, assistTackles: number, idpInterception: number, idpFumnbleRecovery: number, idpFunbleForce: number, idpSack: number, idpSafety: number) {
    this.soloTackles = soloTackles;
    this.assistTackles = assistTackles;
    this.idpInterception = idpInterception;
    this.idpFumnbleRecovery = idpFumnbleRecovery;
    this.idpFunbleForce = idpFunbleForce;
    this.idpSack = idpSack;
    this.idpSafety = idpSafety;
  }
}
