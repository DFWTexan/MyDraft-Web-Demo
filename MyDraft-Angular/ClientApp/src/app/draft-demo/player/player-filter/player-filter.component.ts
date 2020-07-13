import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-player-filter',
  templateUrl: './player-filter.component.html',
  styleUrls: ['./player-filter.component.css']
})
export class PlayerFilterComponent implements OnInit {
  playerValues: any = [
    'Points',
    'ADP',
    'AAV'
  ];
  Positions: any = [
    'Position',
    'QB',
    'RB',
    'WR',
    'TE',
    'K',
    'DEF'
  ];
  options: string[] = ["Available", "Wishlist", "Keepers", "Drafted", "All"];

  //selectedPos = "Position";
  //selectedStatus = "All";

  constructor() { }

  ngOnInit() {
  }

  changeValue(e) {
    console.log(e.target.value);
  }

  changePos(e) {
    console.log(e.target.value);
  }

  changeOption(e) {
    console.log(e.target.value);
  }

}
