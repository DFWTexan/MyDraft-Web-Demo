import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { PlayerService } from './player.service';


@Injectable({
  providedIn: 'root'
})
export class PlayerResolverService {

  constructor(private dataStorageService: DataStorageService,
              private playersService: PlayerService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const players = this.playersService.getPlayers();

    //if (players.length === 0) {
    //  return this.dataStorageService.fetchPlayers();
    //} else {
      return players;
    //}
  }
}
