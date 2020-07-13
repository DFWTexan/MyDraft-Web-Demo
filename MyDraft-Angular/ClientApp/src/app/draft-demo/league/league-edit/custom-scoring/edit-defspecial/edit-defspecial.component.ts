import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LeagueService } from '../../../league.service';
import { ScoringDefSpecial } from './scoringDefSpecial.model';

@Component({
  selector: 'app-edit-defspecial',
  templateUrl: './edit-defspecial.component.html',
  styleUrls: ['./edit-defspecial.component.css']
})
export class EditDefspecialComponent implements OnInit {
  defSpecialForm: FormGroup;
  defSpecialScoring: ScoringDefSpecial;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.defSpecialScoring = this.leagueService.getScoringDEFSPECIAL();
    this.initForm();
  }

  initForm() {
    this.defSpecialForm = new FormGroup({
      intRetrunTD: new FormControl(this.defSpecialScoring.intRetrunTD),
      fumbleReturnTD: new FormControl(this.defSpecialScoring.fumbleReturnTD),
      fumbleRecovery: new FormControl(this.defSpecialScoring.fumbleRecovery),
      fumbleForced: new FormControl(this.defSpecialScoring.fumbleForced),
      interception: new FormControl(this.defSpecialScoring.interception),
      defSack: new FormControl(this.defSpecialScoring.defSack),
      defSafety: new FormControl(this.defSpecialScoring.defSafety),
      pointsAllowed_1_6: new FormControl(this.defSpecialScoring.pointsAllowed_1_6),
      pointsAllowed_7_13: new FormControl(this.defSpecialScoring.pointsAllowed_7_13),
      pointsAllowed_14_17: new FormControl(this.defSpecialScoring.pointsAllowed_14_17),
      pointsAllowed_22_27: new FormControl(this.defSpecialScoring.pointsAllowed_22_27),
      pointsAllowed_28_34: new FormControl(this.defSpecialScoring.pointsAllowed_28_34),
      pointsAllowed_35_45: new FormControl(this.defSpecialScoring.pointsAllowed_35_45),
      yardsAllowedUnder100: new FormControl(this.defSpecialScoring.yardsAllowedUnder100),
      yardsAllowed_100_199: new FormControl(this.defSpecialScoring.yardsAllowed_100_199),
      yardsAllowed_200_299: new FormControl(this.defSpecialScoring.yardsAllowed_200_299),
      yardsAllowed_350_399: new FormControl(this.defSpecialScoring.yardsAllowed_350_399),
      yardsAllowed_400_449: new FormControl(this.defSpecialScoring.yardsAllowed_400_449),
      yardsAllowed_450_499: new FormControl(this.defSpecialScoring.yardsAllowed_450_499),
      blockedPuntFGTD: new FormControl(this.defSpecialScoring.blockedPuntFGTD),
      blockedPuntFGPAT: new FormControl(this.defSpecialScoring.blockedPuntFGPAT)
      
    });
  }
}
