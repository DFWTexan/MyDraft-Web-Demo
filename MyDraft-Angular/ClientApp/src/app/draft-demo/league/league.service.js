"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var league_model_1 = require("./league.model");
var LeagueService = /** @class */ (function () {
    function LeagueService(messageService) {
        this.messageService = messageService;
        this.leagues = [
            new league_model_1.League(1, 'MyLeague_1', 'MFL_1', 1, 0, 'snake', 12, 16, 1, false, false, null, 10, false, 0, true),
            new league_model_1.League(2, 'My_League_2', 'MFL_2', 1, 0, 'snake', 12, 16, 1, false, false, null, 10, false, 0, false),
        ];
        this.leaguesChanged = new rxjs_1.Subject();
    }
    LeagueService.prototype.getUserLeagues = function () {
        return this.leaguesChanged.asObservable();
    };
    LeagueService.prototype.fetchLeagues = function () {
        this.log('Fetching Leagues');
        this.leaguesChanged.next();
        return this.leagues.slice();
    };
    LeagueService.prototype.getLeagueByID = function (id) {
        return this.leagues[id];
    };
    /** Log a LeagueService message with the MessageService */
    LeagueService.prototype.log = function (message) {
        this.messageService.add("LeagueService: " + message);
    };
    LeagueService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LeagueService);
    return LeagueService;
}());
exports.LeagueService = LeagueService;
//# sourceMappingURL=league.service.js.map