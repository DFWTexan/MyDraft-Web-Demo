import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydraftService {
  objTeams: { [key: string]: string } = {
    ALL: 'NFL Teams',
    SF: '49ers',
    CHI: 'Bears',
    CIN: 'Bengals',
    BUF: 'Bills',
    DEN: 'Broncos',
    CLE: 'Browns',
    TB: 'Buccaneers',
    ARI: 'Cardinals',
    SD: 'Chargers',
    KC: 'Chiefs',
    IND: 'Colts',
    DAL: 'Cowboys',
    MIA: 'Dolphins',
    PHI: 'Eagles',
    ATL: 'Falcons',
    NYG: 'Giants',
    JAX: 'Jaguars',
    NYJ: 'Jets',
    DET: 'Lions',
    GB: 'Packers',
    CAR: 'Panthers',
    NE: 'Patriots',
    OAK: 'Raiders',
    LA: 'Rams',
    BAL: 'Ravens',
    WAS: 'Redskins',
    NO: 'Saints',
    SEA: 'Seahawks',
    PIT: 'Steelers',
    HOU: 'Texans',
    TEN: 'Titans',
    MIN: 'Vikings'
  };

  objDraftOrder: { [key: string]: string } = {
    SNAKE: 'Snake',
    STRAIGHT: 'Straight(NFL Style',
    REVERSAL: 'Third Round Reversal',
    FLIP: 'Third Round Flip'
  };

  constructor() { }

  getNFLTeams() {
    return this.objTeams;
  }

  getDraftOrder() {
    return this.objDraftOrder;
  }
    
}
