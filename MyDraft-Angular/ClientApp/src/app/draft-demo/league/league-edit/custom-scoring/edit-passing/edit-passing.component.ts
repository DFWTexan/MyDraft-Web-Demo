import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LeagueService } from '../../../league.service';
import { ScoringPassing } from './scoringPassing.model';

@Component({
  selector: 'app-edit-passing',
  templateUrl: './edit-passing.component.html',
  styleUrls: ['./edit-passing.component.css']
})
export class EditPassingComponent implements OnInit {
  passingForm: FormGroup;
  pasingScoring: ScoringPassing;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.pasingScoring = this.leagueService.getScoringPASSING()
    this.initForm();
  }

  initForm() {
    this.passingForm = new FormGroup({
      passYards: new FormControl(this.pasingScoring.passYardPerPoint),
      tdPass: new FormControl(this.pasingScoring.tdPass),
      ptConversion: new FormControl(this.pasingScoring.pass2ptConversion),
      passInterceptions: new FormControl(this.pasingScoring.interceptionsThrown),
      sacked: new FormControl(this.pasingScoring.sacked),
      passFumblesLost: new FormControl(this.pasingScoring.fumbleLost),
      passAttemptsPerPoint: new FormControl(this.pasingScoring.attemptsPerPoint),
      passCompletionsPerPoint: new FormControl(this.pasingScoring.completetionsPerPoint),
      passIncompletionsPerPoint: new FormControl(this.pasingScoring.incompletetionsPerPoint),
      bonus40YarTd: new FormControl(this.pasingScoring.bouns40YardTd),
      bonus50YarTd: new FormControl(this.pasingScoring.bonus50YardTd),
      bonus300Passing: new FormControl(this.pasingScoring.bonus300Passing),
      bonus400Passing: new FormControl(this.pasingScoring.bonus400Passing)
    });
  }
}
