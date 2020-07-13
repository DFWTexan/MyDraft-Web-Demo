export class News {
  public id: number;
  public source: string;
  public updated: string;
  public timeAgo: string;
  public title: string;
  public content: string;
  public url: string;
  public termsofUse: string;
  public author: string;
  public category: string;
  public playerID: number;
  public teamID: number;
  public teamAbbr: string;

  constructor(id: number, source: string, updated: string, timeAgo: string, title: string, content: string, url: string, author: string, category: string, playerID: number, teamID: number, teamAbbr: string) {
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
}
