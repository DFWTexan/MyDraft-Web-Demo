import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
    // subscribe to home component messages
    this.subscription = this.leagueService.getUserLeagues()
      .subscribe(leagues => {
        console.log(leagues);
        this.userLeagues = leagues;
    });
  }

  ngOnInit() {
    this.userLeagues = this.leagueService.fetchLeagues().filter(({ leagueActive }) => leagueActive !== true);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
