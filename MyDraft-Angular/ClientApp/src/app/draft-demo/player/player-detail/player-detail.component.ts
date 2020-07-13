import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Player } from '../player.model';
import { PlayerService, IPlayer } from '../player.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit, OnDestroy {
  player: Player;
  idx: number;
  displayView = 'NEWS';
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
    private playerService: PlayerService) {}
    
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.idx = +params['id'];
          this.getPlayer(this.idx);
        });
  }

  getPlayer(id: number): void {
    //this.subscription = this.playerService.getPlayerByID(id)
    //  .subscribe(player => {
    //    this.player = player;
    //    this.playerService.setPlayerObj(player);
    //  }
    //);
  }
  
  onDisplaySelect(display: string) {
    this.displayView = display;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
