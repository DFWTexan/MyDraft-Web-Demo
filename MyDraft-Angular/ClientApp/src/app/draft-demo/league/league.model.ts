import { ILeague } from "./league.service";

export class League implements ILeague {
  id: number;
  name: string;
  abbr: string;
  mode: number;
  draftType: number;
  draftOrder: string;
  numTeams: number;
  numRounds: number;
  userTeamID: number;
  combineWRTE: boolean;
  includeIDP: boolean;
  scoringTypeID: number;
  auctionBudget: number;
  mockDraft: boolean;
  positionLimitEnabled: number;
  leagueActive: boolean;

  constructor(id: number, name: string, abbr: string, mode: number, draftType: number, draftOrder: string, numTeams: number, numRounds: number, userTeamID: number, combineWRTE: boolean,
    includeIDP: boolean, scoringTypeID: number, auctionBudget: number, mockDraft: boolean, positionLimitEnabled: number, leagueActive: boolean) {

    this.id = id;
    this.name = name;
    this.abbr = abbr;
    this.mode = mode;
    this.draftType = draftType;
    this.draftOrder = draftOrder;
    this.numTeams = numTeams;
    this.numRounds = numRounds;
    this.userTeamID = userTeamID;
    this.combineWRTE = combineWRTE;
    this.includeIDP = includeIDP;
    this.scoringTypeID = scoringTypeID;
    this.auctionBudget = auctionBudget;
    this.mockDraft = mockDraft;
    this.positionLimitEnabled = positionLimitEnabled;
    this.leagueActive = leagueActive;

  }

}
