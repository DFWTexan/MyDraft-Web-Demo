import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { League } from '../../league.model';

@Component({
  selector: 'app-league-item',
  templateUrl: './league-item.component.html',
  styleUrls: ['./league-item.component.css']
})
export class LeagueItemComponent implements OnInit {
  @Input() league: League;
  @Input() index: number;
  @Output() leagueSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }


  onSelected() {
    this.leagueSelected.emit();
  }
}
