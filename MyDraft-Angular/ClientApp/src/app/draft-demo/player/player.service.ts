import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of, Subscription } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Player } from './player.model';
import { MessageService } from '../shared/message.service';
import { PlayerItem } from './playerItem.model';

@Injectable()
export class PlayerService {
  // Observable string sources
  private fetchedPlayers = new Subject<any>();
  private routedPlayer = new Subject<Player>();
  
  // Observable string streams
  playersFetched$ = this.fetchedPlayers
  playerObjRoute$ = this.routedPlayer.asObservable();
  private player: Player;
  private baseURL: string = '';
  //private playerUrl = this.baseURL + 'api/MyDraftData';
  //private playerDepthChartUrl = this.baseURL + 'api/MyDraftData/GetPlayerDepthChart/';
  private playerSearchURL = this.baseURL + 'api/MyDraftData/SearchPlayers';

  private players: PlayerItem[];
  subscription: Subscription;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  setPlayers(players: any): void {
    //console.log(players);
    this.players = players;
    //console.log(this.players);
    this.fetchedPlayers.next(players);
  }

  setPlayerObj(player: Player) {
    this.player = player;
    this.routedPlayer.next(this.player);
  }

  //getPlayers(){
  //  //return this.http.get<IPlayerItem[]>(this.playerUrl)
  //  //  .pipe(
  //  //    tap(_ => this.log('fetched players')),
  //  //    catchError(this.handleError<IPlayerItem[]>('getPlayers', []))
  //  //  );
  //  return this.players.slice();
  //}
  getPlayers(): Observable<any> {
    //return this.http.get<IPlayerItem[]>(this.playerUrl)
    //  .pipe(
    //    tap(_ => this.log('fetched players')),
    //    catchError(this.handleError<IPlayerItem[]>('getPlayers', []))
    //  );
    return this.fetchedPlayers.asObservable();
  }

  getPlayerByID(id: number) {
    //return this.http.get<IPlayer>(this.playerUrl + '/' + id)
    //  .pipe(
    //    tap(_ => this.log('fetched player with ID')),
    //    catchError(this.handleError<IPlayer>('getPlayerByID'))
    //  );
  }

  getPlayerDepthChart() {
    //return this.http.get<IPlayerDepthChartItem[]>(this.playerDepthChartUrl + this.player.position +'/'+ this.player.teamAbbr)
    //  .pipe(
    //    tap(_ => this.log('fetched player depthchart')),
    //    catchError(this.handleError<IPlayerDepthChartItem[]>('getPlayerDepthChart', []))
    //  );
  }

  /* GET heroes whose name contains search term */
  searchPlayers(term: string): Observable<IPlayer[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<IPlayer[]>(`${this.playerSearchURL}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found players matching "${term}"`) :
        this.log(`no players matching "${term}"`)),
      catchError(this.handleError<Player[]>('searchPlayers', []))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PlayerService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PlayerService: ${message}`);
  }


}

export interface IPlayer {
  playerID: number;
  playerName: string;
  firstName: string;
  lastName: string;
  teamAbbr: string;
  birthDate: string;
  experience: number;
  position: string;
  weight: number;
  height: string;
  college: string;
  photoURL: string;
  age: number;
}

export interface IPlayerItem {
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
}

export interface IPlayerDepthChartItem {
  playerID: number;
  pos: string;
  playerName: string;
  stat_1: number;
  stat_2: number;
  stat_3: number;
  points: number;
}
