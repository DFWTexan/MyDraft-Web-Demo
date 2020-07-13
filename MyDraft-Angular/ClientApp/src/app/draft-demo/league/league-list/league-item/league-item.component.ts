import { Component, OnInit, Input } from '@angular/core';

import { League } from '../../league.model';

@Component({
  selector: 'app-league-item',
  templateUrl: './league-item.component.html',
  styleUrls: ['./league-item.component.css']
})
export class LeagueItemComponent implements OnInit {
  @Input() league: League;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
