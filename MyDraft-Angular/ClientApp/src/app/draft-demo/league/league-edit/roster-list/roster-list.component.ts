import { Component, OnInit } from '@angular/core';
import { IRoster, LeagueService } from '../../league.service';

@Component({
  selector: 'app-roster-list',
  templateUrl: './roster-list.component.html',
  styleUrls: ['./roster-list.component.css']
})
export class RosterListComponent implements OnInit {
  rostersStandard: IRoster[] = [];
  rostersFlex: IRoster[] = [];
  rostersIDP: IRoster[] = [];

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.rostersStandard = this.leagueService.getRosterStandard();
    this.rostersFlex = this.leagueService.getRosterFlex();
    this.rostersIDP = this.leagueService.getRosterIDP();
  }

}
