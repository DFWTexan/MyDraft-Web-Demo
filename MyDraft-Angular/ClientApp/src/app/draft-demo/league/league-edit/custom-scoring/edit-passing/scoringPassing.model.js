"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScoringPassing = /** @class */ (function () {
    function ScoringPassing(passYardPerPoint, tdPass, pass2ptConversion, interceptionsThrown, sacked, fumbleLost, attemptsPerPoint, completetionsPerPoint, incompletetionsPerPoint, bouns40YardTd, bonus50YardTd, bonus300Passing, bonus400Passing) {
        this.passYardPerPoint = passYardPerPoint;
        this.tdPass = tdPass;
        this.pass2ptConversion = pass2ptConversion;
        this.interceptionsThrown = interceptionsThrown;
        this.sacked = sacked;
        this.fumbleLost = fumbleLost;
        this.attemptsPerPoint = attemptsPerPoint;
        this.completetionsPerPoint = completetionsPerPoint;
        this.incompletetionsPerPoint = incompletetionsPerPoint;
        this.bouns40YardTd = bouns40YardTd;
        this.bonus50YardTd = bonus50YardTd;
        this.bonus300Passing = bonus300Passing;
        this.bonus400Passing = bonus400Passing;
    }
    return ScoringPassing;
}());
exports.ScoringPassing = ScoringPassing;
//# sourceMappingURL=scoringPassing.model.js.map