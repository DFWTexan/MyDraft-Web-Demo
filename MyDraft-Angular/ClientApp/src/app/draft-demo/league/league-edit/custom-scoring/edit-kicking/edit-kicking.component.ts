import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ScoringKicking } from './scoringKicking.model';
import { LeagueService } from '../../../league.service';

@Component({
  selector: 'app-edit-kicking',
  templateUrl: './edit-kicking.component.html',
  styleUrls: ['./edit-kicking.component.css']
})
export class EditKickingComponent implements OnInit {
  kickingForm: FormGroup;
  kickingScoring: ScoringKicking;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.kickingScoring = this.leagueService.getScoringKICKING();
    this.initForm();
  }

  initForm() {
    this.kickingForm = new FormGroup({
      fgMade: new FormControl(this.kickingScoring.fgMade),
      patMade: new FormControl(this.kickingScoring.patMade),
      patMissed: new FormControl(this.kickingScoring.patMissed),
      fgMade40_49Yards: new FormControl(this.kickingScoring.fgMade40_49Yards),
      fgMade50Yards: new FormControl(this.kickingScoring.fgMade50Yards),
      fgMissed40_49Yards: new FormControl(this.kickingScoring.fgMissed40_49Yards),
      fgMissed50Yards: new FormControl(this.kickingScoring.fgMissed50Yards),
      fgMissedEach: new FormControl(this.kickingScoring.fgMissedEach),
      fgMade0_39Yards: new FormControl(this.kickingScoring.fgMade0_39Yards),
      fgMissed0_39Yards: new FormControl(this.kickingScoring.fgMissed0_39Yards)
    });
  }
}
