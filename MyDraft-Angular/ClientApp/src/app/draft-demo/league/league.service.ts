import { Injectable, Output } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { League } from './league.model';
import { MessageService } from '../shared/message.service';
import { Roster } from './roster.model';
import { ScoringPassing } from './league-edit/custom-scoring/edit-passing/scoringPassing.model';
import { ScoringRushing } from './league-edit/custom-scoring/edit-rushing/scoringRushing.model';
import { ScoringRecieving } from './league-edit/custom-scoring/edit-recieving/scoringRecieving.model';
import { ScoringKicking } from './league-edit/custom-scoring/edit-kicking/scoringKicking.model';
import { ScoringDefSpecial } from './league-edit/custom-scoring/edit-defspecial/scoringDefSpecial.model';
import { ScoringMisc } from './league-edit/custom-scoring/edit-misc/scoringMisc.model';
import { ScoringIDP } from './league-edit/custom-scoring/edit-idp/scoringIDP.model';


@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private leagues: League[] = [
    new League(
      1,
      'MyLeague_1',
      'MFL_1',
      1,
      0,
      'SNAKE',
      12,
      16,
      1,
      false,
      false,
      null,
      10,
      false,
      0,
      true
    ),
    new League(
      2,
      'My_League_2',
      'MFL_2',
      1,
      0,
      'SNAKE',
      12,
      16,
      1,
      false,
      false,
      null,
      10,
      false,
      0,
      false
    ),
  ];

  // appData //
  private rosterStandard: IRoster[] = [
    new Roster(
      'Quarterback', 1, 0, 0
    ),
    new Roster(
      'Running Back', 2, 0, 0
    ),
    new Roster(
      'Wide Reciever', 2, 0, 0
    ),
    new Roster(
      'Tight End', 1, 0, 0
    ),
    new Roster(
      'Kicker', 1, 0, 0
    ),
    new Roster(
      'Team Defense', 1, 0, 0
    )
  ]
  private rosterFlex: IRoster[] = [
    new Roster(
      'RB/WR', 0, 0, 0
    ),
    new Roster(
      'RB/WR/TE', 0, 0, 0
    ),
    new Roster(
      'QB/RB/WR/TE', 0, 0, 0
    ),
    new Roster(
      'WR/TE', 0, 0, 0
    )
  ]
  private rosterIDP: IRoster[] = [
    new Roster(
      'Individual Defensive Player (Any IDP)', 1, 0, 0
    ),
    new Roster(
      'Defensive Back', 0, 0, 0
    ),
    new Roster(
      'Defensive End', 0, 0, 0
    ),
    new Roster(
      'Line Backer', 0, 0, 0
    )
  ]
  // SCORING //
  private pasingScoring: IScoringPass = new ScoringPassing(50, 4, 2, -2, 0, -2, 0, 0, 0, 0, 0, 0, 0);
  private rushingScoring: IScoringRush = new ScoringRushing(10, 6, 0, 2, -2, 0, 0, 0, 0);
  private recievingScoring: IScoringRecieving = new ScoringRecieving(0, 10, 6, 2, -2, 0, 0, 0, 0);
  private kickingScoring: IScoringKicking = new ScoringKicking(3, 1, 0, 0, 0, 0, 0, 0, 0, 0);
  private defSpeciealScoring: IScoringDefSpecial = new ScoringDefSpecial(6, 6, 2, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1);
  private miscScoring: IScoringMisc = new ScoringMisc(0, 0, 0, 0);
  private idpcScoring: IScoringIDP = new ScoringIDP(0, 0, 2, 2, 0, 1, 2);
  //------------------------------------------------------//

  activeLeague: League;

  private leaguesChanged = new Subject<any>();
  
  constructor(private messageService: MessageService) { }

  //get-ROSTER
  getRosterStandard() {
    return this.rosterStandard;
  }
  getRosterFlex() {
    return this.rosterFlex;
  }
  getRosterIDP() {
    return this.rosterIDP;
  }

  getScoringPASSING() {
    return this.pasingScoring;
  }
  getScoringRUSHING() {
    return this.rushingScoring;
  }
  getScoringRECIEVING() {
    return this.recievingScoring;
  }
  getScoringKICKING() {
    return this.kickingScoring;
  }
  getScoringDEFSPECIAL() {
    return this.defSpeciealScoring;
  }
  getScoringMISC() {
    return this.miscScoring;
  }
  getScoringIDP() {
    return this.idpcScoring;
  }

  getUserLeagues(): Observable<any> {
    return this.leaguesChanged.asObservable();
  }

  fetchLeagues() {
    this.log('Fetching Leagues');
    this.activeLeague = this.leagues.find(league => league.leagueActive === true);
    this.leaguesChanged.next();
    return this.leagues.slice();
  }

  getLeagueByID(id: number) {
    return this.leagues.find(x => x.id === id);
  }

  updateLeague(id: number) {

  }

  addLeague() {

  }

  /** Log a LeagueService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LeagueService: ${message}`);
  }
}

export interface ILeague {
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
}

export interface IRoster {
  position: string;
  starters: number;
  min: number;
  max: number;
}

export interface IScoringPass {
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
}

export interface IScoringRush {
  rushYardPerPoint: number;
  rushTD: number;
  rushAttemptsPerPoint: number;
  rush2ptConversion: number;
  rushFumbleLost: number;
  bonus40YardRushTD: number;
  bonus50YardRushTD: number;
  bonus100Rushing: number;
  bonus200Rushing: number;
}

export interface IScoringRecieving {
  recievingPointPerRec: number;
  recievingYardsPerPoint: number;
  recievingTD: number;
  recieving2ptConversion: number;
  recievingFumbleLost: number;
  bonus40YardRecTD: number;
  bonus50YardRecTD: number;
  bonus100Recieving: number;
  bonus200Recieving: number;
}

export interface IScoringKicking {
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
}

export interface IScoringDefSpecial {
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
}

export interface IScoringMisc {
  kickoffReturnTD: number;
  puntReturnTD: number;
  kickReturnYardsPerPoint: number;
  puntReturnYardsPerPoint: number;
}

export interface IScoringIDP {
  soloTackles: number;
  assistTackles: number;
  idpInterception: number;
  idpFumnbleRecovery: number;
  idpFunbleForce: number;
  idpSack: number;
  idpSafety: number;
}

export interface IFanTeams {

}
