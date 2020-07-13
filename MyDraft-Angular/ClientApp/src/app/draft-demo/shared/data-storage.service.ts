import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { PlayerService, IPlayer, IPlayerItem, IPlayerDepthChartItem  } from '../player/player.service';
import { Player } from '../player/player.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private players: Player[] = [];
  private baseURL: string = '';
  // Player URL
  private playerUrl = this.baseURL + 'api/MyDraftData';
  private playerDepthChartUrl = this.baseURL + 'api/MyDraftData/GetPlayerDepthChart/';
  private playerSearchURL = this.baseURL + 'api/MyDraftData/SearchPlayers';

  constructor(private http: HttpClient,
              @Inject('BASE_URL') baseUrl: string,
              private playerService: PlayerService,
              private messageService: MessageService) {
    this.baseURL = baseUrl;
  }
  
  fetchPlayers() {
    this.http.get<IPlayerItem[]>(this.playerUrl)
      .pipe(
        tap(_ => this.log('fetched players')),
        catchError(this.handleError<IPlayerItem[]>('getPlayers', []))
    )
      .subscribe(data => {
        this.playerService.setPlayers(data);
      });
  }

  fetchPlayerByID(id: number) {
    return this.http.get<IPlayer>(this.playerUrl + '/' + id)
      .pipe(
        tap(_ => this.log('fetched player with ID')),
        catchError(this.handleError<IPlayer>('getPlayerByID'))
      );
  }

  fetchPlayerDepthChart(position: string, teamAbbr) {
    return this.http.get<IPlayerDepthChartItem[]>(this.playerDepthChartUrl + position + '/' + teamAbbr)
      .pipe(
        tap(_ => this.log('fetched player depthchart')),
        catchError(this.handleError<IPlayerDepthChartItem[]>('getPlayerDepthChart', []))
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
    this.messageService.add(`DataStorageService: ${message}`);
  }
}
