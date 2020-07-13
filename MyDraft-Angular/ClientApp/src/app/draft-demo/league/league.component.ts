import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LeagueService } from './league.service';
import { League } from './league.model';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  displayView = 'LEAGUE';
  userLeagues: League[] = [];
  activeLeague: League;

  constructor(private leagueService: LeagueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeLeague = this.leagueService.fetchLeagues().find(league => league.leagueActive === true);
  }
  
  onDisplaySelect(display: string) {
    this.displayView = display;
  }
    
}
