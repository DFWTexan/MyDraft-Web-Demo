"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var League = /** @class */ (function () {
    function League(id, name, abbr, mode, draftType, draftOrder, numTeams, numRounds, userTeamID, combineWRTE, includeIDP, scoringTypeID, auctionBudget, mockDraft, positionLimitEnabled, leagueActive) {
        this.id = id;
        this.name = name;
        this.abbr = abbr;
        this.mode = mode;
        this.draftType = draftType;
        this.draftOrder = draftOrder;
        this.numTeams = numTeams;
        this.numRounds = numRounds;
        this.userTeamID = userTeamID;
        this.combineWRTE = combineWRTE;
        this.includeIDP = includeIDP;
        this.scoringTypeID = scoringTypeID;
        this.auctionBudget = auctionBudget;
        this.mockDraft = mockDraft;
        this.positionLimitEnabled = positionLimitEnabled;
        this.leagueActive = leagueActive;
    }
    return League;
}());
exports.League = League;
//# sourceMappingURL=league.model.js.map