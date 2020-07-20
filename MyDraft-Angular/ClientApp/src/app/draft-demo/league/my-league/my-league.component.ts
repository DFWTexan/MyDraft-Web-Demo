import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { League } from '../league.model';
import { LeagueService } from '../league.service';
import { MydraftService } from '../../shared/mydraft.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-my-league',
  templateUrl: './my-league.component.html',
  styleUrls: ['./my-league.component.css']
})
export class MyLeagueComponent implements OnInit, OnDestroy {
  editMode = true;
  @Input() activeLeagueObj: League;
  leagueForm: FormGroup;
  league: League;
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

  subscription: Subscription;

  constructor(private leagueService: LeagueService,
              private myDraftService: MydraftService
  ) {
     //this.subscription = this.leagueService.activeLeague$
     // .subscribe(data => {
     //   console.log(data);
     //   this.league = data;
     //   this.initForm();
     // });
    this.initForm();
    this.draftOrderValues = this.myDraftService.getDraftOrder();
  }

  ngOnInit() {
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
      //leagueName = this.league.name;
      //numTeams = this.league.numberTeams;
      //draftType = this.league.draftType;
      //numRounds = this.league.numberRounds;
      //draftOrder = this.league.draftOrder;

      leagueName = this.activeLeagueObj.name;
      numTeams = this.activeLeagueObj.numberTeams;
      draftType = this.activeLeagueObj.draftType;
      numRounds = this.activeLeagueObj.numberRounds;
      draftOrder = this.activeLeagueObj.draftOrder;
    }
    this.leagueForm = new FormGroup({
      leagueName: new FormControl(leagueName, Validators.required),
      numTeams: new FormControl(numTeams, Validators.required),
      draftType: new FormControl(draftType, Validators.required),
      numRounds: new FormControl(numRounds, Validators.required),
      draftOrder: new FormControl(draftOrder, Validators.required),
    });    
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
