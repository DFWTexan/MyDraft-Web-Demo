import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ScoringIDP } from './scoringIDP.model';
import { LeagueService } from '../../../league.service';

@Component({
  selector: 'app-edit-idp',
  templateUrl: './edit-idp.component.html',
  styleUrls: ['./edit-idp.component.css']
})
export class EditIdpComponent implements OnInit {
  idpForm: FormGroup;
  idpScoring: ScoringIDP;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.idpScoring = this.leagueService.getScoringIDP();
    this.initForm();
  }

  initForm() {
    this.idpForm = new FormGroup({
      soloTackles: new FormControl(this.idpScoring.soloTackles),
      assistTackles: new FormControl(this.idpScoring.assistTackles),
      idpInterception: new FormControl(this.idpScoring.idpInterception),
      idpFumnbleRecovery: new FormControl(this.idpScoring.idpFumnbleRecovery),
      idpFunbleForce: new FormControl(this.idpScoring.idpFunbleForce),
      idpSack: new FormControl(this.idpScoring.idpSack),
      idpSafety: new FormControl(this.idpScoring.idpSafety)
    });
  }
}
