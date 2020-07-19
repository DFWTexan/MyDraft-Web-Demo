import { ILeague } from "./league.service";

export class League implements ILeague {
  leagueId: number;
  name: string;
  abbr: string;
  mode: number;
  draftType: number;
  draftOrder: string;
  numberTeams: number;
  numberRounds: number;
  myTeamId: number;
  activeFlag: boolean;

  constructor(leagueId: number, name: string, abbr: string, mode: number, draftType: number, draftOrder: string, numberTeams: number, numberRounds: number, myTeamId: number, activeFlag: boolean) {

    this.leagueId = leagueId;
    this.name = name;
    this.abbr = abbr;
    this.mode = mode;
    this.draftType = draftType;
    this.draftOrder = draftOrder;
    this.numberTeams = numberTeams;
    this.numberRounds = numberRounds;
    this.myTeamId = myTeamId;
    this.activeFlag = activeFlag;

  }

}
