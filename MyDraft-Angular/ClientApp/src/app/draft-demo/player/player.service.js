"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PlayerService = /** @class */ (function () {
    function PlayerService(http, messageService, baseUrl) {
        this.http = http;
        this.messageService = messageService;
        this.playersChanged = new rxjs_1.Subject();
        //private players: Player[] = [
        //  new Player(
        //    8066,
        //    'Darren',
        //    'McFadden',
        //    'RB',
        //    'DAL',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/8066.png'),
        //  new Player(
        //    7242,
        //    'Drew',
        //    'Brees',
        //    'QB',
        //    'NO',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/7242.png'),
        //  new Player(
        //    13227,
        //    'Randall',
        //    'Cobb',
        //    'WR',
        //    'GB',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/13227.png'),
        //  new Player(
        //    11063,
        //    'Emmanuel',
        //    'Sanders',
        //    'WR',
        //    'DEN',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/11063.png'),
        //  new Player(
        //    5511,
        //    'Brent',
        //    'Celek',
        //    'TE',
        //    'PHI',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/5511.png'),
        //  new Player(
        //    3867,
        //    'Tony',
        //    'Romo',
        //    'QB',
        //    'DAL',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/3867.png'),
        //  new Player(
        //    3943,
        //    'DeSean',
        //    'Jackson',
        //    'WR',
        //    'WAS',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/3943.png'),
        //  new Player(
        //    4097,
        //    'Tavaris',
        //    'Jackson',
        //    'QB',
        //    'BAL',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/4097.png'),
        //  new Player(
        //    4314,
        //    'Tom',
        //    'Brady',
        //    'QB',
        //    'NE',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/4314.png'),
        //  new Player(
        //    4484,
        //    'Zach',
        //    'Miller',
        //    'TE',
        //    'PIT',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/4484.png'),
        //  new Player(
        //    4807,
        //    'Adrian',
        //    'Peterson',
        //    'RB',
        //    'MIN',
        //    'http://static.fantasydata.com/headshots/nfl/low-res/4807.png')
        //];
        this.players = [];
        this.baseURL = '';
        this.playerURL = this.baseURL + 'api/MyDraftData/GetPlayers';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.baseURL = baseUrl;
    }
    //setPlayers(players: IPlayer[]) {
    //  console.log(players);
    //  this.players = players;
    //  console.log(this.players);
    //  this.playersChanged.next(this.players.slice());
    //}
    PlayerService.prototype.getPlayers = function () {
        var _this = this;
        return this.http.get(this.playerURL)
            .pipe(operators_1.tap(function (_) { return _this.log('fetched players'); }), operators_1.catchError(this.handleError('getHeroes', [])));
    };
    PlayerService.prototype.getPlayerByID = function (id) {
        return this.players[id];
    };
    /* GET heroes whose name contains search term */
    //searchPlayers(term: string): Observable<IPlayer[]> {
    //  if (!term.trim()) {
    //    // if not search term, return empty hero array.
    //    return of([]);
    //  }
    //  return this.http.get<IPlayer[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    //    tap(x => x.length ?
    //      this.log(`found heroes matching "${term}"`) :
    //      this.log(`no heroes matching "${term}"`)),
    //    catchError(this.handleError<IPlayer[]>('searchHeroes', []))
    //  );
    //}
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    PlayerService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    PlayerService.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    PlayerService = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject('BASE_URL'))
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map