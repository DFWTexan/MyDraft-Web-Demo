"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScoringRushing = /** @class */ (function () {
    function ScoringRushing(rushYardPerPoint, rushTD, rushAttemptsPerPoint, rush2ptConversion, rushFumbleLost, bonus40YarTD, bonus50YardTD, bonus100Rushing, bonus200Rushing) {
        this.rushYardPerPoint = rushYardPerPoint;
        this.rushTD = rushTD;
        this.rushAttemptsPerPoint = rushAttemptsPerPoint;
        this.rush2ptConversion = rush2ptConversion;
        this.rushFumbleLost = rushFumbleLost;
        this.bonus40YardRushTD = bonus40YarTD;
        this.bonus50YardRushTD = bonus50YardTD;
        this.bonus100Rushing = bonus100Rushing;
        this.bonus200Rushing = bonus200Rushing;
    }
    return ScoringRushing;
}());
exports.ScoringRushing = ScoringRushing;
//# sourceMappingURL=scoringRushing.model.js.map