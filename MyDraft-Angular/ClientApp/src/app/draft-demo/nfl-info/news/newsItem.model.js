"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NewsItem = /** @class */ (function () {
    function NewsItem(newsId, source, updated, title, content, url, termsOfUse, author, categories, teamId, team, fullName, playerId, playerName, position) {
        this.newsId = newsId;
        this.source = source;
        this.updated = updated;
        this.title = title;
        this.content = content;
        this.url = url;
        this.termsOfUse = termsOfUse;
        this.author = author;
        this.categories = categories;
        this.teamId = teamId;
        this.team = team;
        this.fullName = fullName;
        this.playerId = playerId;
        this.playerName = playerName;
        this.position = position;
    }
    return NewsItem;
}());
exports.NewsItem = NewsItem;
//# sourceMappingURL=newsItem.model.js.map