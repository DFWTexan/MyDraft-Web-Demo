import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ScoringRushing } from './scoringRushing.model';
import { LeagueService } from '../../../league.service';

@Component({
  selector: 'app-edit-rushing',
  templateUrl: './edit-rushing.component.html',
  styleUrls: ['./edit-rushing.component.css']
})
export class EditRushingComponent implements OnInit {
  rushingForm: FormGroup;
  rushingScoring: ScoringRushing;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.rushingScoring = this.leagueService.getScoringRUSHING();
    this.initForm();
  }

  initForm() {
    this.rushingForm = new FormGroup({
      rushYards: new FormControl(this.rushingScoring.rushYardPerPoint),
      rushTD: new FormControl(this.rushingScoring.rushTD),
      rush2PtConversion: new FormControl(this.rushingScoring.rush2ptConversion),
      rushAttemptsPerPoint: new FormControl(this.rushingScoring.rushAttemptsPerPoint),
      rushFumblesLost: new FormControl(this.rushingScoring.rushFumbleLost),
      bonus40YardRushTD: new FormControl(this.rushingScoring.bonus40YardRushTD),
      bonus50YardRushTD: new FormControl(this.rushingScoring.bonus50YardRushTD),
      bonus100Rushing: new FormControl(this.rushingScoring.bonus100Rushing),
      bonus200Rushing: new FormControl(this.rushingScoring.bonus200Rushing)
    });
  }
}
