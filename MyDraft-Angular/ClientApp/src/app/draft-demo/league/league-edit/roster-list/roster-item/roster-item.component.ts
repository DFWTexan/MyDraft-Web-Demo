import { Component, OnInit, Input } from '@angular/core';
import { IRoster } from '../../../league.service';

@Component({
  selector: 'app-roster-item',
  templateUrl: './roster-item.component.html',
  styleUrls: ['./roster-item.component.css']
})
export class RosterItemComponent implements OnInit {
  @Input() roster: IRoster;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


  posNumChange(position: string, posItem: string, e) {
    console.log('EMFTest: ' + e.target.value);
    console.log(position);
    console.log(posItem);
  }
}
