import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LeagueService } from './league.service';
import { League } from './league.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit, OnDestroy   {
  displayView = 'LEAGUE';
  userLeagues: League[] = [];
  activeLeague: League;

  subscription: Subscription;

  constructor(private leagueService: LeagueService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.activeLeague = this.leagueService.activeLeague;
  }

  ngOnInit() {
    this.subscription = this.leagueService.getUserLeagues(1)
      .subscribe(leagues => {
        console.log(leagues);
        this.userLeagues = leagues;
        this.leagueService.setLeague(leagues);
        this.activeLeague = this.userLeagues.find(league => league.activeFlag === true);
        this.userLeagues = this.userLeagues.filter(({ activeFlag }) => activeFlag !== true);
      });
  }
  
  onDisplaySelect(display: string) {
    this.displayView = display;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
