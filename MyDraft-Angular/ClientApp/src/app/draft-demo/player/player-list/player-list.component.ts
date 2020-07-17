import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Subscription } from 'rxjs';

import { PlayerService, IPlayerItem } from '../player.service';
import { PlayerItem } from '../playerItem.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players: PlayerItem[];
  subscription: Subscription;
  
  constructor(private playerService: PlayerService,
              private dataStorageService: DataStorageService) { }
    
  ngOnInit() {
    //this.subscription = this.playerService.playersFetched$
    //  .subscribe(
    //   data => {
    //      this.players = data;
    //      alert('EMFTest...');
    //      //this.playerService.setPlayers(data);
    //    });
    this.getPlayers();
  }

  getPlayers(): void {
    this.subscription = this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
