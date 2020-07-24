import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { League } from '../league.model';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})
export class LeagueListComponent implements OnInit, OnDestroy  {
  subscription: Subscription;
  userLeagues: League[] = [];

  constructor(private leagueService: LeagueService) {
    this.userLeagues = leagueService.getLeagues();
  }

  ngOnInit() { }

  onLeagueSelected(league: League) {
    this.leagueService.setActiveLeague(league);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
