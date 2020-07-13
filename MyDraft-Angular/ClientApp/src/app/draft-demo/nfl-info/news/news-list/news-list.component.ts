import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';
import { NewsItem } from '../newsItem.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: NewsItem[]

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
    console.log(this.news);
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(news => this.news = news);
  }
}
