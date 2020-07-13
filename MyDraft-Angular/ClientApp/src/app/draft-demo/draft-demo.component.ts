import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player/player.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-draft-demo',
  templateUrl: './draft-demo.component.html',
  styleUrls: ['./draft-demo.component.css'],
  providers: [PlayerService]
})
export class DraftDemoComponent implements OnInit {
  onTheClockFanTeam: string = 'EMFTest';
  draftRound: number = 1;
  draftPick: number = 1;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {}

}
