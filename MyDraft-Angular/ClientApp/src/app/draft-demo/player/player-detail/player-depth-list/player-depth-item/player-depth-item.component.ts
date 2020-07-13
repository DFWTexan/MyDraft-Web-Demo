import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlayerDepthChartItem } from '../../../PlayerDepthChartItem.model';
import { Player } from '../../../player.model';
import { PlayerService } from '../../../player.service';


@Component({
  selector: 'app-player-depth-item',
  templateUrl: './player-depth-item.component.html',
  styleUrls: ['./player-depth-item.component.css']
})
export class PlayerDepthItemComponent implements OnInit, OnDestroy {
  @Input() playerDcItem: PlayerDepthChartItem;
  stat_1: string = 'St1';
  stat_2: string = 'St2';
  stat_3: string = 'St3';
  playerObj: Player;
  subscription: Subscription;

  constructor(private playerService: PlayerService) {
    this.subscription = this.playerService.playerObjRoute$.subscribe(
      objData => {
        this.playerObj = objData;
        this.setHeader();
      });
    
  }
    
  ngOnInit() {}

  setHeader() {
    switch (this.playerObj.position.substring(0, 1)) {
      case 'Q': {
        this.stat_1 = 'Pyd';
        this.stat_2 = 'PTd';
        this.stat_3 = 'PsI';
        break;
      }
      case 'R': {
        this.stat_1 = 'Ruy';
        this.stat_2 = 'RuT';
        this.stat_3 = 'RuA';
        break;
      }
      case 'W': {
        this.stat_1 = 'Rcy';
        this.stat_2 = 'RcT';
        this.stat_3 = 'Rec';
        break;
      }
      case 'T': {
        this.stat_1 = 'Rcy';
        this.stat_2 = 'RcT';
        this.stat_3 = 'Rec';
        break;
      }
      case 'K': {
        this.stat_1 = 'Fg';
        this.stat_2 = 'FgA';
        this.stat_3 = 'EpM';
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
