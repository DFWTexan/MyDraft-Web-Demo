import { INewsItem } from "./news.service";

export class NewsItem implements INewsItem {
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

  constructor(newsId: number, source: string, updated: string, title: string, content: string, url: string, termsOfUse: string, author: string, categories: string, teamId: number, team: string,
    fullName: string, playerId: number, playerName: string, position: string) {
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
}
