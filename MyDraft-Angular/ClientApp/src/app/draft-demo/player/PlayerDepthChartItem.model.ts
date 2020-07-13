import { IPlayerDepthChartItem } from "./player.service";

export class PlayerDepthChartItem implements IPlayerDepthChartItem {
  playerID: number;
  pos: string;
  playerName: string;
  stat_1: number;
  stat_2: number;
  stat_3: number;
  points: number;

  constructor(playerID: number, pos: string, playerName: string, stat_1: number, stat_2: number,  stat_3: number, points: number) {
    this.playerID = playerID;
    this.pos = pos;
    this.playerName = playerName;
    this.stat_1 = stat_1;
    this.stat_2 = stat_2;
    this.stat_3 = stat_3;
    this.points = points;
  }
}
