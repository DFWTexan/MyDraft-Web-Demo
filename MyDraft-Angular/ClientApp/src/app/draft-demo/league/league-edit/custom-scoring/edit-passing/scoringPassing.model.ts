import { IScoringPass } from "../../../league.service";

export class ScoringPassing implements IScoringPass {
  passYardPerPoint: number;
  tdPass: number;
  pass2ptConversion: number;
  interceptionsThrown: number;
  sacked: number;
  fumbleLost: number;
  attemptsPerPoint: number;
  completetionsPerPoint: number;
  incompletetionsPerPoint: number;
  bouns40YardTd: number;
  bonus50YardTd: number;
  bonus300Passing: number;
  bonus400Passing: number;

  constructor(passYardPerPoint: number, tdPass: number, pass2ptConversion: number, interceptionsThrown: number, sacked: number, fumbleLost: number, attemptsPerPoint: number, completetionsPerPoint: number,
              incompletetionsPerPoint: number, bouns40YardTd: number, bonus50YardTd: number, bonus300Passing: number, bonus400Passing: number) {
    this.passYardPerPoint = passYardPerPoint;
    this.tdPass = tdPass;
    this.pass2ptConversion = pass2ptConversion;
    this.interceptionsThrown = interceptionsThrown;
    this.sacked = sacked;
    this.fumbleLost = fumbleLost;
    this.attemptsPerPoint = attemptsPerPoint;
    this.completetionsPerPoint = completetionsPerPoint;
    this.incompletetionsPerPoint = incompletetionsPerPoint;
    this.bouns40YardTd = bouns40YardTd;
    this.bonus50YardTd = bonus50YardTd;
    this.bonus300Passing = bonus300Passing;
    this.bonus400Passing = bonus400Passing;
  }
}
