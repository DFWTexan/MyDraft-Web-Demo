import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ScoringRecieving } from './scoringRecieving.model';
import { LeagueService } from '../../../league.service';

@Component({
  selector: 'app-edit-recieving',
  templateUrl: './edit-recieving.component.html',
  styleUrls: ['./edit-recieving.component.css']
})
export class EditRecievingComponent implements OnInit {
  recievingForm: FormGroup;
  recievingScoring: ScoringRecieving;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.recievingScoring = this.leagueService.getScoringRECIEVING();
    this.initForm();
  }

  initForm() {
    this.recievingForm = new FormGroup({
      recPointPerRec: new FormControl(this.recievingScoring.recievingPointPerRec),
      recYardsPerPoint: new FormControl(this.recievingScoring.recievingYardsPerPoint),
      recTD: new FormControl(this.recievingScoring.recievingTD),
      rec2ptConversion: new FormControl(this.recievingScoring.recieving2ptConversion),
      recFumblesLost: new FormControl(this.recievingScoring.recievingFumbleLost),
      bonus40YardRecTd: new FormControl(this.recievingScoring.bonus40YardRecTD),
      bonus50YardRecTd: new FormControl(this.recievingScoring.bonus50YardRecTD),
      bonus100Rec: new FormControl(this.recievingScoring.bonus100Recieving),
      bonus200Rec: new FormControl(this.recievingScoring.bonus200Recieving)
    });
  }
}
