import { Component, OnInit, Input } from '@angular/core';

import { NewsItem } from '../../newsItem.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: NewsItem;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.playerNews);
  }

}
