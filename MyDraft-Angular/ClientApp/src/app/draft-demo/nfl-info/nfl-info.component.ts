import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MydraftService } from '../shared/mydraft.service';

@Component({
  selector: 'app-nfl-info',
  templateUrl: './nfl-info.component.html',
  styleUrls: ['./nfl-info.component.css']
})
export class NflInfoComponent implements OnInit {
  displayView = 'News';
  teamValues: any = [];
  selectedTeam = 'ALL';

  constructor(public fb: FormBuilder,
    private myDraftService: MydraftService) { }

  ngOnInit() {
    this.teamValues = this.myDraftService.getNFLTeams();
    //console.log(this.teamValues);
  }

  onDisplaySelect(display: string) {
    this.displayView = display;
  }

  teamFilterForm = this.fb.group({
    teamValue: ['']
  })

  changeTeam(e) {
    console.log(e.target.value);
    this.selectedTeam = e.target.value;
  }
}
