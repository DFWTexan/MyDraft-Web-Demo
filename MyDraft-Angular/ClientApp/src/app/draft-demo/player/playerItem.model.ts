import { IPlayerItem } from "./player.service";

export class PlayerItem implements IPlayerItem {
  playerID: number;
  playerName: string;
  firstName: string;
  lastName: string;
  teamAbbr: string;
  position: string;
  photoURL: string;
  byeWeek: number;
  aavStandard: number;
  isRookie: boolean;
  isHasNews: boolean;
  isHasInjury: boolean;

  constructor(playerID: number, playerName: string, firstName: string, lastName: string, teamAbbr: string, position: string, photoURL: string,
    byeWeek: number, aavStandard: number, isRookie: boolean, isHasNews: boolean, isHasInjury: boolean) {

    this.playerID = playerID;
    this.playerName = playerName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.teamAbbr = teamAbbr;
    this.position = position;
    this.photoURL = photoURL;
    this.byeWeek = byeWeek;
    this.aavStandard = aavStandard;
    this.isRookie = isRookie;
    this.isHasNews = isHasNews;
    this.isHasInjury = isHasInjury;
  }
}
