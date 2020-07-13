import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlayerService } from '../../player.service';
import { PlayerDepthChartItem } from '../../PlayerDepthChartItem.model';

@Component({
  selector: 'app-player-depth-list',
  templateUrl: './player-depth-list.component.html',
  styleUrls: ['./player-depth-list.component.css']
})
export class PlayerDepthListComponent implements OnInit, OnDestroy {
  depthchartItems: PlayerDepthChartItem[]
  subscription: Subscription;

  constructor(private playerService: PlayerService) {
    this.getDepthChart();
  }
   
  ngOnInit() {}

  getDepthChart() {
    //this.subscription = this.playerService.getPlayerDepthChart()
    //  .subscribe(data => this.depthchartItems = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
