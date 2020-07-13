import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { League } from '../league.model';
import { LeagueService } from '../league.service';
import { MydraftService } from '../../shared/mydraft.service';


@Component({
  selector: 'app-my-league',
  templateUrl: './my-league.component.html',
  styleUrls: ['./my-league.component.css']
})
export class MyLeagueComponent implements OnInit {
  editMode = true;
  leagueForm: FormGroup;
  numTeamValues: any = [
    9, 10, 11, 12, 13, 14, 15, 16, 17
  ];
  draftTypeValues: any = [
    'Standard',
    'Auction'
];
  numRoundValues: any = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24

  ];
  draftOrderValues: any = [];

  selectednumTeams = 12;
  selectedNumRounds = 12;
  selectedDraftType = 'STANDARD';
  selectedDraftOrder = 'SNAKE';

  constructor(private leagueService: LeagueService,
              private myDraftService: MydraftService
  ) { }

  ngOnInit() {
    this.initForm();
    this.draftOrderValues = this.myDraftService.getDraftOrder();
    //console.log(this.draftOrderValues);
   }

  onSubmit() {
    if (this.editMode) {
      //this.leagueService.updateLeague(this.leagueService.activeLeague.id, this.leagueForm.value);
    } else {
      //this.leagueService.addLeague(this.leagueForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    //this.router.navigate(['../'], { relativeTo: this.route });
  }

  changeNumTeams(e) {
    this.selectednumTeams = e.target.value;
  }

  changeNumRounds(e) {
    this.selectedNumRounds = e.target.value;
  }

  changeDraftOrder(e) {
    this.selectedDraftOrder = e.target.value;
  }

  private initForm() {
    let leagueName = '';
    let numTeams = 12;
    let draftType = 1;
    let numRounds = 16;
    let draftOrder = 'snake';
    

    if (this.editMode) {
      const league = this.leagueService.getLeagueByID(this.leagueService.activeLeague.id);
      leagueName = league.name;
      numTeams = league.numTeams;
      draftType = league.draftType;
      numRounds = league.numRounds;
      draftOrder = league.draftOrder;
    }
    this.leagueForm = new FormGroup({
      leagueName: new FormControl(leagueName, Validators.required),
      numTeams: new FormControl(numTeams, Validators.required),
      draftType: new FormControl(draftType, Validators.required),
      numRounds: new FormControl(numRounds, Validators.required),
      draftOrder: new FormControl(draftOrder, Validators.required),
    });    
  }

}
