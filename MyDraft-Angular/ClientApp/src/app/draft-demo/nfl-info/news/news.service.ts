import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { News } from './news.model';
import { MessageService } from '../../shared/message.service';
import { NewsItem } from './newsItem.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsChanged = new Subject<NewsItem[]>();
  //private playerNews: News[] = [
  //  new News(
  //    59945,
  //    'RotoBaller',
  //    '2017-09-01 20:40:40.0000000',
  //    '54 minutes ago',
  //    'John Ross Doubtful For Week One',
  //    "Cincinnati Bengals wide receiver John Ross is listed as doubtful for week one against the Baltimore Ravens. Ross suffered a knee injury early in the first quarter in the team's preseason finale against the Indianapolis Colts.With Ross' history of injuries in both knees, there was an obvious cause for concern. However, after further evaluation, the ninth overall pick in this years draft was diagnosed with what is being called a sprained knee. In any event, the team isn't going to take chances with their rookie wide out and will still have plenty of offensive weapons at their disposal.Regardless of the injury, this shouldn't impact his fantasy stock as he wasn't slated to make much of an impact at first anyhow but the fact that the injury isn't significant is definitely good news for the team.",
  //    'https://www.rotoballer.com/player-news/john-ross-doubtful-for-week-one/409020',
  //    'Dennis Clausen',
  //    'Injuries',
  //    18881,
  //    7,
  //    'CIN'),
  //  new News(
  //    59947,
  //    'RotoBaller',
  //    '2017-09-01 20:05:37.0000000',
  //    '3 hours ago',
  //    'Cardinals Release Chris Johnson',
  //    "ESPN's Adam Schefter has reported that veteran Arizona Cardinals All-Pro running back Chris Johnson has been released Friday. This comes a week after Johnson fumbled twice in the Cardinals third preseason game. Johnson was unseated from his starting role by fellow running back David Johnson at the end of the 2015 season and spent most of the 2016 season injured as the second-string running back. With the artist formerly known as CJ2K gone, that essentially means Kerwynn Williams is second in the backfield behind the workhorse David Johnson. Andre Ellington is third on the depth chart. Williams doesn't have standalone value but could be a handcuff option for Johnson owners in the deepest of leagues.",
  //    'https://www.rotoballer.com/player-news/cardinals-to-release-chris-johnson/409016',
  //    'Martin K',
  //    'Fallers',
  //    6828,
  //    1,
  //    'ARI'),
  //  new News(
  //    59946,
  //    'RotoBaller',
  //    '2017-09-01 19:35:25.0000000',
  //    '3 hours ago',
  //    'Cardinals To Release Aaron Dobson',
  //    "ESPN's Adam Schefter reports that the Arizona Cardinals will release veteran wide receiver Aaron Dobson. This comes as little surprise, as Dobson failed to make a huge impact during the preseason. With the depth that the Cardinals already possess at the position, fantasy owners should not worry about this loss, as it just frees up space for the top of the depth chart. There has never been any doubt who the top receivers for the Cardinals will be this season, and barring an injury, the receiving core looks to stay the same throughout the season.",
  //    'https://www.rotoballer.com/player-news/cardinals-to-release-aaron-dobson/409011',
  //    'Martin K',
  //    'Fallers',
  //    14886,
  //    1,
  //    'ARI'),
  //  new News(
  //    59762,
  //    'RotoBaller',
  //    '2017-08-29 01:24:48.0000000',
  //    '11 hours ago',
  //    "Odell Beckham Jr. Absent From Monday's Practice",
  //    "New York Giants star pass catcher Odell Beckham Jr. did not take part in in Monday's practice as he continues to rehabilitate a sprained ankle. \"When he's able to go, we'll take him back, \" head coach Ben McAdoo said. \"It's a medical decision.\" Beckham is currently listed as day-to-day, however, his actual return date remains a mystery. For now, the Giants are remaining optimistic that they'll have their top offensive weapon back in the lineup come September 10 for the season opener against the Dallas Cowboys.Anticipate top - notch WR1 production from the G - Men's explosive playmaker when he returns, further justifying his early first-round ADP.",
  //    'https://www.rotoballer.com/player-news/odell-beckham-jr-absent-from-mondays-practice/408038',
  //    'Michael Swindells',
  //    '',
  //    16389,
  //    23,
  //    'NYG'),
  //  new News(
  //    59740,
  //    'RotoBaller',
  //    '2017-08-28 23:52:56.0000000',
  //    '42 minutes ago',
  //    "OAdam Thielen Thrives In New Role",
  //    "Receiver Adam Thielen may have seen limited opportunity against San Francisco, but he was perfect when given a chance. The new slot man pulled in five receptions on five targets for 50 yards in the close win to San Francisco. It remains unclear how the receiving corps in Minnesota will align, but Thielen should be regular target. His standard value remains low, but he is going overlooked in PPR-leagues.",
  //    'https://www.rotoballer.com/player-news/adam-thielen-thrives-in-new-role/408024',
  //    'Michael Collins',
  //    'Risers',
  //    15534,
  //    20,
  //    'MIN')
  //]
  private News: NewsItem[] = [];
  private baseURL: string = '';
  private newsUrl = this.baseURL + 'api/MyDraftData/GetNews';
  private playerNewsUrl = this.baseURL + 'api/MyDraftData/GetPlayerNews/';

  constructor(private http: HttpClient,
              private messageService: MessageService,
              @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  getNews() {
    return this.http.get<INewsItem[]>(this.newsUrl)
      .pipe(
        tap(_ => this.log('fetched News')),
        catchError(this.handleError<INewsItem[]>('getNews', []))
      );
  }

  getNewsByPlayer(plyaerID: number) {
    return this.http.get<INewsItem[]>(this.playerNewsUrl + plyaerID)
      .pipe(
        tap(_ => this.log('fetched News by player ')),
        catchError(this.handleError<INewsItem[]>('getNewsByPlayer', []))
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

export interface INewsItem {
  newsId: number;
  source: string;
  updated: string;
  title: string;
  content: string;
  url: string;
  termsOfUse: string;
  author: string;
  categories: string;
  teamId: number;
  team: string;
  fullName: string;
  playerId: number;
  playerName: string;
  position: string;
}
