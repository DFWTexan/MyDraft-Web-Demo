import { Component, OnInit, Input } from '@angular/core';

import { NewsItem } from '../../../../nfl-info/news/newsItem.model';

@Component({
  selector: 'app-player-news-item',
  templateUrl: './player-news-item.component.html',
  styleUrls: ['./player-news-item.component.css']
})
export class PlayerNewsItemComponent implements OnInit {
  @Input() playerNews: NewsItem;

  constructor() { }

  ngOnInit() {
  }

}
