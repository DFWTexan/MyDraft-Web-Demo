import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlayerService } from '../../player.service';
import { PlayerDepthChartItem } from '../../PlayerDepthChartItem.model';
import { Player } from '../../player.model';

@Component({
  selector: 'app-player-depth-list',
  templateUrl: './player-depth-list.component.html',
  styleUrls: ['./player-depth-list.component.css']
})
export class PlayerDepthListComponent implements OnInit, OnDestroy {
  depthchartItems: PlayerDepthChartItem[];
  subscription_1: Subscription;
  subscription_2: Subscription;

  constructor(private playerService: PlayerService) {
    this.subscription_1 = this.playerService.playerObjRoute$.
      subscribe(_ => this.getDepthChart());
  }
   
  ngOnInit() {}

  getDepthChart() {
    this.subscription_2 = this.playerService.getPlayerDepthChart(this.playerService.player.position, this.playerService.player.teamAbbr)
      .subscribe(data => this.depthchartItems = data);
  }

  ngOnDestroy(): void {
    this.subscription_1.unsubscribe();
    this.subscription_2.unsubscribe();
  }
}
