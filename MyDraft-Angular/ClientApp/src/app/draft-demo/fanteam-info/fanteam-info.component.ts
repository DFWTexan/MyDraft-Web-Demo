import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fanteam-info',
  templateUrl: './fanteam-info.component.html',
  styleUrls: ['./fanteam-info.component.css']
})
export class FanteamInfoComponent implements OnInit {
  displayView = 'DraftSelections'

  constructor() { }

  ngOnInit() {

  }

  onDisplaySelect(display: string) {
    this.displayView = display;
  }

}
