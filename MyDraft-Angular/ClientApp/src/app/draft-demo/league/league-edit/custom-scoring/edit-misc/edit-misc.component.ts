import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LeagueService } from '../../../league.service';
import { ScoringMisc } from './scoringMisc.model';

@Component({
  selector: 'app-edit-misc',
  templateUrl: './edit-misc.component.html',
  styleUrls: ['./edit-misc.component.css']
})
export class EditMiscComponent implements OnInit {
  miscForm: FormGroup;
  miscScoring: ScoringMisc;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.miscScoring = this.leagueService.getScoringMISC();
    this.initForm();
  }

  initForm() {
    this.miscForm = new FormGroup({
      kickoffReturnTD: new FormControl(this.miscScoring.kickoffReturnTD),
      puntReturnTD: new FormControl(this.miscScoring.puntReturnTD),
      kickReturnYardsPerPoint: new FormControl(this.miscScoring.kickReturnYardsPerPoint),
      puntReturnYardsPerPoint: new FormControl(this.miscScoring.puntReturnYardsPerPoint)
    });
  }
}
