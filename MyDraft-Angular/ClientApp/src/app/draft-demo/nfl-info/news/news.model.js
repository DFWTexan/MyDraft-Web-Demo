"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var News = /** @class */ (function () {
    function News(id, source, updated, timeAgo, title, content, url, author, category, playerID, teamID, teamAbbr) {
        this.id = id;
        this.source = source;
        this.updated = updated;
        this.timeAgo = timeAgo;
        this.title = title;
        this.content = content;
        this.url = url;
        this.author = author;
        this.category = category;
        this.playerID = playerID;
        this.teamID = teamID;
        this.teamAbbr = teamAbbr;
    }
    return News;
}());
exports.News = News;
//# sourceMappingURL=news.model.js.map